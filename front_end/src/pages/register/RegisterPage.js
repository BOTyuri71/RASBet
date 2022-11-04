import React, { useState, useEffect} from 'react';
import img_reg from '../../assets/form_register.jpg'
import DatePicker from 'react-date-picker';
import {Controller,useForm} from 'react-hook-form';
import {Register,Col1,Img1,Div1,Section1,Form1,Input1,Button1} from '../../styles/register'



export default function Form() {
    const [value, onChange] = useState(new Date());
    const {control,register,handleSubmit} = useForm()
    const onSubmit = data => {console.log(data);
                                useEffect(() => {
                                    fetch("/home",{
                                        method: "POST",
                                        headers: {
                                            'Content-type': "application/json"
                                        },
                                        body: JSON.stringify(data)
                                    })
                                .then(res => res.json())
                                .then(data => console.log('Sent data do backend'))
                                },[])
                            }
    return (
        <Section1>
            <Div1>
            <Register>
            <Col1>
                <h2>Registo</h2>

                <Form1 className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <Input1 type="text" {...register("email")} placeholder='E-mail'></Input1>
                    <Input1 type="password" {...register("password")} placeholder='Palavra-passe'></Input1>
                    <Controller
                        control={control}
                        name='date-input'
                        render={({ field }) => (
                            <DatePicker
                                onChange={(date) => field.onChange(date)}
                                selected={field.value}
        />
    )}
    />
                    <Input1 type="text" {...register("nif")} placeholder='NIF'></Input1>

                    <Button1 className='btn'>Concluir</Button1>
                </Form1>
            </Col1>
            <div className='col-2'>
                <Img1 src={img_reg}></Img1>
            </div>
            </Register>
            </Div1>
        </Section1>
    )
}