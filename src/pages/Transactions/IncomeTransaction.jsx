import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import api from "../../api"
import CheckExpenseModal from "./Components/CheckExpenseModal"
import CheckAccountModal from "./Components/CheckAccountModal"
import CheckIncomeModal from "./Components/CheckIncomeModal"
import Keyboards from "./Components/Keyboards"
import { NavLink } from "react-router-dom"

const IncomeTransaction = () => {

    const [money, setMoney] = useState('0')

    const [isCheckIncomeModal, setIsCheckIncomeModal] = useState(false)
    const [isCheckAccountModal, setIsCheckAccountModal] = useState(false)


    const storeIncome = async () => {
        await api.post(`api/transaction/income/${account.id}/${income.id}`, {
            cash: money,
        })
    }

    const [account, setAccount] = useState({
        id: '',
        name: '',
        icon: '',
        color: '',
    })

    const [income, setIncome] = useState({
        id: '',
        name: '',
        icon: '',
        color: '',
    })

    return (
        <div className="h-screen">

            <CheckIncomeModal isCheckModal={isCheckIncomeModal} setIsCheckModal={setIsCheckIncomeModal} income={income} setIncome={setIncome} />
            <CheckAccountModal isCheckModal={isCheckAccountModal} setIsCheckModal={setIsCheckAccountModal} account={account} setAccount={setAccount} />

            <div className="h-2/5">
                <div className="h-1/3 flex justify-center items-end">
                    <div className="bg-gray-200 p-1 text-sm rounded-lg">
                        <NavLink
                            to={'/transaction/expense'}
                            className="py-1 px-2 tracking-wider rounded-lg text-gray-700 font-medium">
                            Расход
                        </NavLink>
                        <button className="bg-white py-1 px-2 tracking-wider rounded-lg text-gray-700 font-medium">
                            Доход
                        </button>
                        <button className="py-1 px-2 tracking-wider rounded-lg text-gray-700 font-medium">
                            Перевод
                        </button>
                    </div>
                </div>
                <div className="h-2/3 text-center font-normal">
                    <div className="py-4 whitespace-nowrap text-6xl text-gray-500">
                        {money}
                    </div>
                    <div className="flex justify-between items-center bg-gray-200 p-1 mx-2 text-sm rounded-md">
                        <button className="bg-white rounded-md w-1/2 px-4 py-1 text-sm" onClick={() => setIsCheckIncomeModal(true)}>
                            {income.name}
                        </button>
                        <div className="px-1 text-gray-500">
                            <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                        </div>
                        <button className="bg-white rounded-md w-1/2 px-4 py-1 text-sm" onClick={() => setIsCheckAccountModal(true)}>
                            {account.name}
                        </button>
                    </div>
                </div>
            </div>

            <Keyboards money={money} setMoney={setMoney}>
                <button onClick={() => storeIncome()} className={money != '0' ? 'text-blue-500 duration-150 h-full w-full' : 'text-gray-200 duration-150 h-full w-full'}>
                    <FontAwesomeIcon icon="fa-regular fa-circle-check" />
                </button>
            </Keyboards>
        </div>
    )
}

export default IncomeTransaction