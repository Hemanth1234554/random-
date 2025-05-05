const rfs= require('fs')

const first = rfs.readFileSync('./content/sub/text.txt','utf-8')
console.log(first)

rfs.writeFileSync(
    './content/writing.txt',
    `The content in this new file is ${first}`,
    {flag : 'a'}
)



