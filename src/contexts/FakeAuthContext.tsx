import React, { createContext, useContext, useReducer } from "react"
import IUser from "../models/user"

type AuthState = {
  user: IUser | null
  isAuthenticated: boolean
}

type AuthAction = {
  type: "login"
  payload: IUser
}

interface IAuthContext extends AuthState {
  login: (username: string, password: string) => void
}

const FAKE_USER: IUser = {
  username: "admin",
  password: "admin",
}

const AuthContext = createContext<IAuthContext | null>(null)

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
}

function reducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case "login":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      }
  }
}

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  )

  function login(username: string, password: string) {
    if (username === FAKE_USER.username && password === FAKE_USER.password) {
      dispatch({ type: "login", payload: FAKE_USER })
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): IAuthContext {
  const context = useContext(AuthContext)
  if (!context) throw new Error("AuthContext was used outside of AuthProvider")
  return context
}

export { AuthProvider, useAuth }
