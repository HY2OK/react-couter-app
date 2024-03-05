import { useState } from 'react'
import styles from './CounterPage.module.css'
import Button from '../components/Button'
import { useAppSelector } from '../app/hooks'

const CounterPage = () => {
  const [amount, setAmount] = useState(1)
  const counter = useAppSelector((state) => state.counter.value)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value))
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Counter App</h1>
      <div className={styles.textField}>{counter}</div>
      <div>
        <input
          className={styles.inputField}
          type="number"
          value={amount}
          onChange={handleInput}
        />
      </div>
      <div className={styles.buttons}>
        <Button amount={amount} operator="+" />
        <Button amount={amount} operator="-" />
        <Button amount={amount} operator="*" />
        <Button amount={amount} operator="/" />
        <Button amount={amount} operator="reset" />
      </div>
    </div>
  )
}

export default CounterPage
