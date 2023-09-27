import React, { useEffect } from 'react'
import axios from 'axios'
import Layout from '../utils/Layout'

const Homepage = () => {

  const getData = () =>{
    try {
      const response = axios.post("/api/user/get-user-info-by-id", {},
      {
        headers:{
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
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