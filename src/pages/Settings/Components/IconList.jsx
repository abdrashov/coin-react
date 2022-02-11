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
        <FontAwesomeIcon icon="fa-solid fa-socks" />
    ]

    return (
        <div className="grid grid-cols-7 gap-4">
            {icons.map((icon, key) =>
                <button key={key} onClick={() => setSaveForm({ ...saveForm, icon: icon.props.icon })}>
                    <div className={`mx-auto w-10 h-10 bg-${saveForm.color.bg} text-${saveForm.color.text} text-lg rounded-full flex items-center justify-center active:bg-gray-100`}>
                        {icon}
                    </div>
                </button>
            )}
        </div>
    )
}

export default IconList