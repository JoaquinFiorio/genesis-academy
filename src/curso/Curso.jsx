import { useParams } from 'react-router-dom';
import courses from '../utils/cursos';
import './curso.css';
import { NavLink } from "react-router-dom";

const Curso = () => {

    const { id } = useParams();
    const course = courses.find((course) => course.title === id.replace(/-/g, ' '));

    return (
        <>
            <div className='container'>
                <div className='container-text'>
                    <h1>{ course.title }</h1>
                    <p>{ course.resume }</p>
                </div>
                <a className='link' href='#curso'>Ver detalles del Curso</a>
            </div>
            <div id='curso'>
                <h2 className='title-content'>CONTENIDO DEL CURSO</h2>
                { course.lessons.map((lesson) => (
                    <NavLink to={`/cursos/${course.title.replace(/\s+/g, '-')}/${lesson.title.replace(/\s+/g, '-')}`} key={ lesson.title } className='section-video'>
                        <div>
                            <h3>{ lesson.title }</h3>
                        </div>
                        <div className='not-started'></div>
                    </NavLink>
                ))}
            </div>
        </>
    )
}

export default Curso;
