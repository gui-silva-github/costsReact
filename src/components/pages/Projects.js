import { useLocation } from "react-router-dom";

import savings from '../../img/savings.svg'

import Message from "../layout/Message";

import Container from "../layout/Container";

import Loading from '../layout/Loading.js';

import LinkButton from "../layout/LinkButton.js";

import styles from './Projects.module.css';

import ProjectCard from '../project/ProjectCard.js';

import { useState, useEffect } from "react";

function Projects(){

    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [projectMessage, setProjectMessage] = useState('')

    const location = useLocation()
    let message = ''
    if (location.state){
        message = location.state.message
    }

    useEffect(()=>{
        setTimeout(()=>{
            fetch('http://localhost:5000/projects', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
            }).then(resp => resp.json())
            .then(data =>{
                console.log(data)
                setProjects(data)
                setRemoveLoading(true)
            })
            .catch(err => console.log(err))
        }, 400)   
    }, [])

    function removeProject(id){
        setProjectMessage('')

        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(resp => resp.json())
        .then(data => {
            setProjects(projects.filter((project) => project.id !== id))
            setProjectMessage('Projeto removido com sucesso!')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className={`${styles.height} ${styles.project_container}`}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to='/newproject' text="Criar Projeto"/>
            </div>
            {message && <Message type="success" msg={message}/>}
            {projectMessage && <Message type="error" msg={projectMessage}/>}
            <div>
                <div>
                    <div className={styles.home_container}>
                        <img src={savings} alt="Costs"/>
                    </div>
                    <Container customClass="start">
                        {projects.length > 0 && 
                        projects.map((project)=>(
                            <ProjectCard 
                            id={project.id}
                            name={project.name}
                            budget={project.budget}
                            category={project.category.name}
                            key={project.id}
                            handleRemove={removeProject}
                            />
                        ))}
                        {!removeLoading && <Loading/>}
                        {removeLoading && projects.length === 0 && (
                            <p>Não há projetos cadastrados!</p>
                        )
                        }
                    </Container>
                </div>
            </div>
        </div>
    )

}

export default Projects;