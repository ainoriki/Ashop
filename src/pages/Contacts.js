const Contacts = () => {
    return ( 
        <main className="section">
        <div className ="container">
                <h1 className="title-1">Contacts</h1>
                    <ul className="content__list">
                        <li className="content__list-item">
                            <h2 className="title-2">Location </h2>
                            <p>Moscow, Russia</p>            
                        </li>
                        <li className="content__list-item">
                            <h2 className="title-2">Telegram / WhatsApp</h2>
                            <p><a href="tel:+7471234567"> +7 (905) 123-45-67</a></p>
                        </li>
                        <li className="content__list-item">
                            <h2 className="title-2">Email</h2>
                            <a href="">webdev@protonmail.com</a>
                        </li>
                    </ul>
        </div>
      </main>
     );
}
 
export default Contacts;