import plus from '../images/icons/add.svg'
import minus from '../images/icons/minus.svg'

const Count = ({quantity, increase, decrease}) => {
    return ( 
        <div className='count'>
            

            <div className="count-controls">
                <button type="button" className='count__up' onClick={increase}>  
                    +
                </button>

                <div className="count__box">
                <input className="count__input" value={quantity} readOnly/>
            </div>
                <button type="button" className='minus' onClick={decrease}>
                -
                </button>
            </div>
        </div>
     );
}
 
export default Count;