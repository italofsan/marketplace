import { useState } from 'react'
import { CameraType } from 'expo-image-picker'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useAppModal } from '../../shared/hooks/useAppModal'
import { useGallery } from '../../shared/hooks/useGallery'
import { useCamera } from '../../shared/hooks/useCamera'
import { useImage } from '../../shared/hooks/useImage'

import { useRegisterMutation } from '../../shared/queries/auth/use-register-mutation'
import { useUserStore } from '../../shared/store/userStore'

import { RegisterFormData, registerScheme } from './register.scheme'

export const useRegisterViewModel = () => {
  const userRegisterMutation = useRegisterMutation()

  const { setSession } = useUserStore()
  const [avatarUri, setAvatarUri] = useState<string | null>(null)

  const { handleSelectImage } = useImage({
    callback: setAvatarUri,
    cameraType: CameraType.front,
  })

  const handleSelectAvatar = () => {
    handleSelectImage()
  }

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
    // console.log(registerData)

    const mutationResponse = await userRegisterMutation.mutateAsync(
      registerData
    )

    console.log(mutationResponse)

    setSession({
      refreshToken: mutationResponse.refreshToken,
      token: mutationResponse.token,
      user: mutationResponse.user,
    })
  })

  // console.log(user)

  return { control, onSubmit, errors, handleSelectAvatar, avatarUri }
}
