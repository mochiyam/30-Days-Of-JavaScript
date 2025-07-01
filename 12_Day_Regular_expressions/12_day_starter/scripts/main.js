let regEx = new RegExp('love','gi')

let regEx2= /love/gi

console.log(regEx, regEx2)

const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python|python/, 'JavaScript')
console.log(matchReplaced)

console.info('30 Days Of HTML and CSS challenge might be released')