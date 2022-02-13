import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Keyboards = ({ money, setMoney, children }) => {

    const addNumber = (number) => {
        if (money.indexOf('.') !== -1 && money.split('.')[1].length >= 2) {
            return '';
        }

        if (money.length >= 6 && money.indexOf('.') === -1) {
            return '';
        } else {
            if (money == '0') {
                setMoney(number)
            } else {
                setMoney(money + number)
            }
        }
    }

    const removeNumber = () => {
        if (money.length == 1) {
            setMoney('0')
        } else {
            setMoney(money.substring(0, money.length - 1))
        }
        // .replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')
    }

    const addSimvol = () => {
        if (money.indexOf('.') === -1) {
            setMoney(money + '.')
        }
    }

    return (
        <div className="h-3/5">
            <div className="h-1/6 flex text-2xl text-gray-700 items-center text-center">
                <div className="w-1/3 h-full">
                    <button onClick={() => addNumber('1')} className="hover:text-blue-500 duration-150 h-full w-full">
                        1
                    </button>
                </div>
                <div className="w-1/3 h-full">
                    <button onClick={() => addNumber('2')} className="hover:text-blue-500 duration-150 h-full w-full">
                        2
                    </button>
                </div>
                <div className="w-1/3 h-full">
                    <button onClick={() => addNumber('3')} className="hover:text-blue-500 duration-150 h-full w-full">
                        3
                    </button>
                </div>
            </div>
            <div className="h-1/6 flex text-2xl text-gray-700 items-center text-center">
                <div className="w-1/3 h-full">
                    <button onClick={() => addNumber('4')} className="hover:text-blue-500 duration-150 h-full w-full">
                        4
                    </button>
                </div>
                <div className="w-1/3 h-full">
                    <button onClick={() => addNumber('5')} className="hover:text-blue-500 duration-150 h-full w-full">
                        5
                    </button>
                </div>
                <div className="w-1/3 h-full">
                    <button onClick={() => addNumber('6')} className="hover:text-blue-500 duration-150 h-full w-full">
                        6
                    </button>
                </div>
            </div>
            <div className="h-1/6 flex text-2xl text-gray-700 items-center text-center">
                <div className="w-1/3 h-full">
                    <button onClick={() => addNumber('7')} className="hover:text-blue-500 duration-150 h-full w-full">
                        7
                    </button>
                </div>
                <div className="w-1/3 h-full">
                    <button onClick={() => addNumber('8')} className="hover:text-blue-500 duration-150 h-full w-full">
                        8
                    </button>
                </div>
                <div className="w-1/3 h-full">
                    <button onClick={() => addNumber('9')} className="hover:text-blue-500 duration-150 h-full w-full">
                        9
                    </button>
                </div>
            </div>
            <div className="h-1/6 flex text-2xl text-gray-700 items-center text-center">
                <div className="w-1/3 h-full">
                    <button onClick={() => addSimvol('.')} className="hover:text-blue-500 duration-150 h-full w-full">
                        .
                    </button>
                </div>
                <div className="w-1/3 h-full">
                    <button onClick={() => addNumber('0')} className="hover:text-blue-500 duration-150 h-full w-full">
                        0
                    </button>
                </div>
                <div className="w-1/3 h-full">
                </div>
            </div>
            <div className="h-1/6 flex text-5xl text-gray-700 items-center text-center">
                <div className="w-1/3 h-full">
                </div>
                <div className="w-1/3 h-full">
                    {children}
                </div>
                <div className="w-1/3 h-full">
                    <button onClick={() => removeNumber()} className="hover:text-blue-500 duration-150 h-full w-full">
                        <FontAwesomeIcon icon="fa-solid fa-delete-left" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Keyboards