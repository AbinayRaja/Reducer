
import Home from './components/Home';
import "../src/App.css"
import Cart from './components/Cart';
import Headers from './components/Headers';
import { BrowserRouter , Route, Routes } from "react-router-dom";
function App() {
  return (

   
    <BrowserRouter>
    <Headers />
    <div className='App'>
    <Routes >
     <Route path='/' Component={Home} exact/>
      <Route path='cart' Component={Cart} />
       </Routes>
       </div>
      </BrowserRouter>
 


  );
}

export default App;
