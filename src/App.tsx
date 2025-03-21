import Home from './pages/Home'
import './assets/styles.scss'
import Layout from './components/Layout';
import { AppProvider } from './context/AppContext';
import Registration from './pages/Registration';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserManagement from './pages/UserManagement';
import Profile from './pages/Profile';
import CourseManagement from './pages/CourseManagement';
import SubjectManagement from './pages/SubjectManagement';
import About from './pages/About';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className='app'>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/user-management" element={<UserManagement />} />
              <Route path="/course-management" element={<CourseManagement />} />
              <Route path="/subject-management" element={<SubjectManagement />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Layout>
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;
