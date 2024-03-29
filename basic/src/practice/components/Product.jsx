import React,{useState,useEffect} from 'react'

export default function Product() {
    const [count,setCount]=useState(0);
    const [products,setShowProducts]=useState([]);
    const [checked,setChecked]=useState(false);
    const handleChange = ()=>{
        setChecked((prev)=>!prev);
    }
    useEffect(()=>{
        fetch(`data/${checked ? 'sale_products':'products'}.json`)
        .then((res)=>res.json())
        .then((data)=>{
            console.log('got data');
            setShowProducts(data);
        });
        return ()=>{
            console.log('cleaned!')
        }
    },[checked])


  return (
    <>
        <input id = "checkbox" type="checkbox" value={checked} onChange={handleChange}></input>
        <label htmlFor="checkbox">Show Only On Sales</label>
        <ul>
            {products.map((product)=>(
                <li key={product.id}>
                    <article>
                        <h2>{product.name}</h2>
                        <p>{product.price}</p>
                    </article>
                </li>
            ))}
        </ul>
        <button onClick={()=>setCount((prev)=>prev+1)}>{count}</button>
    </>
  )
}
