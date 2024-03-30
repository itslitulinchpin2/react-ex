import React,{useState,useEffect} from 'react'
import useProducts from '../../hooks/use-products';

export default function Product() {
    const [count,setCount]=useState(0);
   
    const [checked,setChecked]=useState(false);
   
    const [loading,error,products]=useProducts({salesOnly:checked});
    const handleChange = ()=>{
        setChecked((prev)=>!prev);
    }
    

    if(loading) return <p>loading...</p>
    if(error) return <p>error..</p>

  return (
    <>
        <input id = "checkbox" type="checkbox" value={checked} onChange={handleChange}></input>
        <label htmlFor="checkbox">Show Only On Sales</label>
        {<ul>
            {products.map((product)=>(
                <li key={product.id}>
                    <article>
                        <h2>{product.name}</h2>
                        <p>{product.price}</p>
                    </article>
                </li>
            ))}
        </ul>}
        <button onClick={()=>setCount((prev)=>prev+1)}>{count}</button>
    </>
  )
}
