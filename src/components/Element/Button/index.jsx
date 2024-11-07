import React from "react"

const Button = ({children, variant, type}) => {
    return (
        <button
            className={`h-12 rounded-md text-sm ${variant}`}
            type={type}
          >
            {children}
        </button>
    )
}

export default Button