import './cursos.css';
import courses from '../utils/cursos';
import { NavLink } from "react-router-dom";

const Cursos = () => {

    return (
        <>
            <div className="container">
                <div className='navBar'>
                    <img src="/img/icon-academy.png" alt="" />
                </div>
                <div className="background"></div>
                <ul className="grid-view">
                    {courses.map((curso) => (
                        <li key={ curso.id } className="grid-item">
                            <NavLink to={`/cursos/${curso.title.replace(/\s+/g, '-')}`} title={curso.title} className="img-link">
                                <div className="inscription">Inscrito</div>
                                <img
                                    data-lazyloaded="1"
                                    src={ curso.img }
                                    width="280"
                                    height="160"
                                    className=""
                                    alt=""
                                    decoding="async"
                                    data-ll-status="loaded"
                                />
                            </NavLink>
                            <div className="description-course">
                                <div className="lessons">{ curso.lessons.length } Lessons</div>
                                <h2 className="course-title">
                                    <NavLink title={ curso.title } to={`/cursos/${curso.title.replace(/\s+/g, '-')}`}>
                                        { curso.title }
                                    </NavLink>
                                </h2>
                                <div className="course-resume">{ curso.resume }</div>
                                <div className="course-price">
                                    <span className="">{curso.price}</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Cursos
