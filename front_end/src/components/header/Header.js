import React from "react";
import logo from '../../assets/logo.svg';
import {NavLink, withRouter} from 'react-router-dom';
import {Nav,Header1,H2,Img1,NavLink1} from '../../styles/header';

const Header = () =>{
    return(
        <Nav>
            <Header1>
                <div>
                    <NavLink style={{textDecoration:0,color:"#003001"}} exact to='/home'><H2>RasBet</H2></NavLink>
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <NavLink style={{textDecoration:0,color:"#003001"}} exact to='/login'><H2>Login</H2></NavLink>
                    <NavLink style={{textDecoration:0,color:"#003001"}} exact to='/register'><H2>Registo</H2></NavLink>
                    <NavLink style={{textDecoration:0,color:"#003001"}} exact to='/profile'><H2>Perfil</H2></NavLink>
                </div>
            </Header1>
        </Nav>
    ) 
}

export default Header;