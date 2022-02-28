import { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: false,
    expiresAt: null,
    userInfo: {},
  })

  const setAuthInfo = ({ token, userInfo, expiresAt}) => {
    setAuthState({
      token,
      userInfo,
      expiresAt
    })
  }

  return (
    <AuthContext.Provider
      value={{
        authState,
        setAuthState: authInfo => setAuthInfo(authInfo)
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export {AuthContext, AuthProvider }
