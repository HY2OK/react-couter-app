import { useState } from 'react'
import styles from './CounterPage.module.css'
import Button from '../components/Button'

const CounterPage = () => {
  const [counter, setCounter] = useState(0)
  const [amount, setAmount] = useState(1)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value))
  }

  return (
    <div className={styles.container}>
      <div className={styles.textField}>{counter}</div>
      <div>
        <input type="number" value={amount} onChange={handleInput} />
      </div>
      <div className={styles.buttons}>
        <Button setCounter={setCounter} amount={amount} operator="+" />
        <Button setCounter={setCounter} amount={amount} operator="-" />
        <Button setCounter={setCounter} amount={amount} operator="*" />
        <Button setCounter={setCounter} amount={amount} operator="/" />
        <Button setCounter={setCounter} amount={amount} operator="reset" />
      </div>
    </div>
  )
}

export default CounterPage
