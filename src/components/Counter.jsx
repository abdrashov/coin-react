import React, { useState } from "react"

const Counter = function () {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>
                Add
            </button>
            <button onClick={() => setCount(count - 1)}>
                Remove
            </button>
        </div>
    )
}

export default Counter;