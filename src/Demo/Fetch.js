import { useEffect, useState } from "react"
export default function Fetch() {
    const [user, setUser] = useState([]); useEffect(() => { 
        fetch('https://jsonplaceholder.typicode.com/users') 
        .then(res => res.json()) 
        .then(res => setUser(res)) 
    }) 
    console.log(user)
  return (
    <div className="main">
        {user.map(u => ( 
            <div>{u.name}&nbsp;-&nbsp;{u.id}&nbsp;-&nbsp;{u.email}</div> 
        ))}
    </div>
  )
}
