import React from 'react'

const useTime = () => {
    let hora
    let min
    React.useEffect(()=>{
       setInterval(()=>{ const horaAtual=new Date()
        let hora=horaAtual.getHours()
        let min=horaAtual.getMinutes()
        console.log(hora)
        console.log(min)
    })

}, [hora, min])

  return {
    min,
    hora
  }
}

export default useTime
