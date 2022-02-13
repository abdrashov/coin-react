import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import api from '../../../api';

const CheckExpenseModal = ({ checkExpense, isCheckExpenseModal, setIsCheckExpenseModal }) => {

    const [expenses, setExpenses] = useState([]);

    useEffect(async () => {
        await api.get(`api/category/expense`)
            .then(response => {
                setExpenses(response.data.expenses)
            })
    }, [setExpenses])

    return (
        <div onClick={() => setIsCheckExpenseModal(false)} className={isCheckExpenseModal ? '' : 'hidden'}>
            <div className="fixed inset-0 z-30 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center">
                <div onClick={(event) => event.stopPropagation()} className="w-full px-6 h-5/6 overflow-hidden bg-white rounded-t-lg sm:rounded-lg sm:m-4 sm:max-w-xl" role="dialog" id="modal">
                    <div className="py-2 flex justify-between items-center">
                        <div className="w-7">
                        </div>
                        <p className="text-sm text-center font-medium text-gray-700 ">
                            Выберите
                        </p>
                        <button onClick={() => setIsCheckExpenseModal(false)} className="block w-7 h-7 flex justify-center items-center bg-gray-100 rounded-md text-gray-500 duration-200 md:hover:bg-gray-200 active:bg-gray-200">
                            <FontAwesomeIcon icon="fa-solid fa-xmark" />
                        </button>
                    </div>
                    <div className="mt-4 mb-6">
                        <div className="grid grid-cols-5 gap-4">
                            {expenses.map(expense =>
                                <button key={expense.id} onClick={() => checkExpense(expense.id)}>
                                    <div className={`${expense.color} mx-auto w-9 h-9 text-xl rounded-md flex items-center justify-center`}>
                                        <FontAwesomeIcon icon={expense.icon} />
                                    </div>
                                    <div className="text-sm font-medium text-gray-800">
                                        {expense.name}
                                    </div>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckExpenseModal