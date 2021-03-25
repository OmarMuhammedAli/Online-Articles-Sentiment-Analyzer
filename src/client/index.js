import './styles/style.scss'

// RegEx reference taken from this StackOverflow thread: https://stackoverflow.com/a/5717133/13756013
const checkURL = (url) => {
    var pattern = new RegExp(
        '^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$',
        'i'
    ) // fragment locator
    return !!pattern.test(url)
}

window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form')
    form.onsubmit = (event) => {
        event.preventDefault()
        /*
        1- Get URL from input field.
        2- Check the validity of the URL.
            i- If valid: do some stuff.
            ii- else: alert the User.
    */
        const url = document.getElementById('article-url').value
        if (checkURL(url)) {
            console.log(url)
        } else {
            alert('Please enter a valid URL')
        }
    }
})
