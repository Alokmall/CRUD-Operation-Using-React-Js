import React from 'react';
import style from './home.module.css'
import { Link } from "react-router-dom";

const Home = () => {
    return (
            <div id={style.nav}>

            <Link to="/">Createuser</Link>
            <Link to="users">Users</Link>
        
            
        </div>
       
    );
};

export default Home;