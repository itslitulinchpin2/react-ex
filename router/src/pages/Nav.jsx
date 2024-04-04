import React from 'react'
import { useNavigate , Link} from 'react-router-dom'
export default function Nav() {
    const navigate = useNavigate();
    const goHome = ()=>{
    navigate("/")
    }
  return (
    <div>
      <Link to = '/videos'>Go to Videos Page</Link>
        <Link to = '/'>Go home</Link>
    </div>
  )
}
