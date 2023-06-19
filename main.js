let inputArea = document.querySelector(".large-area--input")
let outputArea = document.querySelector(".large-area--output")
const btnFormat = document.querySelector(".controls__button--format")
const btnMinify = document.querySelector(".controls__button--minify")

inputArea.value = localStorage.getItem('request')
outputArea.value = localStorage.getItem('result')

const jsonValidate = (str) => {
    try {
        JSON.parse(str);
    } catch (e) {
        return false
    }
    return true
}

btnFormat.addEventListener('click', () => {
    if (jsonValidate(inputArea.value)) {
        localStorage.setItem('request', inputArea.value)
        const formatted = JSON.stringify(JSON.parse(inputArea.value), null, 4)
        localStorage.setItem('result', formatted)
        outputArea.value = formatted
    } else {
        alert('JSON is invalid')
    }
})

btnMinify.addEventListener('click', () => {
    if (jsonValidate(inputArea.value)) {
        localStorage.setItem('request', inputArea.value)
        const minified = JSON.stringify(JSON.parse(inputArea.value))
        localStorage.setItem('result', minified)
        outputArea.value = minified
    } else {
        alert('JSON is invalid')
    }
})
