import swal from 'sweetalert'
import { useState } from 'react'
import ItemListComprasContainer from '../ItemListComprasContainer/ItemListComprasContainer'
import { Spinner } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const MisCompras=()=>{
    const [show, setShow] = useState(true)
    const [id,setId]=useState(null)
    
 const close=()=>{
  setShow(false)
 }
const handleOpen=()=>{
    setShow(true)
}
   const handleClose = () => {
   

    if(id===null) {

      swal({
        title: "ERROR",
        text: "Ingrese un ID válido.",
        icon: "error",
        button: "OK",
        timer:3000
      }) 
    } else{
      setLoading(false)
      setShow(false)
      cambiarId()
    }
};
  
const [loading,setLoading]=useState(true)
    const [idCompra,setIdCompra]=useState()

    const obtenerId=(e)=>{
setId(e.target.value)
    }
    
    const cambiarId=()=>{
        setIdCompra(id)
      }
    
    return(
       
<>
<Button onClick={handleOpen}>Ingresar ID</Button>
<Modal
        show={show}
        onHide={close}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Mis compras</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group onChange={obtenerId} className="mb-3" controlId="formBasicEmail">
        <Form.Label>Ingrese su ID de compra</Form.Label>
        <Form.Control type="email" placeholder="ID de compra" />
        <Form.Text className="text-muted">
          Es el código que se le brindó al finalizar su compra.
        </Form.Text>
      </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary"  onClick={handleClose}>
            Ingresar
          </Button>
          
        </Modal.Footer>
      </Modal>

         { loading ? <Spinner/> :  <ItemListComprasContainer   idCompra={idCompra}/>
          } 
          
</>

        
        
    )
}
export default MisCompras