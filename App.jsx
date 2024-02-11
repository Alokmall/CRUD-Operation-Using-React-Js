import React from 'react';
import{ BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './CRUD/Home';
import Createuser from './CRUD/Createuser';
import Users from './CRUD/Users';
import Editusers from './CRUD/Editusers';
const App = () => {
    return (
        <div>
           <BrowserRouter>
           <Home/>
           <Routes>
            <Route element={<Createuser/>} path="/"/>
            <Route element={<Users/>} path="/users"/>
            <Route element={<Editusers/>} path="/edit/:abc" />
           </Routes>
           </BrowserRouter>
        </div>
    );
};

export default App;
