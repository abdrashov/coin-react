import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import API from '../../api'
import IconList from './Components/IconList'
import ColorList from './Components/ColorList'
import { NavLink } from 'react-router-dom'

const ExpenseCategory = () => {

    const [appState, setAppState] = useState([]);


    useEffect(() => {
        API.get(`api/category/expense`)
            .then(resp => {
                setAppState(resp.data.expenses)
            })
    }, [setAppState])


    return (
        <div className="p-2">
            <header className="flex justify-center">
                <p className="mb-2 text-sm text-center font-medium text-gray-700 ">
                    Категория расходов
                </p>
            </header>
            <div className="mt-4 mb-6">
                <NavLink
                    className="flex items-center w-full mb-2 border p-2"
                    to={'/settings/expense/category/create'}>
                    <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                    <div className="pl-2">Добавить новую категорию</div>
                </NavLink>

                <div className="text-sm text-gray-500 mt-3 mb-1">
                    Мои категории расходов
                </div>
                {appState.map((state) =>
                    <div key={state.id} className="flex items-center mb-2 border p-2">
                        <div className={`w-8 h-8 bg-${state.color.bg} text-${state.color.bg} rounded-full`}>
                            <FontAwesomeIcon icon={state.icon} />
                        </div>
                        <div className="pl-2">{state.name}</div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ExpenseCategory