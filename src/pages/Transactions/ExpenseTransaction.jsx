import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import api from "../../api"
import CheckExpenseModal from "./Components/CheckExpenseModal"
import CheckAccountModal from "./Components/CheckAccountModal"
import { NavLink } from "react-router-dom"
import Keyboards from "./Components/Keyboards"

const ExpenseTransaction = () => {

    const [money, setMoney] = useState('0')

    const [isCheckExpenseModal, setIsCheckExpenseModal] = useState(false)
    const [isCheckAccountModal, setIsCheckAccountModal] = useState(false)

    const [account, setAccount] = useState({
        id: '',
        name: '',
        icon: '',
        color: '',
    })

    const checkExpense = async (expense_id) => {
        await api.post(`api/transaction/expense/${account.id}/${expense_id}`, {
            cash: money,
        })
        setIsCheckExpenseModal(false)
    }

    return (
        <div className="h-screen">
            <CheckAccountModal isCheckModal={isCheckAccountModal} setIsCheckModal={setIsCheckAccountModal} account={account} setAccount={setAccount} />
            <CheckExpenseModal checkExpense={checkExpense} isCheckExpenseModal={isCheckExpenseModal} setIsCheckExpenseModal={setIsCheckExpenseModal} />
            <div className="h-2/5">
                <div className="h-1/3 flex justify-center items-end">
                    <div className="bg-gray-200 p-1 text-sm rounded-lg">
                        <button className={'bg-white py-1 px-2 tracking-wider rounded-lg text-gray-700 font-medium'}>
                            Расход
                        </button>
                        <NavLink
                            to={'/transaction/income'}
                            className="py-1 px-2 tracking-wider rounded-lg text-gray-700 font-medium">
                            Доход
                        </NavLink>
                        <button className={'py-1 px-2 tracking-wider rounded-lg text-gray-700 font-medium'}>
                            Перевод
                        </button>
                    </div>
                </div>
                <div className="h-2/3 text-center font-normal">
                    <div className="py-4 whitespace-nowrap text-6xl text-gray-500">
                        {money}
                    </div>
                    <div className="flex justify-between items-center bg-gray-200 p-1 mx-2 text-sm rounded-md">
                        <button className="bg-white rounded-md w-full px-4 py-1 text-sm" onClick={() => setIsCheckAccountModal(true)}>
                            {account.name}
                        </button>
                    </div>
                </div>
            </div>
            <Keyboards money={money} setMoney={setMoney}>
                <button onClick={() => setIsCheckExpenseModal(money != '0' ? true : false)} className={money != '0' ? 'text-blue-500 duration-150 h-full w-full' : 'text-gray-200 duration-150 h-full w-full'}>
                    <FontAwesomeIcon icon="fa-regular fa-circle-check" />
                </button>
            </Keyboards>
        </div>
    )
}

export default ExpenseTransaction