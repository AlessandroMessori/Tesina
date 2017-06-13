import React from 'react'
import './index.scss'


class HeroVideo extends React.Component {

  constructor(props) {
    super(props)

    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    const vid = document.getElementById("bgvid");

    if (window.matchMedia('(prefers-reduced-motion)').matches) {
      vid.removeAttribute("autoPlay");
      vid.pause();
    }

    function vidFade() {
      vid.classList.add("stopfade");
    }

    vid.addEventListener('ended', () => {
      vid.pause();
      vidFade();
      this.props.onEnd()
    });

  }

  render() {
    return (<section>
      <video id="bgvid" playsInline autoPlay>
        <source src="images/Black-Mirror-Intro.mp4" type="video/mp4"/>
      </video>
    </section>)
  }

}

export default HeroVideo
