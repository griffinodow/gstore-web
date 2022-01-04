import { SelectButton } from './SelectButton'
import styles from './NavSelector.module.sass'
import { ICategory } from '../../../../slices/endpoints/catalog'

export const NavSelector = ({
  category,
  setCategory,
  categories
}: { category: string, setCategory: Function, categories: ICategory[] }) => {
  return (
    <div className={styles.selector}>
      { categories.map((entry) =>
        <SelectButton
          key={entry.id}
          id={entry.id}
          text={entry.name}
          selected={category === entry.id}
          setCategory={setCategory}
        />) }
    </div>
  )
}
