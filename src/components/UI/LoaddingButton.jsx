import React from "react"

const LoaddingButton = ({ children, ...props }) => {
    const style = {
        border: '2px solid #2684ff',
        borderRadius: '7px',
        outline: 0,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        cursor: 'pointer',
        background: '#fff', 
        '&:hover': {
            background: '#000'
        }
    }

    return (
        <button {...props} style={style}>
            {children}
        </button>
    )
}

export default LoaddingButton