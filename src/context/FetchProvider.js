import { createContext, useState } from 'react'
import axios from 'axios'

const FetchContext = createContext()

const FetchProvider = ({ children }) => {
  const authAxios = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  })

  return (
    <FetchContext.Provider value={{ authAxios }}>
      {children}
    </FetchContext.Provider>
  )
}

export { FetchContext, FetchProvider }
