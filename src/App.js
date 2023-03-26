import './App.css';
import React, { Suspense }  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Import Css
import './apps.scss';
import './Assets/css/materialdesignicons.min.css';
import './Assets/css/colors/default.css';



// Include Routes 
import routes from './routes.js';

function WithLayout(WrappedComponent) {
  return class extends React.Component {  
    render() {
      return <Layout>
        <WrappedComponent></WrappedComponent>
      </Layout>
    }
  };
}

function App() {
  const Loader = () => {
    return (
      <div id="preloader">
          <div id="status">
              <div className="spinner">
                  <div className="double-bounce1"></div>
                  <div className="double-bounce2"></div>
              </div>
          </div>
      </div>
    );
  }

  return (
    <Router>  
      <Suspense fallback={<Loader />}>
        <Routes>
          {routes.map((route, idx) =>
            route.isWithoutLayout ? (
              <Route exact path="/" element={< route.HomePage />} key={idx} />
            ) : (
              <Route path={route.path} exact element={<route.element />} key={idx} />
            )
          )}
        </Routes>
      </Suspense>
    </Router>
  );
}


export default App;
