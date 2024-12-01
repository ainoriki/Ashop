import { projects } from "../helpers/ProjectsPageList"

export const calcTotalPrice = (projects) => 
    projects.reduce((acc, project) => acc += project.price, 0);