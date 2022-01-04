import styles from './SelectButton.module.sass'

export const SelectButton = ({
  id,
  text,
  selected,
  setCategory
}: {
  id: string,
  text: string,
  selected: boolean
  setCategory: Function
}) => {
  return (
    <button
      className={selected ? styles.full : styles.empty}
      onClick={() => setCategory(id)}>
      {text}
    </button>
  )
}
