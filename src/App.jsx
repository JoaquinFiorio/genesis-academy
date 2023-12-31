import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cursos from './cursos/Cursos';
import Curso from './curso/Curso';
import CursoVideo from './curso-video/CursoVideo';

function App() {

  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Cursos />}/>
            <Route path="/cursos/:id" element={<Curso />}/>
            <Route path="/cursos/:id/:video" element={<CursoVideo />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
