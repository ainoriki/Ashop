import Project from "../components/projects/Project";
import { useDispatch, useSelector } from "react-redux";
import { removeItemInCart } from "../store/slices/cartSlice";
import Count from "./Count";
import { updatedQuantity } from "../store/slices/cartSlice";
import { useState } from "react";
import './style.css'
import { setItemInCart } from "../store/slices/cartSlice";
import { addresses } from "../helpers/AddressPageList";
import del from "../../src/images/icons/delete.svg"
import GoogleMapReact from 'google-map-react';
import { useNavigate } from "react-router-dom";
import { address } from "framer-motion/client";

const Basket = ({quantity}) => {

    const dispatch = useDispatch()
    const itemsInCart = useSelector(state => state.cart.itemInCart)
    const [currentStep, setCurrentStep] = useState(1)
    const[select, setSelect] = useState(false)
    const[map, setMap] = useState(1)
    const navigate = useNavigate()
    const [choice, setChoice] = useState(false)


    //перебираем данные, которые нам нужны

       const increase = (id, quantity) => {
        dispatch(updatedQuantity({ id, quantity: quantity + 1 }))
        console.log('increase', quantity)
    }

    const Map = {
      center: {
        lat: 10.99835602,
        lng: 77.01502627
      },
      zoom: 11
    };

    const handleDelete = (id) => {
      dispatch(removeItemInCart(id))
    }
    const decrease = (id, quantity) => {
            dispatch(updatedQuantity({ id, quantity: quantity - 1 }))
            console.log('decrease', quantity)
    }   

    const handleMap = () => {
      navigate('/map')
    }

    const handleBuyAll = () => {
      dispatch(setItemInCart(itemsInCart))
      setCurrentStep(2)
  }

     
    const totalPrice = itemsInCart.reduce((total, item) => {
        return total + item.price * item.quantity
    }, 0)

    console.log("totalPrice", totalPrice)

     const handleRemove = (id) => {
      dispatch(removeItemInCart(id))
     }

    return ( 
        <>
          {currentStep === 1 ? (
          <div className="cart-block">
            <h1 className="basket-title">Корзина</h1>  
            <span><strong>Всего:</strong> {totalPrice}</span>
          <div className="basket-blocks">
            {itemsInCart.length > 0 ? (

            <ul>  
              <div className="basket-blocks">
              {itemsInCart.map(project => (
                  
                  <li key={project.id}>

                    <Project 
                    key={project.id}
                      id={project.id}
                    title={project.title}
                      img={project.img}
                      handleRemove={() => handleRemove(project.id)}
                      project={project}
                      price={project.price}
                    />
                      <Count quantity={project.quantity} increase={() => increase(project.id, project.quantity)} decrease={() => decrease(project.id, project.quantity)}/>
                    
                  </li>
                ))}
              </div>
              <button onClick={handleBuyAll} className="btn btn-dark">Оформить все заказы</button>

                    </ul>
                    
                ) : (
                    <p>Корзина пуста</p>
                )}
                  </div>
                  </div>
            ):
            
            (
              <div>
                <div className="order-blocks">

                  <div className="left-block">
                  <h2>Ваш заказ</h2>
                    <div className="left-block-1">
                        {itemsInCart.map((project, quantity) => (
                        
                            <li key={project.id}>
                              <Project 
                                key={project.id}
                                title={project.title}
                                project={project}
                                price={project.price}
                                quantity={quantity}
                              />
                              {/* <button onClick={handleDelete}>
                              <img src={del} alt="" className="project__image" />
                              </button> */}
                               </li>
                       
                          ))}
                    
                    </div>
                    


                      <div className="delivery">
                        <span>Способы доставки</span>
                         <div className="select-block">
                          
                            <button onClick={handleMap}>Выбрать адрес доставки</button>
                      </div>
                      </div>
                  </div>

                  <div className="right-block">
                    {setChoice === true && <p>{address}</p>}
                      <p>Товары {quantity}</p>
                     <h2>Итого: {totalPrice}</h2>
                     <button>Заказать</button>

                  </div>

                </div>
            </div>
            )}

         
            </>
      );
        
      }
 
export default Basket;
