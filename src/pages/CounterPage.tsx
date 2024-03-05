import { useState } from 'react'
import styles from './CounterPage.module.css'
import Button from '../components/Button'

const CounterPage = () => {
  const [counter, setCounter] = useState(0)
  const [amount, setAmount] = useState(1)
  const operators = ['+', '-', '*', '/', 'reset']

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
        {operators.map((operator, index) => (
          <Button
            key={index}
            setCounter={setCounter}
            amount={amount}
            operator={operator}
          />
        ))}
      </div>
    </div>
  )
}

export default CounterPage
