import React from 'react'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import EmailIcon from '@mui/icons-material/Email';
import { TextField } from '@mui/material';
import { Input } from '@chakra-ui/react';

const Registro = () => {
  return (
  <>
  <div>
    <div>
      <div>
        <AppRegistrationIcon sx={{ fontSize: 200 }}/>
      </div>

      <form action="">

        <TextField id='' label='Nombres' variant='outlined'/>
        <TextField id='' label='Apellidos' variant='outlined'/>
        <EmailIcon sx={{ fontSize: 60 }}/><TextField id='' label='Correo' type='email' variant='outlined'/>
        <Input placeholder='Select Date and Time' sx={{ fontSize: 18 }} type='datetime-local'/>

      </form>
    </div>
  </div>
  </>
  )
}

export default Registro