import React from 'react'

const Page404 = () => {
  return (
    <div className="h-100 flex justify-center items-center">
      <div>
        <h1 className="text-6xl font-semibold text-gray-700">404</h1>
        <p className="text-gray-700">
          <a className="text-purple-600 hover:underline" href="../index.html">
            go back
          </a>
        </p>
      </div>
    </div>
  )
}

export default Page404
