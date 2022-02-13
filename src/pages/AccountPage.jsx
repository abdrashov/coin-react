import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import API from "../api";

const AccountPage = () => {
    const [accounts, setAccounts] = useState([]);
    const [cash, setСash] = useState(0);
    const [isNameModal, setIsNameModal] = useState({
        status: false,
        active: 1,
    });

    const [form, setForm] = useState({
        name: '',
        icon: '',
        color: ''
    })

    const store = async () => {
        await API
            .post(`/api/category/account`, form)
            .then(resp => console.log(resp.data))
            .catch(error => {
                const text = JSON.parse(error.request.response)
            })
            .finally(() => {
                setIsNameModal({
                    status: false,
                    active: 1,
                })
                setForm({
                    name: '',
                    icon: '',
                    color: ''
                })
            })
    }

    useEffect(() => {
        API.get(`api/account`)
            .then(resp => {
                setСash(resp.data.cash)
                setAccounts(resp.data.accounts)
            })
    }, [setAccounts])

    return (
        <div>
            <div className="flex bg-white justify-center">
                <p className="py-2 text-base text-center font-medium text-gray-700 ">
                    Счета
                </p>
            </div>
            <div className="text-xs mb-1 mx-2 text-gray-500 uppercase font-medium">
                Общий баланс
            </div>
            <div className="font-semibold text-5xl mx-2 rounded-md bg-blue-100 text-blue-800 leading-10 px-2 py-3 flex items-center justify-center">
                <div className="relative inline-block">
                    {cash}
                    {/* <small className="absolute -top-2 -right-9">
                        <small>55</small>
                    </small> */}
                </div>
            </div>
            <div className="text-xs mt-5 mb-1 mx-2 text-gray-500 uppercase font-medium">
                Категория счетов
            </div>
            {accounts.map(account =>
                <div key={account.id} className="flex items-center justify-between p-2">
                    <div className="flex items-center">
                        <div className={`${account.color} w-7 h-7 bg-red-500 text-tiny text-gray-50 rounded-md flex items-center justify-center`}>
                            <FontAwesomeIcon icon={account.icon} />
                        </div>
                        <div className="pl-2">{account.name}</div>
                    </div>
                    <div className="text-sm text-gray-700">
                        {account.cash}
                    </div>
                </div>
            )}
        </div>
    )
}

export default AccountPage