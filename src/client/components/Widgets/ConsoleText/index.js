/* eslint-disable */
import React from 'react'
import $ from 'jquery'
import './index.scss'

class ConsoleText extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      text: props.children
    }

    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {

    $(window).ready(() => {
      const id = `#${this.props.id}`
      const title = this.state.text
      let check = true

      function getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
      }

      const resolver = {
        resolve: function resolve(options, callback) {
          // The string to resolve
          const resolveString = options.resolveString || options.element.getAttribute('id')
          const combinedOptions = Object.assign({}, options, {resolveString: resolveString})

          function randomCharacter(characters) {
            return characters[getRandomInteger(0, characters.length - 1)]
          }

          function doRandomiserEffect(options, callback) {
            const characters = options.characters
            const timeout = options.timeout
            const element = options.element
            const partialString = options.partialString
            const counter = options.counter

            let iterations = options.iterations

            setTimeout(() => {
              if (iterations >= 0) {
                const nextOptions = Object.assign({}, options, {iterations: iterations - 1})
                const texts = Array.from(element.textContent)


                // Ensures partialString without the random character as the final state.
                if (iterations === 0) {
                  texts[counter] = partialString
                  element.textContent = texts.join('')
                } else {
                  // Replaces the last character of partialString with a random character
                  texts[counter] = partialString.substring(0, partialString.length - 1) + randomCharacter(characters)
                  element.textContent = texts.join('')
                }

                doRandomiserEffect(nextOptions, callback)
              } else if (typeof callback === "function") {
                callback()
              }
            }, options.timeout)
          }

          function doResolverEffect(options, callback) {
            const resolveString = options.resolveString
            const characters = options.characters
            const offset = options.offset
            const partialString = resolveString.substring(0, offset)
            const combinedOptions = Object.assign({}, options, {partialString: partialString})

            Array.from(resolveString).forEach((item, i) => doRandomiserEffect(Object.assign({}, options, {partialString: resolveString})))

            if (typeof callback === "function") callback()
          }

          doResolverEffect(combinedOptions, callback)
        }
      }

      let hT = $(id).offset().top
      if (hT < 100) {
        check = false
        const string = Array.from(title)
        string.forEach((char, i) => {

          const options = {
            counter: i,
            // Initial position
            offset: 0,
            // Timeout between each random character
            timeout: 10,
            // Number of random characters to show
            iterations: getRandomInteger(30, 70),
            // Random characters to pick from
            characters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'x', '#', '%', '&', '-', '+', '_', '?', '/', '\\', '='],
            // String to resolve
            resolveString: char,
            // The element
            element: document.querySelector(id)
          }

          resolver.resolve(options)

        })
      }

      $(window).scroll(function () {
        if ($(id).offset()) {
          let hT = $(id).offset().top,
            hH = $(id).outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();


          if (((wS > (hT + hH - wH)) || (hT < 100)) && check) {
            check = false
            const string = Array.from(title)
            string.forEach((char, i) => {

              const options = {
                counter: i,
                // Initial position
                offset: 0,
                // Timeout between each random character
                timeout: 10,
                // Number of random characters to show
                iterations: getRandomInteger(30, 70),
                // Random characters to pick from
                characters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'x', '#', '%', '&', '-', '+', '_', '?', '/', '\\', '='
                  , 'ض', 'ل'],
                // String to resolve
                resolveString: char,
                // The element
                element: document.querySelector(id)
              }

              resolver.resolve(options)

            })

          }
        }
      })
    })
  }

  render() {
    return (<div className="container">
      <h1 className="heading" id={this.props.id}/>
    </div>)
  }


}

export default ConsoleText
