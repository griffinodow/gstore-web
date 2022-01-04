import { useState } from 'react'
import { Header } from '../../components/Header'
import { NavSelector } from './components/NavSelector'
import { useGetCatalogQuery } from '../../../slices/endpoints/catalog'
import { Product } from './components/Product'
import styles from './Home.module.sass'
import { MdSync } from 'react-icons/md'

export const Home = () => {
  const [category, setCategory] = useState<undefined | string>()
  const { data: catalog } = useGetCatalogQuery()

  if (!category && catalog && catalog.data.catalog.categories.length > 0) {
    setCategory(catalog.data.catalog.categories[0].id)
  }

  if (catalog) {
    return (
      <>
        <Header title='G-STORE' subtitle="The World's Best Selection of Cookies"/>
        <main>
          { category && <NavSelector category={category} setCategory={setCategory} categories={catalog.data.catalog.categories}/> }
          <section className={styles.products}>
            { category && catalog.data.catalog.categories.length > 0
              ? catalog.data.catalog.items.filter((entry) => entry.categoryId === category).map((entry) =>
                <Product
                  key={entry.id}
                  id={entry.id}
                  name={entry.name}
                  description={entry.description}
                  url={entry.url}
                  price={entry.variations[0].price}
                />)
              : <p>No products available</p>
            }
          </section>
        </main>
      </>
    )
  } else {
    return (
      <>
        <Header title='G-STORE' subtitle="The World's Best Selection of Cookies"/>
        <main className='spin-container'>
          <MdSync className='spin' size={36}/>
        </main>
      </>
    )
  }
}
