import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import API from '../../api'
import IconList from "./Components/IconList"
import ColorList from "./Components/ColorList"
import { NavLink } from "react-router-dom"

const AccountCategory = () => {
    const [categories, setCategories] = useState([]);
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
        API.get(`api/category/account`)
            .then(resp => {
                setCategories(resp.data.accounts)
            })
    }, [setCategories])

    return (
        <div>
            <div className="flex bg-white justify-between items-center p-2 ">
                <NavLink
                    to={'/settings'}
                    className="block w-7 h-7 flex justify-center items-center bg-gray-100 rounded-md text-gray-500 duration-200 md:hover:bg-gray-200 active:bg-gray-200">
                    <FontAwesomeIcon icon="fa-solid fa-angle-left" />
                </NavLink>
                <p className="text-base text-center font-medium text-gray-700 ">
                    Категория счетов
                </p>
                <div className="w-7 h-7">
                </div>
            </div>

            <div className={(isNameModal.status ? '' : 'hidden') + ' fixed inset-0 z-30 flex bg-black bg-opacity-50 items-center justify-center'}>
                <div className="fixed top-3 right-3">
                    <button onClick={() => setIsNameModal({ ...isNameModal, status: false })} className="w-7 h-7 shadow-lg text-tiny shadow-black rounded-full opacity-50">
                        <div className="text-black border-black border-2 rounded-full md:hover:border-white md:hover:text-white active:border-white active:text-white shadow-lg shadow-inner shadow-black w-full h-full flex items-center justify-center duration-200">
                            <FontAwesomeIcon icon="fa-solid fa-xmark" />
                        </div>
                    </button>
                </div>
                <div className="md:w-2/3 w-full p-2">
                    <div className={(isNameModal.active == 1 ? '' : 'hidden') + ''}>
                        <div className="relative w-full">
                            <input onChange={(e) => setForm({ ...form, name: e.target.value.trim() })} value={form.name} autoComplete="off" type="text" id="name" className="w-full bg-white peer text-gray-900 left-0 top-0 text-lg rounded-md px-4 py-2 outline-none shadow-white" placeholder=" " />
                            <label htmlFor="name" className="bg-gradient-to-r from-indigo-500 via-purple-400 to-red-300 text-xs text-gray-50 rounded-md py-px px-2 absolute font-medium top-1/2 -translate-y-8 left-2 peer-focus:-translate-y-8 peer-placeholder-shown:-translate-y-1/2 duration-200">
                                Название категории
                            </label>
                        </div>
                        <div className="w-full mt-2 flex justify-between">
                            <button onClick={() => setIsNameModal({ ...isNameModal, status: false })} className="w-1/2 h-7 mr-1 border-2 border-gray-50 text-gray-50 text-tiny rounded-md flex items-center justify-center">
                                <FontAwesomeIcon icon="fa-solid fa-xmark" />
                            </button>
                            <button onClick={() => setIsNameModal({ ...isNameModal, active: (form.name != '' ? isNameModal.active + 1 : isNameModal.active) })} className={(form.name != '' ? 'border-gray-50 text-gray-50' : 'border-gray-400 text-gray-400') + ' duration-200 w-1/2 ml-1 h-7 border-2 text-tiny rounded-md flex items-center justify-center'}>
                                <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                            </button>
                        </div>
                    </div>
                    <div className={(isNameModal.active == 2 ? '' : 'hidden') + ''}>
                        <div className="relative w-full">
                            <p className="text-sm mb-1 text-gray-50 font-medium rounded-md py-px px-2 bg-gradient-to-r from-indigo-500 via-purple-400 to-red-300">
                                Выберите цвет для икона
                            </p>
                            <ColorList setSaveForm={setForm} saveForm={form} />
                        </div>
                        <div className="w-full mt-2 flex justify-between">
                            <button onClick={() => setIsNameModal({ ...isNameModal, active: isNameModal.active - 1 })} className="w-1/2 h-7 mr-1 border-2 border-gray-50 text-gray-50 text-tiny rounded-md flex items-center justify-center">
                                <FontAwesomeIcon icon="fa-solid fa-angle-left" />
                            </button>
                            <button onClick={() => setIsNameModal({ ...isNameModal, active: (form.color != '' ? isNameModal.active + 1 : isNameModal.active) })} className={(form.color != '' ? 'border-gray-50 text-gray-50' : 'border-gray-400 text-gray-400') + ' duration-200 w-1/2 ml-1 h-7 border-2 text-tiny rounded-md flex items-center justify-center'}>
                                <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                            </button>
                        </div>
                    </div>
                    <div className={(isNameModal.active == 3 ? '' : 'hidden') + ''}>
                        <div className="relative w-full">
                            <p className="text-sm mb-1 text-gray-50 font-medium rounded-md py-px px-2 bg-gradient-to-r from-indigo-500 via-purple-400 to-red-300">
                                Выберете икон
                            </p>
                            <IconList setSaveForm={setForm} saveForm={form} />
                        </div>
                        <div className="w-full mt-2 flex justify-between">
                            <button onClick={() => setIsNameModal({ ...isNameModal, active: isNameModal.active - 1 })} className="w-1/2 h-7 mr-1 border-2 border-gray-50 text-gray-50 text-tiny rounded-md flex items-center justify-center">
                                <FontAwesomeIcon icon="fa-solid fa-angle-left" />
                            </button>
                            <button onClick={() => (form.icon != '' ? store() : '')} className={(form.icon != '' ? 'border-gray-50 text-gray-50' : 'border-gray-400 text-gray-400') + ' duration-200 w-1/2 ml-1 h-7 border-2 text-tiny rounded-md flex items-center justify-center'}>
                                <FontAwesomeIcon icon="fa-solid fa-plus" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <button
                onClick={() => setIsNameModal({ ...isNameModal, status: true })}
                className="mt-3 mb-5 flex items-center justify-between w-full p-2 md:hover:bg-red-100 active:bg-red-100 duration-200">
                <div className="flex items-center">
                    <div className="w-7 h-7 bg-red-500 text-gray-50 text-tiny rounded-md flex items-center justify-center">
                        <FontAwesomeIcon icon="fa-solid fa-plus" />
                    </div>
                    <div className="pl-2">Добавить новую категорию</div>
                </div>
                <div className="text-sm text-gray-700">
                    <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
                </div>
            </button>

            <div className="text-xs mb-1 mx-2 text-gray-500 uppercase font-medium">
                Мои категории доходов
            </div>

            {categories.map((state) =>
                <div key={state.id} className="flex items-center justify-between p-2 md:hover:bg-teal-100 active:bg-teal-100 duration-200">
                    <div className="flex items-center">
                        <div className={`${state.color} w-7 h-7 bg-teal-500 text-gray-50 text-tiny rounded-md flex items-center justify-center`}>
                            <FontAwesomeIcon icon={state.icon} />
                        </div>
                        <div className="pl-2">{state.name}</div>
                    </div>
                    <div className="text-sm text-gray-700">
                        <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
                    </div>
                </div>
            )}
        </div>
    )
}

export default AccountCategory