import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import API from '../../api'
import IconList from "./Components/IconList"
import ColorList from "./Components/ColorList"
import { NavLink } from "react-router-dom"

const CreateExpenseCategory = () => {

    const [saveForm, setSaveForm] = useState({
        name: '',
        icon: '',
        color: {
            bg: 'blue-300',
            text: 'blue-600',
        }
    })

    const store = () => {
        console.log(saveForm)
        API.post(`api/category/expense`, saveForm)
            .then(resp => {
                console.log(resp.data)
            })
    }

    return (
        <div className="p-2">
            <header className="flex justify-between">
                <NavLink to={'/settings/expense/category'} className="w-4">
                    <FontAwesomeIcon icon="fa-solid fa-angle-left" />
                </NavLink>
                <p className="mb-2 text-sm text-center font-medium text-gray-700 ">
                    Добавить новую категорию
                </p>
                <div className="w-4">

                </div>
            </header>
            <div className="mt-4 mb-6">
                <div className="mt-4 mb-6">
                    <label>
                        <p className="text-xs mb-1">Название категории</p>
                        <input
                            onChange={(event) => setSaveForm({ ...saveForm, name: event.target.value })}
                            value={saveForm.name}
                            type="text"
                            className="border outline-none p-2 w-full" />
                    </label>
                    <div className="">

                        <p className="text-xs mb-1">Цвет для икона</p>
                        <ColorList setSaveForm={setSaveForm} saveForm={saveForm} />

                        <p className="text-xs mb-1">Выберете икон</p>
                        <IconList setSaveForm={setSaveForm} saveForm={saveForm} />

                    </div>
                    <button onClick={() => store()} className="w-full bg-green-200 p-3 z-10 fixed inset-x-0 bottom-0">
                        Сохранить
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CreateExpenseCategory