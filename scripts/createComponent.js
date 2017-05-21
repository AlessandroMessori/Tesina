const fs = require('fs')
const argv = require('yargs').argv
const mkdirp = require('mkdirp')

let currentPath = __dirname.split('/')
currentPath.pop()
currentPath = currentPath.join('/')

const {name, functional} = argv
const title = name.charAt(0).toUpperCase() + name.slice(1)
const dir = `${currentPath}/src/client/components/${title}`

const getTemplate = (name, functional) => {

  const render = (name) => `(<div className='${name.toLowerCase()}-section'>${name}</div>)`

  const getFunctional = (name) => `const ${title} = (props) => ${render(title)} `

  const getClassical = (name) => (
`class ${title} extends React.Component {
 
  render(){
    return ${render(title)}
  }

}`)

  const template = (name) => (
`import React from 'react'
import './index.scss'

${functional ? getFunctional(name) : getClassical(name)}

export default ${title}
`)

  const style = (name) => (
`.${name.toLowerCase()}-section {

}
`)

  return {
    view: template(name),
    style: style(name)
  }

}

mkdirp(dir, (err) => {

  if (err)
    console.log('there was an error:', err)
  else {
    fs.writeFileSync(`${dir}/index.scss`, getTemplate(name, functional).style)
    fs.writeFileSync(`${dir}/index.js`, getTemplate(name, functional).view)

    console.log('component created')
  }

})

