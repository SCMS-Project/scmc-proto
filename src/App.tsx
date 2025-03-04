import Home from './pages/Home'
import './assets/styles.scss'
import './assets/app.scss'
import Layout from './components/Layout';
import { AppProvider } from './context/AppContext';
import Registration from './pages/Registration';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className='app'>
          <Layout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/registration' element={<Registration />} />
            </Routes>
          </Layout>
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;
