import github from './Vector.svg'
import './style.css'
const BtnGitHub = ({link}) => {
    return ( 
        <>
            <a href={link} className="btn-outline">
                GitHub repo
            <img src={github} alt="" />
            </a>

        </>
     );
}
 
export default BtnGitHub;