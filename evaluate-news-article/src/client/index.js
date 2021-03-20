import handleSubmit from './js/formHandler'

// TODO include your scss file here
import './styles/style.scss'

window.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn-submit')
    btn.addEventListener('click' , ()=> {
        handleSubmit()
    })
    // TODO: add event listener to it when the click to call handleSubmit function
})
export { handleSubmit }
