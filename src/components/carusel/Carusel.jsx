import React, { useEffect, useRef, useState } from 'react'
import Home from './Home'


export default function Carusel() {
    const name = useRef()
    const email = useRef()
    const password = useRef()
    const [showHome, setSHowHome] = useState(false)
    const [show, setShow] = useState(false)
    const localSignUp = localStorage.getItem("signUp")
    const localEmail = localStorage.getItem("email")
    const localName = localStorage.getItem('name')
    const localPassword = localStorage.getItem('password')
   



    useEffect(() => {
       if(localSignUp){
        setSHowHome(true)
       }
       if (localEmail) {
        setShow(true)
       }
    },[])

     const handleClick=()=>{
        if(name.current.value&&email.current.value&&password.current.value){
            localStorage.setItem("name",name.current.value)
            localStorage.setItem("email",email.current.value)
            localStorage.setItem("password",password.current.value)
            localStorage.setItem("signUp",email.current.value)
            alert("Akkaunt muvaffaqiyatli yaratildi!")
            window.location.reload()
        }
       
     }


     const handleSignIn = () =>{
     if(email.current.value==localEmail&&password.current.value==localPassword){
           localStorage.setItem("signUp",email.current.value)
           window.location.reload()
     } else{
         alert("Iltimos to'g'ri malumotni kiriting")
     }
     }
  



     
  return (

   <div>
    {showHome? <Home />:
    (show?
       <div className='carusel'>
        <h1> HELLO {localName}</h1>
            <form>
               <h1>HELLO {localName}</h1>
                <input className='inp2' type="text" placeholder='Email' ref={email} />
                <br />
                <input className='inp3' type="number" placeholder='Password' ref={password} />
                <br />
                <button className='btn' onClick={handleSignIn}>Sign In</button>
            </form>
       </div>
       :
       <div className='carusel'>
       <h1> HELLO {localName}</h1>
           <form>
               <input className='inp1' type="text" placeholder='Name' ref={name} />
               <br />
               <input className='inp2' type="text" placeholder='Email' ref={email} />
               <br />
               <input className='inp3' type="number" placeholder='Password' ref={password} />
               <br />
               <button className='btn' onClick={handleClick}>Sign Up</button>
           </form>
      </div>)
    }
   </div> 
  )
}
