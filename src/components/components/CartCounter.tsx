import { useSelector } from 'react-redux'
import { RootState } from '../../lib/redux'
import { MdShoppingCart } from 'react-icons/md'
import { Link } from 'react-router-dom'
import styles from './CartCounter.module.sass'

export const CartCounter = () => {
  const cart = useSelector((state: RootState) => state.app.lineItems)
  let total = 0
  cart.forEach((lineItem) => { total += lineItem.quantity })
  return (
    <Link to='/cart' className={styles.button}>
      <MdShoppingCart size={24}/>
      {total}
    </Link>
  )
}
