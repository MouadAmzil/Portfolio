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
    <div className="  px-44 text-sky-100 body">
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
