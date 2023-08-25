import Logo from '../../../public/Logo.png'
import './footer.css';
import {GithubLogo, LinkedinLogo} from "phosphor-react";

const Footer = () => {
    return (
        <div className='footer'>
            <img src={Logo} style={{ width: '200px', height: '200px', margin: '10px' }}/>
            <ul>
                <li>
                    <GithubLogo size={24} />
                    GitHub: @fonsecamarcelo
                </li>
                <li>
                    <LinkedinLogo size={24} />
                    Linkedin: marcelo-fonseca-dev/
                </li>
            </ul>
        </div>
    )
}
export default Footer;