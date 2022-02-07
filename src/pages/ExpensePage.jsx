import React from "react"

const ExpensePage = () => {
    return (
        <div className="px-2">
            <h1 className="text-lg font-bold bg-gray-200 text-gray-900 py-2 text-center">Счета</h1>
            <div className="text-center py-4">
                <div className="text-3xl font-medium mb-1">
                    56565 KZT
                </div>
                <div className="text-sm text-gray-400 font-medium">
                    ОБЩИЙ БАЛАНС
                </div>
            </div>
            <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                <div className="pl-2">kaspi</div>
            </div>
            <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                <div className="pl-2">kaspi</div>
            </div>
            <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                <div className="pl-2">kaspi</div>
            </div>
        </div>
    )
}

export default ExpensePage