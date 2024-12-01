import Header from "../components/header/Header";

const Home = () => {
    return ( 
        <>
        <Header />
        <main className="section">
        <div className="container">
                    <ul className="content__list">
                        <li className="content__list-item">
                            <h2 className="title-2">Frontend </h2>
                            <p>JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents</p>            
                        </li>
                        <li className="content__list-item">
                            <h2 className="title-2">Backend</h2>
                            <p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
                        </li>
                    </ul>
        </div>
      </main>
        </>
     );
}
 
export default Home;