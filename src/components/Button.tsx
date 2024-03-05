import { ReactElement } from 'react'
import { FaArrowRotateLeft, FaDivide, FaMinus, FaPlus, FaXmark } from 'react-icons/fa6'

interface ButtonProps {
  setCounter: React.Dispatch<React.SetStateAction<number>>
  amount: number
  operator: string
}

interface Operations {
  [key: string]: (a: number, b: number) => number
}

interface OperatorIcon {
  [key: string]: ReactElement
}

const operations: Operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
  reset: (a, b) => 0,
}

const operatorIcon: OperatorIcon = {
  '+': <FaPlus />,
  '-': <FaMinus />,
  '*': <FaXmark />,
  '/': <FaDivide />,
  reset: <FaArrowRotateLeft />,
}

const Button: React.FC<ButtonProps> = ({ setCounter, amount, operator }) => {
  const handleBtn = () => {
    setCounter((counter) => operations[operator](counter, amount))
  }

  return <button onClick={handleBtn}>{operatorIcon[operator]}</button>
}

export default Button
