import { ReactElement } from 'react'
import { FaArrowRotateLeft, FaDivide, FaMinus, FaPlus, FaXmark } from 'react-icons/fa6'
import { useAppDispatch } from '../app/hooks'
import {
  decrement,
  division,
  increment,
  multiplication,
  reset,
} from '../features/counter/counterSlice'

interface ButtonProps {
  amount: number
  operator: string
}

interface Operations {
  [key: string]: (a: number) => void
}

interface OperatorIcon {
  [key: string]: ReactElement
}

const Button: React.FC<ButtonProps> = ({ amount, operator }) => {
  const dispatch = useAppDispatch()

  const operations: Operations = {
    '+': (a) => dispatch(increment(a)),
    '-': (a) => dispatch(decrement(a)),
    '*': (a) => dispatch(multiplication(a)),
    '/': (a) => dispatch(division(a)),
    reset: (a) => dispatch(reset()),
  }

  const operatorIcon: OperatorIcon = {
    '+': <FaPlus />,
    '-': <FaMinus />,
    '*': <FaXmark />,
    '/': <FaDivide />,
    reset: <FaArrowRotateLeft />,
  }

  const handleBtn = () => {
    operations[operator](amount)
  }

  return <button onClick={handleBtn}>{operatorIcon[operator]}</button>
}

export default Button
