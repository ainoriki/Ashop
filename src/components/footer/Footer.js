import './style.css'
import git from '../../images/icons/gitHub.svg'
import ins from '../../images/icons/instagram.svg'
import twit from '../../images/icons/twitter.svg'
import ln from '../../images/icons/linkedIn.svg'
import vk from '../../images/icons/vk.svg'
const Footer = () => {
    return ( 
        <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item">
                        <a href="">
                            <img src={git}alt="" />
                        </a>
                    </li>
                    <li className="social__item">
                        <a href="">
                            <img src={twit} alt="" />
                        </a>
                    </li>
                    <li className="social__item">
                        <a href="">
                            <img src={ins} alt="" />
                        </a>
                    </li>
                    <li className="social__item">
                        <a href="">
                            <img src={ln} alt="" />
                        </a>
                    </li>
                    <li className="social__item">
                        <a href="">
                            <img src={vk} alt="" />
                        </a>
                    </li>
    
                </ul>
    
                <div className="copyright">
                    <p>copyright 2024</p>
                </div>
            </div>
        </div>
     </footer>
     );
}
 
export default Footer;