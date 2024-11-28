import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: false}

  onClick = () => {
    this.setState(prevState => ({
      isDarkMode: !prevState.isDarkMode,
    }))
  }

  render() {
    const {isDarkMode} = this.state
    const modeClass = isDarkMode ? 'dark-mode' : 'light-mode'
    const buttonText = isDarkMode ? 'Dark Mode' : 'Light Mode'

    return (
      <div className={`container ${modeClass}`}>
        <div className="box">
          <h1>Click to Change Mode</h1>
          <div>
            <button className="btn" type="button" onClick={this.onClick}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
