import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AddPage = () => {

    const [sum, setSum] = useState('0')
    const [showSum, setShowSum] = useState(sum)
    const [activeTransaction, setActiveTransaction] = useState(1)
    const [category, setCategory] = useState(false)

    const addNumber = (number) => {
        let res = sum.split('.')
        if (res.length === 2 && res[1].length >= 2) {
            return '';
        }

        if (sum.length >= 9) {
            return '';
        }

        let current_number = sum === '0.'
            ? sum.toString() + number.toString()
            : parseFloat(sum) === 0
                ? number.toString()
                : sum.toString() + number.toString()

        setSum(current_number)

        if (sum.length >= 3)
            setShowSum(current_number.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 '))
        else
            setShowSum(current_number)
    }

    const removeNumber = () => {
        if (parseFloat(sum) < 10 || sum === '') {
            setSum('0')
            setShowSum('0')
            return;
        }

        let current_number = sum.substring(0, sum.length - 1)

        setSum(current_number)
        setShowSum(current_number.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 '))
    }

    const addSimvol = () => {
        if (sum.length >= 9) {
            return '';
        }

        if (sum.indexOf('.') === -1) {
            setSum(sum + '.')
            setShowSum(showSum + '.')
        }
    }

    let templateTransaction
    switch (activeTransaction) {
        case 1:
            templateTransaction = <button className="px-4 py-1 text-sm shadow-xl rounded-full">Kaspi</button>
            break;
        case 2:
            templateTransaction = <div className="flex justify-center">
                <div className="w-2/5 text-right">
                    <button className="px-4 py-1 text-sm shadow-xl rounded-full">Зарплата</button>
                </div>
                <div className="w-1/5">
                    <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                </div>
                <div className="w-2/5 text-left">
                    <button className="px-4 py-1 text-sm shadow-xl rounded-full">Наличние</button>
                </div>
            </div>
            break;
        case 3:
            templateTransaction = <div className="flex w-full justify-center">
                <div className="w-2/5 text-right">
                    <button className="px-4 py-1 text-sm shadow-xl rounded-full">Kaspi</button>
                </div>
                <div className="w-1/5">
                    <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                </div>
                <div className="w-2/5 text-left">
                    <button className="px-4 py-1 text-sm shadow-xl rounded-full">Наличние</button>
                </div>
            </div>
            break;
    }

    let categoryModal
    if (category)
        categoryModal = <div className="">
            <div className="fixed inset-0 z-30 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center">
                <div className="w-full px-6 h-5/6 py-4 overflow-hidden bg-white rounded-t-lg sm:rounded-lg sm:m-4 sm:max-w-xl" role="dialog" id="modal">
                    <header className="flex justify-between">
                        <div></div>
                        <p className="mb-2 text-sm text-center font-medium text-gray-700 ">
                            Выберите
                        </p>
                        <button onClick={() => setCategory(false)} className="inline-flex items-center justify-center w-6 h-6 text-gray-400 transition-colors duration-150 rounded hover:text-gray-700" aria-label="close">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" role="img" aria-hidden="true">
                                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
                            </svg>
                        </button>
                    </header>
                    <div className="mt-4 mb-6">
                        <div className="grid grid-cols-5 gap-4">
                            <button onClick={() => addNumber(1)}>
                                <div className="mx-auto w-10 h-10 bg-blue-200 text-blue-500 text-lg rounded-full flex items-center justify-center active:bg-gray-100">
                                    <FontAwesomeIcon icon="fa-solid fa-burger" />
                                </div>
                                <div className="text-sm text-gray-800">
                                    Еда
                                </div>
                            </button>
                            <button onClick={() => addNumber(1)} className="hover:text-blue-500 duration-150">
                                <div className="mx-auto w-10 h-10 bg-blue-200 text-blue-500 text-lg rounded-full flex items-center justify-center">
                                    <FontAwesomeIcon icon="fa-solid fa-burger" />
                                </div>
                                <div className="text-sm text-gray-800">
                                    Еда
                                </div>
                            </button>
                            <button onClick={() => addNumber(1)} className="hover:text-blue-500 duration-150">
                                <div className="mx-auto w-10 h-10 bg-blue-200 text-blue-500 text-lg rounded-full flex items-center justify-center">
                                    <FontAwesomeIcon icon="fa-solid fa-burger" />
                                </div>
                                <div className="text-sm text-gray-800">
                                    Еда
                                </div>
                            </button>
                            <button onClick={() => addNumber(1)} className="hover:text-blue-500 duration-150">
                                <div className="mx-auto w-10 h-10 bg-blue-200 text-blue-500 text-lg rounded-full flex items-center justify-center">
                                    <FontAwesomeIcon icon="fa-solid fa-burger" />
                                </div>
                                <div className="text-sm text-gray-800">
                                    Еда
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    return (
        <div className="h-screen">
            {categoryModal}
            <div className="h-2/5">
                <div className="h-1/3 flex justify-center items-end">
                    <div className="bg-gray-200 p-1 text-sm rounded-lg">
                        <button onClick={() => setActiveTransaction(1)} className={activeTransaction == 1 ? 'bg-white py-1 px-2 tracking-wider rounded-lg text-gray-700 font-medium' : 'py-1 px-2 tracking-wider rounded-lg text-gray-700 font-medium'}>
                            Расход
                        </button>
                        <button onClick={() => setActiveTransaction(2)} className={activeTransaction == 2 ? 'bg-white py-1 px-2 tracking-wider rounded-lg text-gray-700 font-medium' : 'py-1 px-2 tracking-wider rounded-lg text-gray-700 font-medium'}>
                            Доход
                        </button>
                        <button onClick={() => setActiveTransaction(3)} className={activeTransaction == 3 ? 'bg-white py-1 px-2 tracking-wider rounded-lg text-gray-700 font-medium' : 'py-1 px-2 tracking-wider rounded-lg text-gray-700 font-medium'}>
                            Перевод
                        </button>
                    </div>
                </div>
                <div className="h-2/3 text-center font-normal">
                    <div className="py-4 whitespace-nowrap text-6xl text-gray-500">
                        {showSum}
                    </div>
                    <div>
                        {templateTransaction}
                    </div>
                </div>
            </div>
            <div className="h-3/5">
                <div className="h-1/6 flex text-2xl text-gray-700 items-center text-center">
                    <div className="w-1/3 h-full">
                        <button onClick={() => addNumber(1)} className="hover:text-blue-500 duration-150 h-full w-full">
                            1
                        </button>
                    </div>
                    <div className="w-1/3 h-full">
                        <button onClick={() => addNumber(2)} className="hover:text-blue-500 duration-150 h-full w-full">
                            2
                        </button>
                    </div>
                    <div className="w-1/3 h-full">
                        <button onClick={() => addNumber(3)} className="hover:text-blue-500 duration-150 h-full w-full">
                            3
                        </button>
                    </div>
                </div>
                <div className="h-1/6 flex text-2xl text-gray-700 items-center text-center">
                    <div className="w-1/3 h-full">
                        <button onClick={() => addNumber(4)} className="hover:text-blue-500 duration-150 h-full w-full">
                            4
                        </button>
                    </div>
                    <div className="w-1/3 h-full">
                        <button onClick={() => addNumber(5)} className="hover:text-blue-500 duration-150 h-full w-full">
                            5
                        </button>
                    </div>
                    <div className="w-1/3 h-full">
                        <button onClick={() => addNumber(6)} className="hover:text-blue-500 duration-150 h-full w-full">
                            6
                        </button>
                    </div>
                </div>
                <div className="h-1/6 flex text-2xl text-gray-700 items-center text-center">
                    <div className="w-1/3 h-full">
                        <button onClick={() => addNumber(7)} className="hover:text-blue-500 duration-150 h-full w-full">
                            7
                        </button>
                    </div>
                    <div className="w-1/3 h-full">
                        <button onClick={() => addNumber(8)} className="hover:text-blue-500 duration-150 h-full w-full">
                            8
                        </button>
                    </div>
                    <div className="w-1/3 h-full">
                        <button onClick={() => addNumber(9)} className="hover:text-blue-500 duration-150 h-full w-full">
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
                        <button onClick={() => addNumber(0)} className="hover:text-blue-500 duration-150 h-full w-full">
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
                        <button onClick={() => setCategory(sum != '0' ? true : false)} className={sum != '0' ? 'text-blue-500 duration-150 h-full w-full' : 'text-gray-200 duration-150 h-full w-full'}>
                            <FontAwesomeIcon icon="fa-regular fa-circle-check" />
                        </button>
                    </div>
                    <div className="w-1/3 h-full">
                        <button onClick={() => removeNumber()} className="hover:text-blue-500 duration-150 h-full w-full">
                            <FontAwesomeIcon icon="fa-solid fa-delete-left" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPage