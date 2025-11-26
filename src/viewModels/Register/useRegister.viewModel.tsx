import { useState } from 'react'
import { CameraType } from 'expo-image-picker'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useAppModal } from '../../shared/hooks/useAppModal'
import { useGallery } from '../../shared/hooks/useGallery'
import { useCamera } from '../../shared/hooks/useCamera'
import { useImage } from '../../shared/hooks/useImage'

import { useUploadAvatarMutation } from '../../shared/queries/auth/use-upload-avatar.mutation'
import { useRegisterMutation } from '../../shared/queries/auth/use-register.mutation'
import { useUserStore } from '../../shared/store/userStore'

import { RegisterFormData, registerScheme } from './register.scheme'

export const useRegisterViewModel = () => {
  const { updateUser } = useUserStore()
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

  const uploadAvatarMutation = useUploadAvatarMutation()

  const userRegisterMutation = useRegisterMutation({
    onSuccess: async () => {
      if (avatarUri) {
        const { url } = await uploadAvatarMutation.mutateAsync(avatarUri)
        console.log({ url })

        updateUser({ avatarUrl: url })
      }
    },
  })

  const onSubmit = handleSubmit(async (userData) => {
    const { confirmPassword, ...registerData } = userData
    // console.log(registerData)

    await userRegisterMutation.mutateAsync(registerData)
  })

  // console.log(user)

  return { control, onSubmit, errors, handleSelectAvatar, avatarUri }
}
