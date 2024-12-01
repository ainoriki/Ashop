
import { createSlice } from "@reduxjs/toolkit"


const favoriteSlice = createSlice({
    name:'favorites',
    initialState: {
        itemInFavorite:[]
    },

    reducers: {
        setItemInFavorites: (state, action) => {
            const item = action.payload
            const existItem = state.itemInFavorite.find(project => project.id === item.id)
            if(!existItem){
                state.itemInFavorite.push(action.payload)
            }
        },

        revomeItem: (state, action) => {
            state.itemInFavorite = state.itemInFavorite.filter(project => project.id !== action.payload)
        }
    }
})

export default favoriteSlice.reducer
export const{setItemInFavorites , revomeItem} = favoriteSlice.actions