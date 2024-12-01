import { createSlice } from "@reduxjs/toolkit";

// interface CartState {
//     items: IceCream[];
//     totalQuantity: number;
// }


const initialState: CartState = {
    items: [],
    totalQuantity: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: {


    reducers: {
        setItemInCart: (state, action) => {
            const item = action.payload
            const existItem = state.itemInCart.find(project => project.id === item.id)
            if(!existItem){
                const newObject = {...item, quantity: 1}
                state.itemInCart.push(newObject)
            }

        },  
        removeItemInCart: (state, action) => {
            state.itemInCart = state.itemInCart.filter(project => project.id !== action.payload)
        },

        updatedQuantity: (state, action) => {
            const itemInCart = state.itemInCart
            const{id, quantity}  = action.payload
            const item = itemInCart.find(project => project.id === id)
            if(item){
                const newItemInCart = itemInCart.map((p) =>
                    {
                        if(p.id === id){ 
                            const project = p 
                            project.quantity = quantity 
                            return project  
                        }else{
                            return p
                        } 
                    }
                )
                state.itemInCart = newItemInCart
            }
        }
        
    }
}
})

export const {setItemInCart, removeItemInCart, updatedQuantity} = cartSlice.actions
export default cartSlice.reducer