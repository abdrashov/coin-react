import React, { useState } from "react"
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Settings = () => {

    return (
        <div>
            <div className="flex bg-white justify-center">
                <p className="py-2 text-base text-center font-medium text-gray-700 ">
                    Настройки
                </p>
            </div>

            <div className="mt-3 mb-5 flex items-center w-full mb-2 p-2">
                <div className="text-blue-500 text-3xl rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon="fa-brands fa-fort-awesome-alt" />
                </div>
                <div className="pl-2 text-lg text-gray-900">abdrashoff@gmail.com</div>
            </div>

            <div className="text-xs mb-1 mx-2 text-gray-500 uppercase font-medium">
                Настройки приложения
            </div>
            <div className="bg-white">
                <NavLink
                    className="flex items-center justify-between p-2 md:hover:bg-teal-100 active:bg-teal-100 duration-200"
                    to={'/settings/expense/category'}>
                    <div className="flex items-center">
                        <div className="w-7 h-7 bg-teal-500 text-gray-50 text-tiny rounded-md flex items-center justify-center">
                            <FontAwesomeIcon icon="fa-solid fa-file-invoice-dollar" />
                        </div>
                        <div className="pl-2">Категория расходов</div>
                    </div>
                    <div className="text-sm text-gray-700">
                        <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
                    </div>
                </NavLink>

                <NavLink
                    className="flex items-center justify-between p-2 md:hover:bg-yellow-100 active:bg-yellow-100 duration-200"
                    to={'/settings/income/category'}>
                    <div className="flex items-center">
                        <div className="w-7 h-7 bg-yellow-400 text-tiny text-gray-50 rounded-md flex items-center justify-center">
                            <FontAwesomeIcon icon="fa-solid fa-coins" />
                        </div>
                        <div className="pl-2">Категория доходов</div>
                    </div>
                    <div className="text-sm text-gray-700">
                        <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
                    </div>
                </NavLink>

                <NavLink
                    className="flex items-center justify-between p-2 md:hover:bg-red-100 active:bg-red-100 duration-200"
                    to={'/settings/account/category'}>
                    <div className="flex items-center">
                        <div className="w-7 h-7 bg-red-500 text-tiny text-gray-50 rounded-md flex items-center justify-center">
                            <FontAwesomeIcon icon="fa-solid fa-vault" />
                        </div>
                        <div className="pl-2">Категория счетов</div>
                    </div>
                    <div className="text-sm text-gray-700">
                        <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
                    </div>
                </NavLink>

                <div
                    className="flex items-center justify-between p-2">
                    <div className="flex items-center">
                        <div className="w-7 h-7 bg-gray-400 text-tiny text-gray-50 rounded-md flex items-center justify-center">
                            <FontAwesomeIcon icon="fa-solid fa-shekel-sign" />
                        </div>
                        <div className="pl-2">Валюта</div>
                    </div>
                    <div className="text-sm text-gray-700">
                    </div>
                </div>

                <div
                    className="flex items-center justify-between p-2">
                    <div className="flex items-center">
                        <div className="w-7 h-7 bg-gray-400 text-tiny text-gray-50 rounded-md flex items-center justify-center">
                            <FontAwesomeIcon icon="fa-solid fa-language" />
                        </div>
                        <div className="pl-2">Язык</div>
                    </div>
                    <div className="text-sm text-gray-700">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings