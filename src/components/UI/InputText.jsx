import React from "react"

const InputText = (props) => {
    const style = {
        width: "100%",
        border: '2px solid #2684ff',
        borderRadius: '7px',
        outline: 0,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        "&:hover": {
            border: "2px solid green"
        }
    }

    return (
        <input {...props} style={style} />
    )
}

export default InputText