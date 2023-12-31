import { useParams } from 'react-router-dom';
import courses from '../utils/cursos';
import './curso.css';
import { NavLink } from "react-router-dom";

const Curso = () => {

    const { id } = useParams();
    const course = courses.find((course) => course.title === id.replace(/-/g, ' '));
    const lessonsCompleted = course.lessons.filter((lesson) => lesson.complete).length;
    const totalLessons = course.lessons.length;
    const completionPercentage = totalLessons > 0 ? (lessonsCompleted / totalLessons) * 100 : 0;

    return (
        <>
            <div className='container curso-description'>
                <NavLink to="/" className="back-course">
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                        <path fill="#7325c1" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                    </svg>
                    <h4>Volver a cursos</h4>
                </NavLink>
                <div>
                    <div className='container-text'>
                        <h1>{ course.title }</h1>
                        <p>{ course.resume }</p>
                    </div>
                    <a className='link' href='#curso'>
                        Ver detalles del Curso <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#ffffff" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                    </a>
                </div>
                <img className='img-thumbnail' src={course.img} alt="" />
            </div>
            <div id='curso'>
                <div className='container-progress'>
                    <div className='progress'>
                        <span>{ completionPercentage }% completado</span>
                        <h4>Última actividad el 14 noviembre, 2023</h4>
                    </div>
                    <div className='container-bar'>
                        <div className='bar' style={{ width: `${ completionPercentage }%`}}></div>
                    </div>
                </div>
                <h2 className='title-content'>CONTENIDO DEL CURSO</h2>
                { course.lessons.map((lesson) => (
                    <NavLink to={`/cursos/${course.title.replace(/\s+/g, '-')}/${lesson.title.replace(/\s+/g, '-')}`} key={ lesson.title } className='section-video'>
                        <div>
                            <h3>{ lesson.title }</h3>
                        </div>
                        {
                            lesson.complete === false ? (
                                <div className='not-started'></div>
                            ) : (
                                <div className='finished-lesson'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                                        <path fill="#ffffff" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                                    </svg>
                                </div>
                            )
                        }
                    </NavLink>
                ))}
            </div>
        </>
    )
}

export default Curso;
