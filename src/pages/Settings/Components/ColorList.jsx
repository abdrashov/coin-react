import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ColorList = ({ setSaveForm, saveForm }) => {

    const colors = [
        // [
        //     'bg-gray-100 text-gray-600', 'bg-gray-200 text-gray-600', 'bg-gray-300 text-gray-600', 'bg-gray-400 text-gray-50', 'bg-gray-500 text-gray-50', 'bg-gray-600 text-gray-50', 'bg-gray-700 text-gray-300', 'bg-gray-800 text-gray-300', 'bg-gray-900 text-gray-300',
        // ],
        [
            'bg-pink-100 text-pink-600', 'bg-pink-200 text-pink-600', 'bg-pink-300 text-pink-600', 'bg-pink-400 text-pink-50', 'bg-pink-500 text-pink-50', 'bg-pink-600 text-pink-50', 'bg-pink-700 text-pink-300', 'bg-pink-800 text-pink-300', 'bg-pink-900 text-pink-300',
        ],
        [
            'bg-purple-100 text-purple-600', 'bg-purple-200 text-purple-600', 'bg-purple-300 text-purple-600', 'bg-purple-400 text-purple-50', 'bg-purple-500 text-purple-50', 'bg-purple-600 text-purple-50', 'bg-purple-700 text-purple-300', 'bg-purple-800 text-purple-300', 'bg-purple-900 text-purple-300',
        ],
        [
            'bg-indigo-100 text-indigo-600', 'bg-indigo-200 text-indigo-600', 'bg-indigo-300 text-indigo-600', 'bg-indigo-400 text-indigo-50', 'bg-indigo-500 text-indigo-50', 'bg-indigo-600 text-indigo-50', 'bg-indigo-700 text-indigo-300', 'bg-indigo-800 text-indigo-300', 'bg-indigo-900 text-indigo-300',
        ],
        [
            'bg-blue-100 text-blue-600', 'bg-blue-200 text-blue-600', 'bg-blue-300 text-blue-600', 'bg-blue-400 text-blue-50', 'bg-blue-500 text-blue-50', 'bg-blue-600 text-blue-50', 'bg-blue-700 text-blue-300', 'bg-blue-800 text-blue-300', 'bg-blue-900 text-blue-300',
        ],
        [
            'bg-teal-100 text-teal-600', 'bg-teal-200 text-teal-600', 'bg-teal-300 text-teal-600', 'bg-teal-400 text-teal-50', 'bg-teal-500 text-teal-50', 'bg-teal-600 text-teal-50', 'bg-teal-700 text-teal-300', 'bg-teal-800 text-teal-300', 'bg-teal-900 text-teal-300',
        ],
        [
            'bg-green-100 text-green-600', 'bg-green-200 text-green-600', 'bg-green-300 text-green-600', 'bg-green-400 text-green-50', 'bg-green-500 text-green-50', 'bg-green-600 text-green-50', 'bg-green-700 text-green-300', 'bg-green-800 text-green-300', 'bg-green-900 text-green-300',
        ],
        [
            'bg-yellow-100 text-yellow-600', 'bg-yellow-200 text-yellow-600', 'bg-yellow-300 text-yellow-600', 'bg-yellow-400 text-yellow-50', 'bg-yellow-500 text-yellow-50', 'bg-yellow-600 text-yellow-50', 'bg-yellow-700 text-yellow-300', 'bg-yellow-800 text-yellow-300', 'bg-yellow-900 text-yellow-300',
        ],
        [
            'bg-orange-100 text-orange-600', 'bg-orange-200 text-orange-600', 'bg-orange-300 text-orange-600', 'bg-orange-400 text-orange-50', 'bg-orange-500 text-orange-50', 'bg-orange-600 text-orange-50', 'bg-orange-700 text-orange-300', 'bg-orange-800 text-orange-300', 'bg-orange-900 text-orange-300',
        ],
        [
            'bg-red-100 text-red-600', 'bg-red-200 text-red-600', 'bg-red-300 text-red-600', 'bg-red-400 text-red-50', 'bg-red-500 text-red-50', 'bg-red-600 text-red-50', 'bg-red-700 text-red-300', 'bg-red-800 text-red-300', 'bg-red-900 text-red-300',
        ],
    ]

    const colorTemplate = (color, key) => {
        if (color === saveForm.color)
            return <button key={key}>
                <div className={`${color} bg-opacity-25 text-tiny h-10 p-0.5 flex items-center justify-center active:gray-100`}>
                    <span className={`${color} w-full h-full flex items-center justify-center`}>
                        <FontAwesomeIcon icon="fa-solid fa-bookmark" />
                    </span>
                </div>
            </button>
        else
            return <button onClick={() => setSaveForm({ ...saveForm, color: color })} key={key} >
                <div className={`${color} h-10 text-sm flex items-center justify-center active:gray-100`}>
                    <FontAwesomeIcon icon="fa-regular fa-bookmark" />
                </div>
            </button >
    }

    return (
        <div>
            <div className="grid grid-cols-9 rounded-md overflow-hidden">
                {colors.map((colors_array, index_array) =>
                    colors_array.map((color, index) =>
                        colorTemplate(color, `${index_array}_${index}`)
                    )
                )}
            </div>
        </div>
    )
}

export default ColorList