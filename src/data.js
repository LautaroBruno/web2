import PDF from "./resources/LautaroBruno.pdf"
const responses = [
    {
        property: "name",
        resp: "Lautaro Bruno"
    },{
        property: "contact",
        resp: `email: <a href='mailto:lautarobruno225@gmail.com'>lautarobruno225@gmail.com</a><br/>
        phone: <a href="tel:+543400442094">+54 03400 44 2094</a>
        `
    },{
        property: "location",
        resp: '<a href="https://www.google.com/maps/place/Empalme+Villa+Constituci%C3%B3n,+Santa+Fe/data=!4m2!3m1!1s0x95b76de2988c4c75:0xfb4737eba386408b?sa=X&ved=2ahUKEwjHg_LhsbjuAhXLHLkGHaCfAcUQ8gEwCnoECB0QAQ">Emaplme Villa Constitución, Santa Fe, Argentina</a> (But avaliable to move).'
    },{
        property:"languages",
        resp:`spanish: native <br/> 
        english: medium`
    }, {
        property: "skills",
        resp: `
        MAIN TCNOLOGIES:<br/>
        HTML5 <br/>
        CSS 3<br/>
        Javascript ES6<br/>
        React JS<br/>
        <br/>
        BASIC KNOWING TECNOLOGIES:<br/>
        Node JS <br/>
        Vue JS <br/>
        Basic <br/>
        Visual Basic`
    },{
        property:"experience",
        resp:`place: <a href="https://www.google.com/search?client=firefox-b-d&q=Cooperativa+de+provisi%C3%B3n+de+obras+y+servicios+p%C3%BAblicos+de+EVC+LTDA">Cooperativa de provisión de obras y servicios públicos de EVC LTDA</a> <br/>
        from:2016 <br/>
        to: 2019<br/>
        position: IT<br/>
        <br/>
        place: <a href="https://www.liderlogo.es/">Liderlogo</a><br/>
        from:2019 <br/>
        to: 2020<br/>
        position: Web Developer ( React JS, Vue JS, Wordpress)<br/>
        <br/>
        place: <a href="https://axyoma.com.ar/">Axioma</a><br/>
        from:2020 <br/>
        to: now <br/>
        position: Full Stack Developer ( React JS, Node JS )
        `
    },{
        property: "social media",
        resp: ' <a target="_blank" href="https://www.instagram.com/lautarobrunok/">Instagram</a><br/><a target="_blank" href="https://www.linkedin.com/in/lautarobruno/">Linkedin</a><br/><a target="_blank" href="https://github.com/LautaroBruno">GitHub</a>'
    }, {
        property: "linkedin",
        resp: '<a target="_blank" href="https://www.linkedin.com/in/lautarobruno/">Linkedin profile</a><br/>'
    }, {
        property: "instagram",
        resp: ' <a target="_blank" href="https://www.instagram.com/lautarobrunok/">Instagram profile</a>'
    }, {
        property: "github",
        resp: ' <a target="_blank" href="https://github.com/LautaroBruno">GitHub profile</a>'
    }, {
        property: "about me",
        resp: 'I am an outgoing person willing to take on new challenges and I like to work in work groups. <br/> My main interest is in developing my programming skills. My hobbies are gaming and music.'
    }, {
        property: "resume",
        resp: `<a href="${PDF}">Click Here to download my PDF resume</a>`
    }
    

]
export default responses