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
         
      ro.observe(document.getElementById("last-p"))
      }, [props.text])
      var ro = new ResizeObserver(entries => {
        window.scrollTo(0, document.getElementsByTagName('body')[0].offsetHeight)
  });
    
    return (
        <div style={{paddingLeft:"20px"}} >
            <p id="last-p" >
                
            </p>
        </div>
        
    )
}

export default AutoWrite
