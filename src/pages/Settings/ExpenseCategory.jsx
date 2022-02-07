import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ExpenseCategory = () => {
    const [category, setCategory] = useState(false)
    let categoryModal

    if (category)
        categoryModal = <div className="">
            <div className="fixed inset-0 z-30 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center pt-10">
                <div className="w-full p-6 h-full overflow-hidden bg-white rounded-t-lg sm:rounded-lg sm:m-4 sm:max-w-xl" role="dialog" id="modal">
                    <header className="flex justify-between">
                        <div></div>
                        <p className="mb-2 text-sm text-center font-medium text-gray-700 ">
                            Добавить новую категорию
                        </p>
                        <button onClick={() => setCategory(false)} className="inline-flex items-center justify-center w-6 h-6 text-gray-400 transition-colors duration-150 rounded hover:text-gray-700" aria-label="close">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" role="img" aria-hidden="true">
                                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
                            </svg>
                        </button>
                    </header>
                    <div className="mt-4 mb-6">
                        <label>
                            <p className="text-xs mb-1">Название категории</p>
                            <input type="text" className="border outline-none p-2 w-full" />
                        </label>
                        <div className="grid grid-cols-5 gap-4">
                            <button>
                                <div className="mx-auto w-10 h-10 bg-blue-200 text-blue-500 text-lg rounded-full flex items-center justify-center active:bg-gray-100">
                                    <FontAwesomeIcon icon="fa-solid fa-burger" />
                                </div>
                            </button>
                            <button className="hover:text-blue-500 duration-150">
                                <div className="mx-auto w-10 h-10 bg-blue-200 text-blue-500 text-lg rounded-full flex items-center justify-center">
                                    <FontAwesomeIcon icon="fa-solid fa-burger" />
                                </div>
                            </button>
                            <button className="hover:text-blue-500 duration-150">
                                <div className="mx-auto w-10 h-10 bg-blue-200 text-blue-500 text-lg rounded-full flex items-center justify-center">
                                    <FontAwesomeIcon icon="fa-solid fa-burger" />
                                </div>
                            </button>
                            <button className="hover:text-blue-500 duration-150">
                                <div className="mx-auto w-10 h-10 bg-blue-200 text-blue-500 text-lg rounded-full flex items-center justify-center">
                                    <FontAwesomeIcon icon="fa-solid fa-burger" />
                                </div>
                            </button>
                        </div>
                        <button className="w-full bg-green-200 p-3 fixed inset-x-0 bottom-0">
                            Сохранить
                        </button>
                    </div>
                </div>
            </div>
        </div >
    return (
        <div className="p-2">
            {categoryModal}
            <header className="flex justify-center">
                <p className="mb-2 text-sm text-center font-medium text-gray-700 ">
                    Категория расходов
                </p>
            </header>
            <div className="mt-4 mb-6">
                <button onClick={() => setCategory(true)} className="flex items-center w-full mb-2 border p-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                    <div className="pl-2">Добавить новую категорию</div>
                </button>
                <div className="text-sm text-gray-500 mt-3 mb-1">
                    Мои категории расходов
                </div>
                <div className="flex items-center mb-2 border p-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                    <div className="pl-2">Категория расходов</div>
                </div>
                <div className="flex items-center mb-2 border p-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                    <div className="pl-2">Категория расходов</div>
                </div>
            </div>
        </div>
    )
}

export default ExpenseCategory