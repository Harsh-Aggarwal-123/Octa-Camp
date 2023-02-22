import React from 'react'

const Avatar = ({ children, backgroundColor, px, py, color, borderRadius, fontSize, cursor, my, mx}) => {
    const style = {
        backgroundColor,
        padding: `${py} ${px}`,
        color: color || 'black',
        borderRadius,
        fontSize,
        textAlign: "center",
        cursor: cursor || null,
        textDecoration: "none",
       margin: `${my} ${mx}`,
    }

    return (
        <div style={style}>
            { children }
        </div>
    )
}

export default Avatar