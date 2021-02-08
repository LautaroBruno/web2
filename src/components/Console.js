import React from 'react'
import AutoWrite from './AutoWrite'
import Data from '../data'
import responses from '../data'
import sanitizeHtml  from   'sanitize-html'

function Console() {
    const [consoleState, setConsoleState] = React.useState(
        ['Welcome to my console Resume, check the comands to write on the console on the top of the page or write "comands" on the console to know more']

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
        if (lowCaseValue === "comands") {
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
        const cleanValue=sanitizeHtml(text.value, {
            allowedTags: [ 'b', 'i', 'em', 'strong', 'a','br','p' ],
            allowedAttributes: {
              'a': [ 'href' ],
              'p':[ 'class' ]
            }
          })
        newState.push(cleanValue)
        newState.push(response)
        text.value = ""
        window.scrollTo(0, window.innerHeight)
        setConsoleState(newState)
    }
    let last = ""
    React.useEffect(()=>{
        document.getElementById('input-main').focus()
        window.addEventListener("keypress", ()=>{
            
        document.getElementById('input-main').focus()
        })
    })
    React.useEffect(() => {
        
        window.scrollTo(0, window.innerHeight)
    }, [consoleState])
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
                    }else if (e.keyCode === 38){
                        last === "" ? last = consoleState.length-2 : last -= 2
                        e.target.value= last >= 0 ?consoleState[last] : ""
                        if (last<0){
                            last=-1
                        }
                    }else if (e.keyCode === 40){
                        last === "" ? last = consoleState.length+2 : last += 2
                        e.target.value= last >= 0 ?consoleState[last] : ""
                    }
                    if (e.target.value==="undefined"){
                        e.target.value = ""
                        last = consoleState.length
                    }
                }} />
        </div>
    )
}

export default Console
