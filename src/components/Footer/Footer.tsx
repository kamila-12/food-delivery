
import './Footer.css'
import {assets} from '../../assets/assets'

const Footer = () => {
  return (
    <div className ='footer' id = 'footer'>
      <div className="footer-content">
          <div className="footer-content-left">
              <img src={assets.logo} alt="" />
              <p>Crafting sweet moments for 5 with a perfect blend of passion and precision. Every creation refects our culinary expertise and commitment to delightful experiences.</p>
              <div className ="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
              </div>
          </div>
          <div className="footer-content-center">
            <h2>SITE LINK</h2>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy policy</li>
            </ul>

          </div>
          <div className="footer-content-right">
            <h2>CONTACT US</h2>
            <ul>
              <li>+13-666-666-666</li>
              <li>artb@.com</li>
            </ul>
          </div>
      </div>
    
      <p className="footer-copyright">© 2024 ART B. All rights reserved.</p>
    </div>
  )
}

export default Footer