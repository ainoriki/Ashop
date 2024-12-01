
import BtnGitHub from '../components/btnGitHub/BtnGitHub';
import projectimg from '../images/projects/2.jpg'
import { useParams } from 'react-router-dom';
import {projects} from './../helpers/ProjectsPageList'

const ProjectPage = () => {
    const{id} = useParams()
    const project = projects[id];
    console.log(project)

    return ( 
        <main className="section">
        <div className="container">
            <div className="project__details">
                <h2 className="title-1">{project.title}</h2>
                <img src={project.img} alt="" className="project__details-img" />

                <div className="project__details-desc">
                    <p>Skills: {project.skills}</p>
                </div>
                <BtnGitHub link="https://github.com"/>
            </div>
        
        </div>
      </main>
     );
}
 
export default ProjectPage;