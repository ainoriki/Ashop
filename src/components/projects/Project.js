
import { useDispatch } from "react-redux";
import { setItemInCart } from "../../store/slices/cartSlice";
import { useSelector } from "react-redux";
import Count from "../../pages/Count";




const Project = ({ isAdd, title, img, handleRemove, price, id, project, increase, decrease}) => {


    const dispatch = useDispatch()
    const itemsInCart = useSelector(state => state.cart.itemInCart)
    const projectInCart = itemsInCart.find(p => p.id === project.id)
    const quantity = projectInCart ? projectInCart.quantity : 0


    const handleAdd = (project) => {
        dispatch(setItemInCart(project))
    }



    return ( 
        <>
              <li className="project">
                    <img src={img}/>
                    <h3 className="project__title">{title}</h3>
                    <strong><span>{price}tg</span></strong>
                    {isAdd? 
                    <div className="project-btns">

                        
                    {quantity > 0 ? 

                            <Count quantity={quantity} increase={increase} decrease={decrease}/>
                            // <Count quantity={project.quantity} increase={() => increase(project.id, project.quantity)} decrease={() => decrease(project.id, project.quantity)} />
                             
                            :<button className='btn btn-primary' onClick={() => handleAdd(project)}>Add</button>
                    }
                    
                        </div>


                        : <button className='btn btn-primary'  onClick={handleRemove}>Remove</button>
                    }

                    {/* {isLike ? 
                    <div className="project-btns">
                        <button className='btn btn-primary'  disabled={disabled} onClick={handleLike}>Like</button>
                        </div>
                    :  <button className='btn btn-primary'  onClick={handleRemoveLike}>Remove</button>
                    } */}
                       
                   
                </li>
        </>
     );
}
 
export default Project;