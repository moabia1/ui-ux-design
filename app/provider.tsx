"use client";
import React, { useEffect } from 'react'
import axios from "axios"

const Provider = ({children}:any) => {

  const createNewUser = async () => {
    const result = await axios.post('/api/user',{});
    console.log(result.data)
  }

  useEffect(() => {
    createNewUser()
  }, [])
  
  return (
    <div>{children}</div>
  )
}

export default Provider