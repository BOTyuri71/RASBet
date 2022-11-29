import React, { useState,useRef, useEffect} from 'react';
import img_reg from '../../assets/form_register.jpg'
import DatePicker from 'react-date-picker';
import {Register,Col1,Img1,Div1,Section1,Form1,Input1,Button1} from '../../styles/form'
import Header from '../../components/header/Header';
import axios from 'axios'

export default function Form() {
    const errorRef = useRef();

    const [emailReg,setEmail] = useState('')
    const [nomeReg,setNome] = useState('')
    const [passwordReg,setPassword] = useState('')
    const [dateReg, setDate] = useState(new Date())
    const [ccReg,setCC] = useState('')
    const [nifReg,setNif] = useState('')
    const [errorMSg,setError] = useState('')

    useEffect(()=>{setError('')},[emailReg,nomeReg,passwordReg,dateReg,ccReg,nifReg])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(nomeReg != '' && passwordReg != '' && dateReg != '' && ccReg != '' && nifReg != '')            
         axios.post(`http://localhost:9000/user/register`, 
          {nome: nomeReg,
          email: emailReg,
          password: passwordReg,
          nif: nifReg,
          nCC: ccReg,
          dataN: dateReg})
            .then(res => {
            console.log(res.data);
            })
        else
        window.location.reload(false);    
        }

    return (
        <div>
        <Header/>
        <Section1>
            <Div1>
            <Register>
            <Col1>
                <h2>Registo</h2>

                <Form1>
                    <Input1 type="text" autoComplete='off' value={emailReg} onChange={e=> setEmail(e.target.value)} placeholder='E-mail' required></Input1>
                    <Input1 type="text" autoComplete='off' value={nomeReg} onChange={e=> setNome(e.target.value)} placeholder='Nome (Primeiro e último)' required></Input1>
                    <Input1 type="password" autoComplete='off' value={passwordReg} onChange={e=> setPassword(e.target.value)} placeholder='Palavra-passe' required></Input1>
                    <DatePicker
                        value={dateReg}
                        selected={dateReg}
                        onChange={ dateReg=> setDate(dateReg) }
                        name="startDate"
                        dateFormat="yyyy/MM/dd"
                        required
                    />
                    <Input1 type="text" autoComplete='off' value={ccReg} onChange={e=> setCC(e.target.value)} placeholder='Número do CC' required></Input1>
                    <Input1 type="text" autoComplete='off' value={nifReg} onChange={e=> setNif(e.target.value)} placeholder='NIF' required></Input1>
                    <p ref={errorRef} aria-live="assertive">{errorMSg}</p>
                    <p>Já tem uma conta?<br />
                            <span>
                                <a href='/login'>Entre!</a>
                            </span>
                          </p>

                    <Button1 onClick={handleSubmit} link='/register'>Concluir</Button1>
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