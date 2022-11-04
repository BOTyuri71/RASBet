import React, { useState } from 'react';
import img_reg from '../../assets/form_register.jpg'
import {Register,Col1,Img1,Div1,Section1,Form1,Input1,Button1} from '../../styles/form'
import Header from '../../components/header/Header';

export default function Form() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

  return (
    <div>
    <Header/>
    <Section1>
          <Div1>
              <Register>
                  <Col1>
                      <h2>Bem-vindo</h2>

                      <Form1>
                          <Input1 type="text" onChange={(e) => {setEmail(e.target.value)}} placeholder='E-mail'></Input1>
                          <Input1 type="password" onChange={(e) => {setPassword(e.target.value)}} placeholder='Palavra-passe'></Input1>
                          <Button1 className='btn'>Aceder</Button1>
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