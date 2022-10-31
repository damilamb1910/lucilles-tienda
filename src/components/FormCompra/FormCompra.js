import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState, useContext, useEffect } from 'react';
import './FormCompra.css'
import { Context } from '../../context/CartContext';







const FormCompra=({finalizar})=>{

  
useEffect(()=>{
  if(userEmail !==''){
    setEmail(userEmail)
  }
},[])


const {userEmail}=useContext(Context)

  const[email,setEmail]=useState('')
  const[nombre,setNombre]=useState('')
  const[apellido,setApellido]=useState('')
  const[formaDePago,setFormaDePago]=useState('Efectivo')
  const[numeroTarjeta,setNumeroTarjeta]=useState('')
  const [validar,setValidar]=useState(false)
   const [modalShow, setModalShow] = useState(false);
    const activarModal=()=>{
       setModalShow(true)
    }
    const handleClose=()=>{
        setModalShow(false)
    }
    const ahora=(e)=>{
     
        finalizar(nombre,apellido,email,numeroTarjeta,formaDePago)
        
        
    }
const[mostrarTarjeta,setMostrarTarjeta]=useState(false)

const activarTarjeta=(e)=>{
  e.target.value==="2" ?  setMostrarTarjeta(true) : setMostrarTarjeta(false)
}

const cambiarNombre=(e)=>{
  setNombre(e.target.value)
}

const cambiarApellido=(e)=>{
  setApellido(e.target.value)
}

const cambiarEmail=(e)=>{
  
  setEmail(e.target.value)

  
}

const cambiarFormaDePago=(e)=>{
  setFormaDePago(e.target.value)
}

const cambiarNumeroTarjeta=(e)=>{
  setNumeroTarjeta(e.target.value)
}

const check = (event) => {
  const form = event.currentTarget;
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
    
    
  }
  event.preventDefault();
  setValidar(true);
  
  
  
}; 
    return(

        
            
            
             <>
        <Button onClick={activarModal} >Terminar compra</Button>


        <Modal show={modalShow} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Ingresá tus datos para finalizar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={check} noValidate validated={validar}>
        <Form.Group name="nombre" onChange={cambiarNombre} className="mb-3"  controlId="validationCustom01">
        <Form.Label>Nombre</Form.Label>
        <Form.Control required type="text" placeholder="Ingrese nombre" />
        </Form.Group>
        <Form.Group className="mb-3" onChange={cambiarApellido} controlId="formBasicLastName">
        <Form.Label>Apellido</Form.Label>
        <Form.Control required type="text"  placeholder="Ingrese apellido" />
        </Form.Group>
      

        {
userEmail !=='' ?<Form.Group onChange={cambiarEmail} className="mb-3" controlId="formBasicEmail">
<Form.Label>Email</Form.Label><Form.Control plaintext  readOnly required    defaultValue={userEmail}  />
        <Form.Text className="text-muted">
          Le enviaremos su factura.
        </Form.Text>
      </Form.Group> : <Form.Group onChange={cambiarEmail} className="mb-3" controlId="formBasicEmail">
<Form.Label>Email</Form.Label><Form.Control  required type="email"  placeholder="Ingrese Email " />
        <Form.Text className="text-muted">
          Le enviaremos su factura.
        </Form.Text>
      </Form.Group>
        }
        
      <Form.Group onChange={cambiarFormaDePago} className="mb-3">
      <Form.Label>Seleccione forma de pago</Form.Label>
      <Form.Select onChange={activarTarjeta}  aria-label="Default select example">
      
      <option value="1">Efectivo</option>
      <option value="2">Tarjeta</option>
      </Form.Select>
        </Form.Group>

        {
          mostrarTarjeta && <>
          <Form.Group  onChange={cambiarNumeroTarjeta} className="mb-3" controlId="formBasicName">
          <Form.Label>Número de tarjeta</Form.Label>
          <Form.Control  className='text' required type="number" placeholder="Número de tarjeta" />
          </Form.Group> 
          </>
        }
        
      
      <Button onClick={ahora}  variant="primary" type="submit">
        Finalizar
      </Button>
      
    </Form>
        </Modal.Body>
        
      </Modal>
        </> 
    )
}

export default FormCompra