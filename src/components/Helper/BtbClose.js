import React from 'react'

export const BtbClose = () => {
    const [close, setClose]=React.useState(false)
    console.log(close)
  return{
    close,
    setClose
  }
   
}
