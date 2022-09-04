import { BrowserRouter as BrowserRouter, Router, Route, Routes } from "react-router-dom";
import './App.css';
import Main from './components/Main';


function App() {
  return (
    /* <div>
       <Main />
       <div>
         <Route path="/" component={Main} exact={true} />
       </div>
     </div>
 */
    <div className='App'>
      <BrowserRouter>
        <Main />
        <Routes>
          <Route path="/" component={Main} exact={true}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}



export default App;


