import moon from '../../images/icons/Moon.svg'
import sun from '../../images/icons/sun.svg'
import { useState, useEffect, useRef } from 'react'
import './style.css'

const BtnDarkMode = () => {

    // const[darkMode, setDarkMode] = useState('light')
    // const btnRef = useRef(null)
    // useEffect(() => {

    //     if(darkMode === 'dark'){
    //         document.body.classList.add('dark')
    //         btnRef.current.classList.add('dark-mode-btn--active')
    //     }else{
    //         document.body.classList.remove('dark')
    //         btnRef.current.classList.remove('dark-mode-btn--active')
    //     }  
    // }, [darkMode])


    // const toggleDarkMode = () => {
    //     console.log("tyrr")
    //     setDarkMode((currentValue) => {
    //         return currentValue === 'light' ? 'dark' : 'light'
    //     })
    // }
    // const btnDarkMode = document.querySelector(".dark-mode-btn")

    // btnDarkMode.onclick = function () {
    
    //     btnDarkMode.classList.toggle("dark-mode-btn--active")
    // }


    return ( 
        <>
        {/* {darkMode} */}
        <button className="dark-mode-btn dark-mode-btn--active">
            <img src={sun} className='dark-mode-btn_icon'/>
            <img src={moon} className='dark-mode-btn_icon'/>
        </button>
        </>
     );
}
 
export default BtnDarkMode;