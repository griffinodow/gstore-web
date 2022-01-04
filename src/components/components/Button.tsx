import styles from './Button.module.sass'

export const Button = ({ text, onClick }: { text: string, onClick?: Function }) => {
  return (
    onClick
      ? <button onClick={() => onClick()} className={styles.button}>{text}</button>
      : <button className={styles.button}>{text}</button>
  )
}
