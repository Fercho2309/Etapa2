import { Button, Link, TextField } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React from 'react'


const Login = () => {
  return (
    <>
    <div>   
        <div>
            <div>
                <AccountCircleIcon sx={{ fontSize: 200 }}/>
            </div>
            <h1>LOGIN</h1>
        </div>

        <form action="">

            <PersonOutlineOutlinedIcon sx={{ fontSize: 60 }}/><TextField label='Usuario' variant='outlined'/>
            <LockOutlinedIcon sx={{ fontSize: 60 }}/><TextField label='Contraseña' type='password' variant='outlined'/>  
            <Button variant='contained'>INGRESE</Button>
            
        </form>
        <Link href='registro' underline='hover'>REGISTRO</Link>
        <Link href='password' underline='hover'>¿Olvido Contraseña?</Link>
    </div>
    </>
  )
}

export default Login