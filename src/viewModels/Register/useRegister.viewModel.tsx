import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useRegisterMutation } from '../../shared/queries/auth/use-register-mutation'
import { useUserStore } from '../../shared/store/userStore'

import { RegisterFormData, registerScheme } from './register.scheme'

export const useRegisterViewModel = () => {
  const userRegisterMutation = useRegisterMutation()

  const { setSession, user } = useUserStore()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerScheme),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
    },
  })

  const onSubmit = handleSubmit(async (userData) => {
    const { confirmPassword, ...registerData } = userData
    console.log(registerData)

    const mutationResponse = await userRegisterMutation.mutateAsync(
      registerData
    )

    setSession({
      refreshToken: mutationResponse.refreshToken,
      token: mutationResponse.token,
      user: mutationResponse.user,
    })
  })

  console.log(user)

  return { control, onSubmit, errors }
}
