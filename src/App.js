import React from 'react';
import Header from './component/Header'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './component/home/Home';
import About from './component/about/About';
import Talk from './component/talk/Talk';


function App() {



  return (
    <div className="dark:text-sky-100 text-slate-700 lg:px-52 md:px-20 body">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/about" element={<About />} />
            <Route path="Talk" element={<Talk />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
