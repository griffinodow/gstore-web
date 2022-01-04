import { Link } from 'react-router-dom'
import styles from './Product.module.sass'

export const Product = ({ id, name, price, description, url }: { id: string, name: string, price: number, description: string, url: string }) => {
  return (
    <Link to={`/products/${id}`} className={styles.product}>
      <section>
        <img alt={name} src={url}></img>
      </section>
      <section>
        <h2>{ name }</h2>
        <span>{ '$' + price / 100 }</span>
        <p>{ description }</p>
      </section>
    </Link>
  )
}
