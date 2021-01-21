import React from 'react'
import AutoWrite from './AutoWrite'
import Data from '../data'
import responses from '../data'

function Console() {
    const [consoleState, setConsoleState] = React.useState(
        ['Welcome to mi console Resume, check the comands to write on the console on the top of the page or write "comands" on the console to know more']

    )
    const style = {
        marginTop: "120px",
        padding: "20px"
    }
    const inputStyle = {
        backgroundColor: "transparent",
        border: "0px",
        width: "100%"
    }
    const witeOnConsole = (text) => {
        const newState = [...consoleState]
        const lowCaseValue = text.value.toLowerCase()
        let response
        console.log(Data)

        if (lowCaseValue === "comand") {
            response = "The avaliable comands are: <br/>"
            Data.forEach(items => response += `${items.property} <br/>`)
        } else {
            Data.forEach(({ property, resp }) => {
                if (property === lowCaseValue) {
                    response = resp
                    
                }
                
            })
        }
         if (response === undefined ) {
            response = `The comand ${text.value} is not a know comand.<br/> You can check the list of comands on the top of the screen or write "comand" to see the list on screen.`
         }
            
        newState.push(text.value)
        newState.push(response)
        text.value = ""
        window.scrollTo(0, window.innerHeight)
        setConsoleState(newState)
    }
    window.onclick=()=>{
        document.getElementById('input-main').focus()
    }
    return (
        <div style={style} className="container">
            {
                consoleState.map((item, i) => {
                    if (i === consoleState.length - 1) {
                        return <AutoWrite text={item} />
                    }
                    else {
                        return <p style={i%2 === 0 ? {paddingLeft:"20px"} : {}} dangerouslySetInnerHTML={{ __html: item }}></p>
                    }
                })
            }


            <input id="input-main" className="input-console" style={inputStyle} placeholder="_" type="text" onKeyDown=
                {(e) => {
                    if (e.keyCode === 13) {
                        witeOnConsole(e.target)
                    }
                }} />
        </div>
    )
}

export default Console
