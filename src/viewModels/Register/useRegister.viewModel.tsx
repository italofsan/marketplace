import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { RegisterFormData, registerScheme } from './register.scheme'

export const useRegisterViewModel = () => {
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

  const onSubmit = handleSubmit(
    ({ name, email, password, confirmPassword, phone }) => {}
  )

  return { control, onSubmit, errors }
}
