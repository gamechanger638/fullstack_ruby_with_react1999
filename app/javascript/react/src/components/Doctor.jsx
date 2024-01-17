import React from 'react'

const Doctor = () => {
  return (
    <>
    <TextField variant="standard" label="Username" />
    <TextField variant="outlined" label="Email" type="email" />
    <TextField variant="filled" label="Password" type="password" />
    </>
  )
}

export default Doctor