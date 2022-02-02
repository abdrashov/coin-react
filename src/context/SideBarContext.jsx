import React from "react"
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../media/navigation.css'

const SideBarContext = () => {
    return (
        <div className="fixed inset-x-0 bottom-0">
            <div className="navigation relative w-100 rounded-t-md z-10 bg-white">
                <div className="navigation-ul flex justify-evenly items-center">
                    <NavLink
                        className="relative flex justify-center text-center items-center flex-col"
                        to={'/add'}>
                        <div className="show"></div>
                        <span className="icon text-gray-400">
                            <FontAwesomeIcon icon="fa-solid fa-circle-plus" />
                        </span>
                        <div className="text">
                            Добавить
                        </div>
                    </NavLink>
                    <NavLink
                        className="relative flex justify-center text-center items-center flex-col"
                        to={'/expense'}>
                        <div className="show"></div>
                        <span className="icon text-gray-400">
                            <FontAwesomeIcon icon="fa-solid fa-wallet" />
                        </span>
                        <div className="text">
                            Счёта
                        </div>
                    </NavLink>
                    <NavLink
                        className="relative flex justify-center text-center items-center flex-col"
                        to={'/analytics'}>
                        <div className="show"></div>
                        <span className="icon text-gray-400">
                            <FontAwesomeIcon icon="fa-solid fa-chart-line" />
                        </span>
                        <div className="text">
                            Аналитика
                        </div>
                    </NavLink>
                    <NavLink
                        className="relative flex justify-center text-center items-center flex-col"
                        to={'/settings'}>
                        <div className="show"></div>
                        <span className="icon text-gray-400">
                            <FontAwesomeIcon icon="fa-solid fa-gear" />
                        </span>
                        <div className="text">
                            Настройка
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default SideBarContext