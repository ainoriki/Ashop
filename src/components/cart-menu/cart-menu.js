import { calcTotalPrice } from "../total";
import './cart-menu.css'

const CartMenu = ({projects, addOrder}) => {


    return ( 
        <div className="cart-menu">
            <div className="cart-menu__games-list">
                {
                    projects.length > 0 ? projects.map((project) => project.title) : "Корзина пуста"
                }
            </div>

            {
                projects.length > 0 ?
                <div className="cart-menu__arrange">
                    <div className="cart-menu__total-price">
                        <span>Итого:</span>
                        <span>{calcTotalPrice(projects)} руб</span>
                    </div>
                    <button onClick={addOrder}>Оформить заказ</button>
                </div>
                :null
            }
        </div>
     );
}
 
export default CartMenu;