
import React, {createContext, useEffect} from 'react'
import { useState } from 'react'
import { getAuth,signInWithPopup,GoogleAuthProvider,signOut,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth"
import swal from 'sweetalert';



export const Context= createContext([])

const CartContext=({children}) => {

    

    useEffect(()=>{
      
        chekUser()
        chekearDatosLocal()
        
    },[])
    
const [logueado,setlogueado]=useState(false)
    const auth=getAuth()
    const [user,setUser]=useState(false)
    const [userName,setUserName]=useState('')
    const [imgProfile,setImgProfile]=useState('')
    const [userEmail,setUserEmail]=useState('')
    const desloguearse=()=>{
        signOut(auth).then(()=>{
            setImgProfile('')
            setUserName('')
            setUser(false)
            setUserEmail('')
            localStorage.setItem("username",'')
    localStorage.setItem("photo",'')
        })
    }
   
const chekearDatosLocal=()=>{
    setUserName( localStorage.getItem("userName")) 
    setImgProfile(localStorage.getItem("photo"))
} 

 

const loguearEmail=(email,password)=>{
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
        setUserEmail(userCredential.user.email)
       setUserName(userCredential.user.email)
       setImgProfile("https://cdn-icons-png.flaticon.com/512/2919/2919600.png")
    })
    .catch((error)=>{
        const errorCode=error.code
        console.log(errorCode)
        if(errorCode==='auth/user-not-found'){
            swal({
                title: "ERROR",
                text: "El email no se encuentra registrado",
                icon: "error",
                button: "OK",
                timer:3000
              }) 

        }else if(errorCode==='auth/wrong-password'){
            swal({
                title: "ERROR",
                text: "La contraseña es incorrecta",
                icon: "error",
                button: "OK",
                timer:3000
              }) 
        }
    }).finally(chekUser())
}


const createUser=(email,password)=>{
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
        const user= userCredential.user
        console.log(user)
    })
    .catch((error)=>{
        console.log(email+password)
        const errorCode =error.code
        if(errorCode==='auth/invalid-email'){
            swal({
                title: "ERROR",
                text: "Email invalido",
                icon: "error",
                button: "OK",
                timer:3000
              }) 

        }else if(errorCode==='auth/email-already-in-use'){
            swal({
                title: "ERROR",
                text: "Ya existe un usuario con el email ingresado, favor elija otro.",
                icon: "error",
                button: "OK",
                timer:3000
              }) 
        }
        
console.log(errorCode)
    }).finally(chekUser())
}


    const chekUser=()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setlogueado(true)
               
            }else{
                setlogueado(false)
               
            }
        })
    }
    const loguearse=()=>{
        auth.languageCode="es"
        const provider=new GoogleAuthProvider()
        signInWithPopup(auth,provider).then((result)=>{
            setUserName(result.user.displayName)
            setImgProfile(result.user.photoURL)
            setUserEmail(result.user.email)
            
setUser({
    uid:result.user.id,
    username:result.user.displayName,
    profilePicutre: result.user.photoURL,
    email: result.user.email
})

        })
           
        
    }

const[listFav,setListFav]=useState([])

const sumar=(id)=>{
     setListFav([...listFav,{id}])
     
    } 
    const removeFav =(favorito)=>{
        const newListFav=listFav.filter(itemQuitar=>itemQuitar.id !== favorito.id)
        setListFav([...newListFav])
        
       }
    
    
    const [cart,setCart]=useState(()=>{
        const saveCart=window.localStorage.getItem("carro");
        if(saveCart){
            return JSON.parse(saveCart)
            
        }else{
            return []
        }
    })

    useEffect(()=>{
      
        window.localStorage.setItem("carro",JSON.stringify(cart))
        
        
    },[cart])


    
    const precioTotal=()=>{
        return cart.reduce((prev,act) => prev + act.quantity * act.item.precio,0)
    }

    const productosTotal=()=>cart.reduce((acumulador,productoActual)=>acumulador + productoActual.quantity,0)

    

    const añadir=(item,quantity)=>{
        
        const preguntar = cart.findIndex(pro=>pro.item.id ===item.id)
        if (preguntar!== -1){
           const newCart = cart.filter(item => item !== cart[preguntar])
          setCart([{item, quantity}, ...newCart])
          
        }else{
            setCart([...cart,{ item, quantity }]);
            
        } 
    }

    const removeItem =(item)=>{
        const newCart=cart.filter(itemQuitar=>itemQuitar !== item)
        setCart([...newCart])
       }
    
    const pregunta =(id)=> cart.find(product => product.id === id) ? true : false

    const clear=()=>{
        setCart([])
    }

    

    
    return(
        <>
        <Context.Provider value={{cart,añadir,pregunta,removeItem,clear,precioTotal,productosTotal,loguearse,user,desloguearse,chekUser,createUser,logueado,loguearEmail,sumar,listFav,removeFav,userName,imgProfile,userEmail}}>
        {children}
        </Context.Provider>
        
       
        </>
        
    )
}

export default CartContext
