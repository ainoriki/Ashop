import './style.css'

const Header = () => {


    return (  
        <header className="header">
        <div className="header__wrapper">

            <h1 className="header__title">
                <strong>Hi, this is <em>shop</em></strong><br />
                stylish and comfortable clothes</h1>
                 <div className="header__text">  
                 </div>
                 <a href="/courses" className="btn">Сlothes</a>
        </div>
 </header>
    );
}
 
export default Header;