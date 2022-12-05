import React, { useState} from 'react';
import img_reg from '../../assets/form_register.jpg'
import DatePicker from 'react-date-picker';
import {Register,Col1,Img1,Div1,Section1,Form1,Input1,Button1} from '../../styles/form';
import Header from '../../components/header/Header';
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Form() {

    const [nome,setNome] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [data, setDate] = useState(new Date())
    const [nCC,setCC] = useState('')
    const [nif,setNif] = useState('')
    const { signUp } = React.useContext(AuthContext);

    const registo = async () =>{
        var dataN;
        dataN = new Date();
        dataN = data.toISOString().slice(0, 19).replace('T', ' ');
        const params = {nome,email,password,dataN,nCC,nif}
        const response = await signUp(params)
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
                    <Input1 type="text" autoComplete='off' value={email} onChange={e=> setEmail(e.target.value)} placeholder='E-mail' required></Input1>
                    <Input1 type="text" autoComplete='off' value={nome} onChange={e=> setNome(e.target.value)} placeholder='Nome (Primeiro e último)' required></Input1>
                    <Input1 type="password" autoComplete='off' value={password} onChange={e=> setPassword(e.target.value)} placeholder='Palavra-passe' required></Input1>
                    <DatePicker
                        value={data}
                        selected={data}
                        onChange={ data=> setDate(data) }
                        dateFormat="YYYY-MM-DD"
                        required
                    />
                    <Input1 type="text" autoComplete='off' value={nCC} onChange={e=> setCC(e.target.value)} placeholder='Número do CC' required></Input1>
                    <Input1 type="text" autoComplete='off' value={nif} onChange={e=> setNif(e.target.value)} placeholder='NIF' required></Input1>
                    <p>Já tem uma conta?<br />
                            <span>
                                <a href='/login'>Entre!</a>
                            </span>
                          </p>

                    <Button1 onClick={() => {
                        if (nome!='' && email!='' && password!='' && data!='' && nCC!='' && nif!=''){
                            registo()
                        }
                        else alert("Todos os campos são obrigatórios!")}}>Concluir</Button1>
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