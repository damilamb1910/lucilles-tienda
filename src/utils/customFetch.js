 const customFetch=(productos,stallTime=0,id,categoriaId)=>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            try{
if (productos){
    if(id){
        const produ=productos.find((producto)=>producto.id===id)
        resolve(produ)
    
    }else{
        resolve(productos)
    }
}
            }catch(err){
reject(err)
            }
            
               
        },stallTime)
        
    })
}

export default customFetch