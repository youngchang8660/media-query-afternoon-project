import React, {Component} from 'react'
import '../App.css'

class HeaderAndImage extends Component {
    constructor() {
        super()
        this.state = {
            toggleDropdown: false
        }
    }

    handleToggle = () => {
        this.setState({toggleDropdown: !this.state.toggleDropdown})
    }

    render() {
        return (
        <div>
            <header className='logo-header'>
                <div className='logo-text'>Start Bootstrap</div>
                <button className='dropdown-menu' onClick={this.handleToggle}> &#9776; MENU</button>
              
                    
                <div className='items'>
                    <span className='list-items'>SERVICES</span>
                    <span className='list-items'>PORTFOLIO</span>
                    <span className='list-items'>ABOUT</span>
                    <span className='list-items'>TEAM</span>
                    <span className='list-items'>CONTACT</span>
                </div>
            </header>
            <nav className={this.state.toggleDropdown ? 'clicked-menu move-down' : 'clicked-menu'} >
                <p className='dropdown-items'>SERVICES</p>
                <p className='dropdown-items'>PORTFOLIO</p>
                <p className='dropdown-items'>ABOUT</p>
                <p className='dropdown-items'>TEAM</p>
                <p className='dropdown-items'>CONTACT</p>
            </nav>

            <div className='image-box'>
                <div className='main-texts'>
                    <h2 className='welcome'>Welcome To Our Studio!</h2>
                    <h1 className='greeting'>IT'S NICE TO MEET YOU</h1>
                    <button className='more-button'>TELL ME MORE</button> 
                </div>
                
            </div>
        </div>
        )
    }
}


export default HeaderAndImage