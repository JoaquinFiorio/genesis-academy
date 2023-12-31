import courses from "../utils/cursos";
import { useParams } from 'react-router-dom';

const CursoVideo = () => {

    const { id, video } = useParams();
    const course = courses.find((course) => course.title === id.replace(/-/g, ' '));
    const lesson = course.lessons.find((lesson) => lesson.title === video.replace(/-/g, ' '));
    
    return (
        <>
            <div style={{ positon: 'relatve', paddingTop: '56.25%' }}>
                <iframe src={ lesson.iframe } loading="lazy" style={{ border: 'none', position: 'absolute', top: 0, height: '100%', width: '100%' }} allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowFullScreen={ true }></iframe>
            </div>
        </>
    )
}

export default CursoVideo;
