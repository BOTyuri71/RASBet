import React, { useState} from 'react';
import img_reg from '../../assets/form_register.jpg'
import DatePicker from 'react-date-picker';
import {Controller,useForm} from 'react-hook-form';
import {Register,Col1,Img1,Div1,Section1,Form1,Input1,Button1} from '../../styles/form'
import Header from '../../components/header/Header';
import axios from 'axios'



export default function Form() {

    const [emailReg,setEmail] = useState('')
    const [nomeReg,setNome] = useState('')
    const [passwordReg,setPassword] = useState('')
    const [dateReg, setDate] = useState(new Date())
    const [ccReg,setCC] = useState('')
    const [nifReg,setNif] = useState('')
    const [saldoReg,setSaldo] = useState('')
    const {control} = useForm()
   

    const handleSubmit = (event) => {
        event.preventDefault();
                
        axios.post(`http://localhost:9000/user/register`, 
        {nome: nomeReg,
        email: emailReg,
        password: passwordReg,
        nif: nifReg,
        nCC: ccReg,
        dataN: dateReg,
        saldo: saldoReg})
            .then(res => {
            console.log(res.data);
            })
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
                    <Input1 type="text" value={emailReg} onChange={e=> setEmail(e.target.value)} placeholder='E-mail'></Input1>
                    <Input1 type="text" value={nomeReg} onChange={e=> setNome(e.target.value)} placeholder='Nome (Primeiro e último)'></Input1>
                    <Input1 type="password" value={passwordReg} onChange={e=> setPassword(e.target.value)} placeholder='Palavra-passe'></Input1>
                    <Controller
                        control={control}
                        name='date-input'
                        render={({ field }) => (
                            <DatePicker
                                value={dateReg}
                                onChange={(e) => setDate(e.target.value)}
                                selected={field.value}
        />
    )}
    />
                    <Input1 type="text" value={ccReg} onChange={e=> setCC(e.target.value)} placeholder='Número do CC'></Input1>
                    <Input1 type="text" value={nifReg} onChange={e=> setNif(e.target.value)} placeholder='NIF'></Input1>
                    <Input1 type="text" value={saldoReg} onChange={e=> setSaldo(e.target.value)} placeholder='Saldo'></Input1>

                    <Button1 onClick={handleSubmit}>Concluir</Button1>
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