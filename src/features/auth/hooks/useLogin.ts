import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useDispatch } from 'react-redux'
import { loginSchema } from '../schemas/login.schema'
import { loginSuccess } from '../stores/authSlice'
import { setAlert } from '../../../stores/alertSlice'
import type { LoginSchema } from '../schemas/login.schema'
import type { AppDispatch } from '../../../stores'

interface User {
  id: string
  name: string
  email: string
}

export function useLogin() {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const togglePassword = () => setShowPassword(prev => !prev)

  const onSubmit = async (values: LoginSchema) => {    
    try {
      setIsLoading(true)
      
      const DUMMY_EMAIL = "admin@gmail.com"
      const DUMMY_PASSWORD = "Admin123!"

      await new Promise(resolve => setTimeout(resolve, 800))
      
      if ( values.email === DUMMY_EMAIL && values.password === DUMMY_PASSWORD) {
        const dummyUser: User = {
          id: "1",
          name: "Abdul Rahman",
          email: DUMMY_EMAIL,
        }
        
        const dummyToken = "dummy-token-123"
        
        dispatch(
          loginSuccess({
            user: dummyUser,
            token: dummyToken,
          })
        )
        
        localStorage.setItem("auth", JSON.stringify({
          user: dummyUser,
          token: dummyToken,
        }))
        
        dispatch(setAlert({
          message: "Login successful",
          type: "success",
        }))

        navigate("/dashboard", { replace: true })
      
      } else {
        throw new Error("Invalid email or password")
      }
    
    } catch (err) {
      dispatch(setAlert({
        message: err instanceof Error ? err.message : "Login failed",
        type: "error",
      }))
    } finally {
      setIsLoading(false)
    }
  }

  return {
    form,
    showPassword,
    togglePassword,
    isLoading,
    onSubmit,
  }
}
