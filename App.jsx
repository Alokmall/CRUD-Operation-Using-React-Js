import React from 'react';
// import Findcoder from "./Components/Findcoder"
// import{ BrowserRouter, Route, Routes} from "react-router-dom"
// import Explore from './Components/Explore';
// import Hire from './Components/Hire';
// import Challenge from './Components/Challenge';
// import Dev from './Components/Dev';
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

            {/* <BrowserRouter>
            <Findcoder/>
            <Routes>
                <Route element={<Explore/>}path='/explore'></Route>
                <Route element={<Hire/>} path='/hire'></Route>
                <Route element={<Dev/>}  path='/dev'></Route>
                <Route element={<Challenge/>}  path='/challenge'></Route>
            </Routes>
            </BrowserRouter> */}
            
        </div>
    );
};

export default App;