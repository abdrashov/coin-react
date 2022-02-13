import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ErrorsAlert = ({ errors, setIsModal, isModal }) => {
    return (
        <div onClick={() => setIsModal(false)} className={isModal ? 'fixed inset-0 z-30 flex bg-black bg-opacity-50 items-center justify-center pt-10' : `hidden`}>
            <div onClick={event => event.stopPropagation()} className="px-4 py-3 overflow-hidden bg-red-50 rounded-md m-4 max-w-xl">

                <div className="font-semibold flex items-center">
                    <span className="text-red-700 text-lg mr-2">
                        <FontAwesomeIcon icon="fa-regular fa-circle-xmark" />
                    </span>
                    <span className="text-red-900 text-base">
                        {errors.message}
                    </span>
                </div>
                <ul className="text-red-800 ml-2">
                    {/* {errors.data.forEach(error =>
                    <li className="flex items-center">
                        <span className="text-red-900 text-xs mr-2">
                            <FontAwesomeIcon icon="fa-solid fa-minus" />
                        </span>
                        <span className="text-tiny">
                            {error[0]}
                        </span>
                    </li>
                )} */}
                </ul>

            </div>
        </div>
    )
}

export default ErrorsAlert