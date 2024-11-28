import React from 'react'

const tipos={
    email:{
        regex:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        sms:'Tenta um email valido!'
    },
    senha:{
        regex:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
        sms:'Utilize uma senha segura!'
    },
  
}

const useForm = (tipo) => {
    const [value, setValue]=React.useState()
    const [erro, setErro]=React.useState(null)

    function validacao(valor){
        if(tipo===false)return true
        if(value.length===0){
            setErro('Preecha o campo por favor!')
            return false
        }
        else if(tipos[tipo] && !tipos[tipo].regex.test(valor)){
            setErro(tipos[tipo].sms)
            return false
        }
        else{
            setErro(null)
            return true
        }

    }
    function handleChange({target}){
        if(erro) validacao(target.value)
        setValue(target.value)
    }
  return {
    value,
    setValue,
    erro,
    setErro,
    handleChange,
    validacao:()=>validacao(value),
    onBlur:()=>validacao(value)
  }
}

export default useForm
