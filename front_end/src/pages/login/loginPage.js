import React, { useState } from 'react';
import img_reg from '../../assets/form_register.jpg'
import {Register,Col1,Img1,Div1,Section1,Form1,Input1,Button1} from '../../styles/form'
import Header from '../../components/header/Header';
import AuthContext from "../../context/AuthContext";

export default function Form() {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const { signIn } = React.useContext(AuthContext);

    return (
        <div>
        <Header/>
        <Section1>
          <Div1>
              <Register>
                  <Col1>
                      <h2>Bem-vindo</h2>

                      <Form1>
                          <Input1 type="text" autoComplete='off' value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder='E-mail' required></Input1>
                          <Input1 type="password" autoComplete='off' value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder='Palavra-passe' required></Input1>
                          <Button1 onClick={() => {email!='' && password!='' ? signIn(email, password) : alert("Necessita de introduzir credenciais!")}}>Aceder</Button1>
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