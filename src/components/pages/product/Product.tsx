import { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useGetCatalogQuery } from '../../../slices/endpoints/catalog'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Counter } from '../../components/Counter'
import { addLineItem } from '../../../slices/app'
import styles from './Product.module.sass'
import { MdSync } from 'react-icons/md'

export const Product = () => {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const { id } = useParams()
  const { data: catalog } = useGetCatalogQuery()
  const result = catalog?.data.catalog.items.find((item) => item.id === id)

  const handleAddToCart = () => {
    dispatch(addLineItem({
      itemId: id as string,
      quantity: quantity,
      catalogObjectId: result!.variations![0].id
    }))
    setAdded(true)
  }

  if (catalog && !added) {
    return (
      <>
        <Header title='ADD TO CART'/>
        <main>
          { catalog && !result
            ? <p>Product does not exist</p>
            : <div className={styles.product}>
                <section>
                  <img alt={result!.name} src={result!.url}></img>
                </section>
                <section>
                  <section>
                    <h2>{result!.name}</h2>
                    <h2>{'$' + result!.variations![0].price / 100}</h2>
                    <p>{result!.description}</p>
                  </section>
                  <section>
                    <Counter count={quantity} setCount={setQuantity}/>
                    <Button text={'Add to Cart'} onClick={handleAddToCart}/>
                  </section>
                </section>
              </div>
          }
        </main>
      </>
    )
  } else if (added) {
    return <Navigate to='/'/>
  } else {
    return (
      <>
        <Header title='ADD TO CART'/>
        <main className='spin-container'>
          <MdSync className='spin' size={36}/>
        </main>
      </>
    )
  }
}
