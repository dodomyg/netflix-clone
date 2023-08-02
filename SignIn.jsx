// eslint-disable-next-line no-unused-vars
import { createUserWithEmailAndPassword } from 'firebase/auth'
// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react'
import { Link,useNavigate} from 'react-router-dom'
import { auth } from '../../Firebase'


function SignIn() {
   
    const [user,setUser]=useState(false)
    const navigate = useNavigate()
    const [email,setMail]=useState('')
    const [pw,setPw]=useState('')
    const signUp=async(e)=>{
        e.preventDefault();
       await createUserWithEmailAndPassword(auth,email,pw).then((userDetails)=>{
            console.log(userDetails)
        })
        setUser(true)
        if(user){
        navigate("/")
        }
    }

    
  return (
    <>
    <div className='w-full h-screen'>
      <img className='hidden sm:block absolute w-full h-full object-cover ' src='https://assets.nflxext.com/ffe/siteui/vlv3/d7af077c-af5a-4055-8f9a-740a43588583/95bae10c-9773-4447-af4e-612a244231bd/IN-en-20230717-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='' />
      <div className=' bg-black/50 fixed top-0 left-0 h-screen w-full'></div>
      <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/80 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
                <h1 className='font-bold text-3xl'>Sign Up</h1>
                <form className='w-full flex flex-col py-4' onSubmit={signUp}>
                    <input className='p-3 my-2 bg-gray-700 rounded' type='email' id='email' placeholder='Email' onChange={(e)=>
                        setMail(e.target.value)
                    }  />
                    <input className='p-3 my-2 bg-gray-700 rounded' type='password' id='email' placeholder='Password' onChange={(e)=>
                        setPw(e.target.value)
                    }/>
                    <button type='submit' className='bg-red-600 py-3 my-4 rounded font-bold'>Sign Up</button>
                    <div className='my-1 flex justify-between text-sm text-gray-400 items-center '>
                        <p><input className='mx-1' type='checkbox' />Remember Me</p>
                        <p>Need help?</p>
                    </div>
                    <div className='text-center my-3'>
                        <p className='text-gray-400'>Already subscribed to Netflix?<Link to='/signin' ><span className='text-white cursor-pointer font-bold'> Sign In</span></Link></p>
                    </div>
                </form>
            </div>
        </div>
      </div>
      </div>
    </>
    
  )
}

export default SignIn

