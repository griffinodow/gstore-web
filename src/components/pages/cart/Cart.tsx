import { Header } from '../../components/Header'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../lib/redux'
import { useGetCatalogQuery } from '../../../slices/endpoints/catalog'
import { Counter } from '../../components/Counter'
import { Button } from '../../components/Button'
import { removeLineItem, updateLineItem } from '../../../slices/app'
import styles from './Cart.module.sass'
import { Link } from 'react-router-dom'
import { MdSync } from 'react-icons/md'

/**
 * The cart page that lists all list items.
 * @returns The Cart component.
 */
export const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state: RootState) => state.app.lineItems)
  const { data: catalog } = useGetCatalogQuery()
  let subTotal = 0
  const estTaxes = 0

  const handleUpdateLineItem = (id: string, quantity: number) => {
    dispatch(updateLineItem({ id, quantity }))
  }

  const handleRemoveLineItem = (id: string) => {
    dispatch(removeLineItem(id))
  }

  if (catalog) {
    cart.forEach(lineItem => {
      const item = catalog!.data!.catalog!.items!.find(item =>
        item.id === lineItem.itemId)
      subTotal += lineItem.quantity * item!.variations![0].price
    })
    return (
      <>
        <Header title='CART'/>
        <main>
          { cart.length <= 0
            ? <p className={styles.center}>Cart is empty</p>
            : <section className={styles.container}>
                <div className={styles.dash}>
                  <section>
                    <h2>Summary</h2>
                  </section>
                  <section>
                    <p>Subtotal:</p>
                    <p>{ '$' + (subTotal / 100).toFixed(2)}</p>
                  </section>
                  <section>
                    <p>Est. Taxes:</p>
                    <p>{ '$' + (estTaxes / 100).toFixed(2)}</p>
                  </section>
                  <section>
                    <p>Total:</p>
                    <p>{ '$' + ((subTotal + estTaxes) / 100).toFixed(2)}</p>
                  </section>
                  <section>
                    <Link to='/checkout'>
                      <Button text='Checkout'/>
                    </Link>
                  </section>
                </div>
                { cart.map((lineItem) => {
                  const itemData = catalog.data.catalog.items.find((item) =>
                    item.id === lineItem.itemId)
                  if (itemData) {
                    return (<div
                              key={lineItem.itemId}
                              className={styles.listing}>
                      <section>
                        <img alt={itemData.name} src={itemData?.url}></img>
                      </section>
                      <section>
                        <section>
                          <h2>{itemData?.name}</h2>
                          <h2>{ '$' + itemData?.variations[0].price / 100}</h2>
                        </section>
                        <section>
                          <Counter
                            count={lineItem.quantity}
                            setCount={(number: number) =>
                              handleUpdateLineItem(
                                lineItem.itemId,
                                number)}/>
                          <Button
                            text='Remove'
                            onClick={() =>
                              handleRemoveLineItem(lineItem.itemId)}/>
                        </section>
                      </section>
                    </div>)
                  } else {
                    return <></>
                  }
                })}
              </section>
          }
        </main>
        </>
    )
  } else {
    return (
      <>
        <Header title='CART'/>
        <main className='spin-container'>
          <MdSync className='spin' size={36}/>
        </main>
      </>
    )
  }
}
