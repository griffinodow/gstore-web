import styles from './SelectButton.module.sass'

/**
 * Button used to show selected choice.
 * @param id The button ID.
 * @param text The button text.
 * @param selected If the button is selected.
 * @param setCategory To change the selected category to this button.
 * @returns The SelectButton component.
 */
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
