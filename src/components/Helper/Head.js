import React from 'react'

const Head = (props) => {

    React.useEffect(()=>{
        document.title=props.title + ' | Barbear'
    }, [props])

return <></>
}
export default Head
