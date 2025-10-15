import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useRegisterMutation } from '../../shared/queries/auth/use-register-mutation'
import { RegisterFormData, registerScheme } from './register.scheme'

export const useRegisterViewModel = () => {
  const userRegisterMutation = useRegisterMutation()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerScheme),
    defaultValues: {
      name: 'Ítalo Santos',
      email: 'italo.santos@example.com',
      password: '123123',
      confirmPassword: '123123',
      // phone: '',
    },
  })

  const onSubmit = handleSubmit(async (userData) => {
    const { confirmPassword, ...registerData } = userData
    await userRegisterMutation.mutateAsync(registerData)
  })

  return { control, onSubmit, errors }
}
