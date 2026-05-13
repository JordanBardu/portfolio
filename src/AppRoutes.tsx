import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Course from './pages/Course';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={<Course />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
