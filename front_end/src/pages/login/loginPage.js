import React, { useState, useRef, useEffect } from 'react';
import img_reg from '../../assets/form_register.jpg'
import {Register,Col1,Img1,Div1,Section1,Form1,Input1,Button1} from '../../styles/form'
import Header from '../../components/header/Header';
import axios from 'axios'

export default function Form() {
    const errorRef = useRef();

    const [emailLog,setEmail] = useState('')
    const [passwordLog,setPassword] = useState('')
    const [errorMSg,setError] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
                
        axios.post(`http://localhost:9000/user/register`, 
        {email: emailLog,
        password: passwordLog,  
        })
    }

    useEffect(()=>{setError('')},[emailLog,passwordLog])
    return (
        <div>
        <Header/>
        <Section1>
          <Div1>
              <Register>
                  <Col1>
                      <h2>Bem-vindo</h2>

                      <Form1>
                          <Input1 type="text" autoComplete='off' value={emailLog} onChange={(e) => {setEmail(e.target.value)}} placeholder='E-mail' required></Input1>
                          <Input1 type="password" autoComplete='off' value={passwordLog} onChange={(e) => {setPassword(e.target.value)}} placeholder='Palavra-passe' required></Input1>
                          <Button1 className='btn'>Aceder</Button1>
                          <p ref={errorRef} aria-live="assertive">{errorMSg}</p>
                          <p>Não tem conta?<br />
                            <span>
                                <a href='/register'>Registe-se!</a>
                            </span>
                          </p>
                      </Form1>
                  </Col1>
                  <div className='col-2'>
                      <Img1 src={img_reg}></Img1>
                  </div>
              </Register>
          </Div1>
        </Section1>
        </div>
  )
}