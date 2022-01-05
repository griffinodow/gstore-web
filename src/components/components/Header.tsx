import { Link } from 'react-router-dom'
import { CartCounter } from './CartCounter'
import styles from './Header.module.sass'

/**
 * The header component at the top of a page.
 * @param title The title of the page.
 * @param subtitle The subtitle of the page.
 * @returns The Header component.
 */
export const Header = ({
  title,
  subtitle
}: { title: string, subtitle?: string }) => {
  return (
    <header className={styles.header}>
      <section>
        <Link to="/" className={styles.link}>
          <span className='heading'>Home</span>
        </Link>
        <CartCounter/>
      </section>
      <section>
        <h1>{title}</h1>
        { subtitle && <span>{subtitle}</span> }
      </section>
    </header>
  )
}
