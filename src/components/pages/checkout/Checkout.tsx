import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { RootState } from '../../../lib/redux'
import { useGetCatalogQuery } from '../../../slices/endpoints/catalog'
import { useCreateOrderMutation } from '../../../slices/endpoints/order'
import { useCreatePaymentMutation } from '../../../slices/endpoints/payment'
import { Header } from '../../components/Header'
import { SquareForm } from './components/SquareForm'
import styles from './Checkout.module.sass'
import { MdSync } from 'react-icons/md'

export const Checkout = () => {
  const cart = useSelector((state: RootState) => state.app.lineItems)
  const [cardId, setCardId] = useState<undefined | string>()
  const [paymentSent, setPaymentSent] = useState(false)
  const { data: catalog } = useGetCatalogQuery()
  const [createOrder, { isError: isOrderError, error: orderError, data: order }] = useCreateOrderMutation()
  const [createPayment, { isError: isPaymentError, error: paymentError, data: payment }] = useCreatePaymentMutation()
  const isError = isOrderError || isPaymentError

  useEffect(() => {
    if (cardId && !paymentSent) {
      createPayment({
        sourceId: cardId,
        orderId: order!.data.order.id as string
      })
      setPaymentSent(true)
    } else if (catalog && order) {
      console.log('Doing the init')
    } else if (catalog) {
      const mutatedItems = Array.from<any>(cart).map(item => {
        return {
          itemId: item.itemId,
          quantity: item.quantity.toString(),
          catalogObjectId: item.catalogObjectId
        }
      })
      createOrder({
        locationId: catalog.data.catalog.locationId,
        lineItems: mutatedItems
      })
    } else if (isError) {
      alert(orderError || paymentError)
    }
  }, [catalog, isError, order, cardId])

  if (cart.length === 0) {
    return <Navigate to='/'/>
  }

  if (catalog && order) {
    console.log(order)
    return (
      <>
          <Header title='CHECKOUT'/>
          <main>
            <section className={styles.container}>
              <div className={styles.dash}>
                <section>
                  <h2>Summary</h2>
                </section>
                <section>
                  <p>Subtotal:</p>
                  <p>{ '$' + (order.data.order.totalMoney / 100 - 0).toFixed(2) }</p>
                </section>
                <section>
                  <p>Est. Taxes:</p>
                  <p>{ '$' + (0).toFixed(2) }</p>
                </section>
                <section>
                  <p>Total:</p>
                  <p>{ '$' + (order.data.order.totalMoney / 100).toFixed(2) }</p>
                </section>
                <section className={styles.cardcontainer}>
                  <div className={styles.card}>
                    <h2>Test Card Info</h2>
                    <section>
                      <p>Card Number:</p>
                      <p>4111 1111 1111 1111</p>
                    </section>
                    <section>
                      <p>CVV</p>
                      <p>111</p>
                    </section>
                    <section>
                      <p>MM/YY</p>
                      <p>11/25</p>
                    </section>
                  </div>
                </section>
                <section>
                  { !cardId ? <SquareForm onSuccess={(id: string) => setCardId(id)}/> : payment ? <></> : <p>Ready to submit</p>}
                  { payment && <p>Thank you! Your order has been processed.</p> }
                </section>
              </div>
            </section>
          </main>
          </>
    )
  } else {
    return (
      <>
        <Header title='CHECKOUT'/>
        <main className='spin-container'>
          <MdSync className='spin' size={36}/>
        </main>
      </>
    )
  }
}
