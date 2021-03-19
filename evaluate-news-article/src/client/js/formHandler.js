import {checkURL} from './checkURL'
const post = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        credentials: 'same-origin',
        mode: 'cors',
        body: JSON.stringify(data)
    })
    try {
        return await response.json()
    } catch (error) {
        console.log(error)
        
    }
}

const handleSubmit = async () => {
    
    const url = document.getElementById('article-url').value
    console.log(url)
    try{
    if(!checkURL(url)) {
        document.getElementById("text").innerHTML = "invalid input"
        return
    }
    const data = await post("http://localhost:8081/add-url", {url})    
    console.log(data)
    document.getElementById("text").innerHTML= "Text : "+data.text
    document.getElementById("agreement").innerHTML= "Agreement : "+data.agreement
    document.getElementById("subjectivity").innerHTML= "Subjectivity : "+data.subjectivity
    document.getElementById("confidence").innerHTML= "Confidence : "+data.confidence
    document.getElementById("irony").innerHTML= "Irony : "+data.irony
    document.getElementById("score_tag").innerHTML= "Score Tag : "+data.score_tag
}
catch(e){
    console.log(e)
}
    /**
     * TODO
     *  - Get Value of the input for URL
     *  - Check if it's URL or not
     *      yes
     *          send it to the backend
     *      no
     *          show user message it's not valid URL
     */
}

export default handleSubmit
