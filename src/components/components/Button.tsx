import styles from './Button.module.sass'

/**
 * Generic button component.
 * @param param Display text, optional click function.
 * @returns Button component.
 */
export const Button = ({
  text,
  onClick
}: {
  text: string,
  onClick?: Function
}) => {
  return (
    onClick
      ? <button
          onClick={() => onClick()}
          className={styles.button}>
            {text}
        </button>
      : <button className={styles.button}>{text}</button>
  )
}
