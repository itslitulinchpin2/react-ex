import { useState,useEffect } from 'react';
export default function useProducts({salesOnly}){
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(undefined);
    const [products,setShowProducts]=useState([]);

    useEffect(()=>{
        setLoading(true);
        setError(undefined);

        fetch(`data/${salesOnly ? 'sale_products':'products'}.json`)
        .then((res)=>{
            return res.json()})
        .then((data)=>{
            console.log('got data');
            setShowProducts(data);
        }).catch((e)=>setError('에러가 발생!'))
        .finally(()=>setLoading(false));

        return ()=>{
            console.log('cleaned!')
        }
    },[salesOnly])

    return [loading,error,products];
}