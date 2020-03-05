import React, {Component} from 'react'
import '../App.css'

class ServiceAndPortfolio extends Component {
    
    render() {
        return (
            <div className='body-box'>
                <div className='service-box'>
                    <div className='top-service'>
                        <h2>SERVICES</h2>
                        <p> Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className='bottom-service'>
                        <div className='icon-box'>
                            <img className='cartIcon' src='https://iconsetc.com/icons-watermarks/flat-circle-white-on-yellow/foundation/foundation_shopping-cart/foundation_shopping-cart_flat-circle-white-on-yellow_512x512.png'/>
                            <h3>E-Commerce</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                        <div className='icon-box'>
                        <img className='laptopIcon' src='https://iconsetc.com/icons-watermarks/flat-circle-white-on-yellow/foundation/foundation_laptop/foundation_laptop_flat-circle-white-on-yellow_512x512.png'/>
                            <h3>Responsive Design</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                        <div className='icon-box'>
                        <img className='securityIcon' src='https://previews.123rf.com/images/jovanas/jovanas1606/jovanas160600531/59272308-security-camera-icon-with-long-shadow.jpg'/>
                            <h3>Web security</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default ServiceAndPortfolio