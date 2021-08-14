import { motion } from "framer-motion"
import { useState } from "react"
import { fadeInUp, routerAnimation, stagger } from "../animations"
import ProjectCard from "../components/ProjectCard"
import ProjectNavbar from "../components/ProjectNavbar"
import { projects as projectsData } from "../data"
import { Category } from "../type"

const Projects = () => {
    const [projects, setProjects] = useState(projectsData);
    const [active, setActive] = useState('all');
    const [showDetail, setShowDetail] = useState<Number | null>(null);

    const handleFilterCategory = (category:Category | 'all') => {
        if (category === 'all') {
            setProjects(projectsData);
            setActive(category);
            return;
        }
        const newArray = projectsData.filter(project =>project.category.includes(category));
        setProjects(newArray);
        setActive(category);
    }

    return (
        <motion.div className="px-5 py-2 overflow-y-scroll" style={{height:'65vh'}} variants={routerAnimation} initial='initial' animate='animate' exit='exit'>
            <nav>
                <ProjectNavbar handleFilterCategory={handleFilterCategory} active={active}/>
            </nav>
            <motion.div className='relative grid grid-cols-12 gap-4 my-3' variants={stagger}>
                {
                    projects.map((project) => (
                        <motion.div key={project.name} variants={fadeInUp}
                        className='col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200' > 
                            <ProjectCard project={project} showDetail={showDetail} setShowDetail={setShowDetail}/>
                        </motion.div>
                    ))
                }
            </motion.div>
        </motion.div>
    )
}

export default Projects
