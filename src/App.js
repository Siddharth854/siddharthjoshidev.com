import './App.css';
import { Route, Routes } from 'react-router-dom'
import CustomerRouters from './ROUTERS/CustomerRouters.jsx';


function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/*' element={<CustomerRouters/>}></Route>

      </Routes>

    </div>
    
  );
}

export default App;
