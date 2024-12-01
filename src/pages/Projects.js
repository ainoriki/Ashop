import { projects } from "../helpers/ProjectsPageList";
import Project from "../components/projects/Project";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
    
    const Projects = ({handleAdd, handleLike}) => {

        const[select, setSelect] = useState('0');
        const itemsInFavorites = useSelector(state => state.favorite.itemInFavorite)
        const navigate = useNavigate()

        const isInFavorites = (id) => {
            if(itemsInFavorites.length === 0){
                return false
            }
            return itemsInFavorites.map(project => project.id).includes(id);
        };

        const handleChange = (e) => {
            setSelect(e.target.value)
        }
        return ( 
            <>
            <div className="select-block">
            <select className="form-select select" aria-label="Default select example" onChange={handleChange}>
                <option value='0'>Select courses</option>
                <option value="1">T-shirts</option>
                <option value="2">blouse</option>
                <option value="3">sneakers</option>
                <option value="4">jeans</option>
                <option value="5">skirts</option>
            </select>
            </div>

            <main className="section">
            <div className="container">
                <h2 className="title-1">Сlothes</h2>
                <ul className="projects">
                    {projects.map((project) => {
                     if(project.value === select || select === '0'){
                            return (
                                <Project
                                key={project.id}
                                id={project.id}
                                title={project.title} 
                                img={project.img}
                                price={project.price}
                                isAdd={true}
                                isLike={true}
                                disabled={isInFavorites(project.id)}
                                handleAdd={() => handleAdd(project)}
                                handleLike={() => handleLike(project)}
                                project={project}
                                />
                            )
                         }
                    })}
                
                </ul>
            </div>
        </main>
        </>
        );
    }
    
    export default Projects;