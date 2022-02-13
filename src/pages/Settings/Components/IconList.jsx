import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconList = ({ setSaveForm, saveForm }) => {
    const icons = [
        <FontAwesomeIcon icon="fa-solid fa-cookie" />,
        <FontAwesomeIcon icon="fa-solid fa-ice-cream" />,
        <FontAwesomeIcon icon="fa-solid fa-beer-mug-empty" />,
        <FontAwesomeIcon icon="fa-solid fa-utensils" />,
        <FontAwesomeIcon icon="fa-solid fa-burger" />,
        <FontAwesomeIcon icon="fa-solid fa-shirt" />,
        <FontAwesomeIcon icon="fa-solid fa-socks" />,
        <FontAwesomeIcon icon="fa-solid fa-money-bill-wave" />,
        <FontAwesomeIcon icon="fa-solid fa-coins" />,
        <FontAwesomeIcon icon="fa-brands fa-bitcoin" />,
        <FontAwesomeIcon icon="fa-solid fa-circle-dollar-to-slot" />,
    ]

    const iconTemplate = (icon, key) => {
        if (icon.props.icon === saveForm.icon)
            return <button key={key} onClick={() => setSaveForm({ ...saveForm, icon: icon.props.icon })}>
                <div className={`bg-gray-50 text-gray-600 mx-auto w-12 h-12 text-lg rounded-full flex items-center justify-center active:gray-100`}>
                    {icon}
                </div>
            </button>
        else
            return <button key={key} onClick={() => setSaveForm({ ...saveForm, icon: icon.props.icon })}>
                <div className={`${saveForm.color} mx-auto w-12 h-12 text-lg rounded-full flex items-center justify-center active:bg-gray-100`}>
                    {icon}
                </div>
            </button>
    }

    return (
        <div className="grid sm:grid-cols-9 grid-cols-6 sm:gap-4 gap-1">
            {icons.map((icon, key) => iconTemplate(icon, key))}
        </div>
    )
}

export default IconList