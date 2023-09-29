import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Layout from '../utils/Layout'

const Homepage = () => {
  
  const getData = async() =>{
    try {
      const response =  await axios.post("/api/user/get-user-info-by-id", {},
      {
        headers:{
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
    } catch (error) {}
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      <h1>Homepage</h1>
    </Layout>
  )
}

export default Homepage