import React from 'react'

type Children = {
    children: React.ReactNode,
    height?: string,
    width?: string,
    focussed?: boolean
}

const HoverStyle = ({children, height, width, focussed}: Children) => {
  return (
    <div className={`flex items-center justify-center rounded-full hover:bg-gray-200 cursor-pointer ${focussed && "bg-gray-100"} ${height} ${width}`}>
        {children}
    </div>
  )
}

export default HoverStyle