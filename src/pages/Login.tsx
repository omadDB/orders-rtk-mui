import { FormEvent, useEffect, useState } from "react"
import { useAuth } from "../contexts/FakeAuthContext"
import { useNavigate } from "react-router-dom"

function Login() {
  const { isAuthenticated, login } = useAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  useEffect(() => {
    if (isAuthenticated) navigate("/")
  }, [isAuthenticated, navigate])

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (username && password) login(username, password)
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input
          type="text"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit">Log in</button>
    </form>
  )
}

export default Login
