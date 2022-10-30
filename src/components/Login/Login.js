import React from 'react';
import { useState } from 'react'
import { Button } from '@mui/material';
import { Context } from '../../context/CartContext';
import { useContext } from 'react';
import FormLogin from '../FormLogin/FormLogin';
import "./Login.css"
import FormSign from '../FomSign/FormSign';

const Login=()=> {
    const cambiarLogSign=()=>{
        
        if(loguear){
            setLoguear(false)
        }else{
            setLoguear(true)
        }
    }
    const [loguear,setLoguear]=useState(false)
    const{loguearse,desloguearse,chekUser,logueado,userName,img}=useContext(Context)
const signOut=()=>{
desloguearse()
chekUser()
}
    const sign=()=>{
        loguearse()
        
       chekUser()
    }
    return (
        <div>
           {logueado ?<div className='centrado'>{ localStorage.setItem('userName',userName)}<h4>Hola {userName}</h4> <img  src={img} alt="" /> <Button onClick={signOut}>Desloguearse</Button> </div> : <><div className='centrado'>{ loguear ? <FormLogin cambiarLogSign={cambiarLogSign}/> : <FormSign cambiarLogSign={cambiarLogSign}/> } <Button className='btn__signGoogle'  onClick={sign}>Loguearse con Google</Button></div>   </>       } 

           
        </div>
    );
}

export default Login;