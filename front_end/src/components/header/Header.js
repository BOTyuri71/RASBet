import React from "react";
import logo from '../../assets/logo.png';
import {NavLink} from 'react-router-dom';
import {Nav,Header1,H2,Img1} from '../../styles/header';

const Header = () =>{
    return(
        <Nav>
            <Header1>
                <div>
                <NavLink exact to='/login'><Img1 src={logo} width='120%'></Img1></NavLink>
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <NavLink style={{textDecoration:0,color:"#003001"}} exact to='/login'><H2>Login</H2></NavLink>
                    <NavLink style={{textDecoration:0,color:"#003001"}} exact to='/register'><H2>Registo</H2></NavLink>
                </div>
            </Header1>
        </Nav>
    ) 
}

export default Header;