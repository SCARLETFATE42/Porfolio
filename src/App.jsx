import { Box, Text } from '@mantine/core'
import  Navbar  from './Sections/Navbar'
import React from 'react'
import './App.css'

const App = () => {
  return (
    <>
    <Box className='bg-gray-900 bg-cover bg-no-repeat bg-center bg-fixed h-screen'> 
      <Navbar />
    </Box>
    </>
  )
}

export default App
