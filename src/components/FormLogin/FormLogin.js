import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Context } from '../../context/CartContext';
import { useContext } from 'react';
import swal from 'sweetalert'

import React from 'react';
const FormLogin=({cambiarLogSign})=> {
const[email,setEmail]=useState(null)
const[password,setPassword]=useState(null)
    const{loguearEmail}=useContext(Context)
const pasar=(e)=>{
if(e.target.id==="formBasicEmail"){
    setEmail(e.target.value)
}else if(e.target.id==="formBasicPassword") {
    setPassword(e.target.value)
}
    
}
const handleClick=()=>{
    cambiarLogSign()
}


const pasarForm=()=>{
    if (email && password){
        loguearEmail(email,password)
    }else{
        swal({
            title: "ERROR",
            text: "Ingrese valores.",
            icon: "error",
            button: "OK",
            timer:3000
          }) 
    }
}
    
    return (
        <>

<h4>Inicia sesión</h4>
<h5>¿No tienes usuario? <Button onClick={handleClick}>Crear un usuario</Button> </h5>

            <Form>
      <Form.Group className="mb-3" onChange={pasar} controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" onChange={pasar} controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <Button onClick={pasarForm} variant="primary" >
        Iniciar sesión
      </Button>
    </Form>
        </>
    );
}

export default FormLogin;