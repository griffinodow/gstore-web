import { SelectButton } from './SelectButton'
import styles from './NavSelector.module.sass'
import { ICategory } from '../../../../slices/endpoints/catalog'

/**
 * Shows the select buttons on the home page.
 * @param category The current selected category.
 * @param setCategory The function that sets the new category.
 * @param categories An array of categories.
 * @returns The NavSelector component.
 */
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
