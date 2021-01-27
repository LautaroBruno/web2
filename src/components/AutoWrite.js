import React from 'react'
import Typewriter from 'typewriter-effect/dist/core';

const AutoWrite = props => {
    const [text, settext] = React.useState(props.text)
    
      React.useEffect(() => {
        var app = document.getElementById("last-p");
        const typewriter =  new Typewriter(app, {
            delay:1,
          });
          typewriter
            .typeString(text)
            .start();
          settext(text)
          
          
      }, [props.text])
    
    return (
        <div style={{paddingLeft:"20px"}} >
            <p id="last-p" >
                
            </p>
        </div>
        
    )
}

export default AutoWrite
