import styles from './Counter.module.sass'
export const Counter = ({ count, setCount }: { count: number, setCount: Function }) => {
  const handleDecrementCount = () => {
    if (count > 1) setCount(count -= 1)
  }
  const handleIncrementCount = () => {
    if (count < 99) setCount(count += 1)
  }
  return (
    <div className={styles.counter}>
      { count > 1 ? <button onClick={() => handleDecrementCount()}>-</button> : <button disabled>-</button> }
      <div>{count.toString()}</div>
      { count < 99 ? <button onClick={() => handleIncrementCount()}>+</button> : <button disabled>+</button>}
    </div>
  )
}
