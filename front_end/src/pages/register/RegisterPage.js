import React, { useState, useEffect} from 'react';
import img_reg from '../../assets/form_register.jpg'
import DatePicker from 'react-date-picker';
import {Controller,useForm} from 'react-hook-form';
import {Register,Col1,Img1,Div1,Section1,Form1,Input1,Button1} from '../../styles/form'
import Header from '../../components/header/Header';
import axios from 'axios';



export default function Form() {

    const [emailReg,setEmail] = useState('')
    const [nomeReg,setNome] = useState('')
    const [passwordReg,setPassword] = useState('')
    const [dateReg, setDate] = useState(new Date());
    const [nifReg,setNif] = useState('')
    const {control} = useForm()

    const register = () => {
        axios.post('https://localhost:9000/apostador/create',{
            email : emailReg, 
            nome : nomeReg, 
            password : passwordReg, 
            date : dateReg, 
            nif : nifReg
        }).then((response) => {
            console.log(response);
        });
    };

    return (
        <div>
        <Header/>
        <Section1>
            <Div1>
            <Register>
            <Col1>
                <h2>Registo</h2>

                <Form1>
                    <Input1 type="text" onChange={(e) => {setEmail(e.target.value)}} placeholder='E-mail'></Input1>
                    <Input1 type="text" onChange={(e) => {setNome(e.target.value)}} placeholder='Nome (Primeiro e último)'></Input1>
                    <Input1 type="password" onChange={(e) => {setPassword(e.target.value)}} placeholder='Palavra-passe'></Input1>
                    <Controller
                        control={control}
                        name='date-input'
                        render={({ field }) => (
                            <DatePicker
                                onChange={(date) => field.setDate(date)}
                                selected={field.value}
        />
    )}
    />
                    <Input1 type="text" onChange={(e) => {setNif(e.target.value)}} placeholder='NIF'></Input1>

                    <Button1 className='btn' onClick={register}>Concluir</Button1>
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