import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Import Css
import './apps.scss';
import './App.css';
import './Assets/css/materialdesignicons.min.css';
import './Assets/css/colors/default.css';


// Include Routes 
import routes from './routes.js';

function App() {

  return ( 
    <Router>  
      <Layout>
        <Routes>
          {routes.map((route, idx) =>
            route.isWithoutLayout ? (
              <Route exact path="/" element={< route.element />} key={idx} />
            ) : ( 
              <Route path={route.path} exact element={<route.element />} key={idx} />
            )
          )}
        </Routes>
      </Layout>
    </Router>
  );
}


export default App;
