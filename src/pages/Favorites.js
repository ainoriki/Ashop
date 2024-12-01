import { useDispatch, useSelector } from "react-redux";
import Project from "../components/projects/Project";
import removeItem from '../store/slices/favoriteSlice'

const Favorites = () => {

    const itemsInFavorites = useSelector(state => state.favorite.itemInFavorite)

    const dispatch = useDispatch()

    const handleRemoveLike = (id) => {
        dispatch(removeItem(id))
    }

    return ( 
        <>
            <h1>Favorites</h1>

            {itemsInFavorites.length > 0 ? (
                <ul>
                    {itemsInFavorites.map(project => (
                        <li>
                        <Project 
                        img={project.img}
                        title={project.title}
                        handleRemoveLike={() => handleRemoveLike(project.id)}
                        />          
                        </li>
                    ))}
                </ul>
            ):(
                <p>Избранных нет</p>
            )}
        </>
     );
}
 
export default Favorites;