import { Text, TouchableOpacity, View } from 'react-native'
import { router } from 'expo-router'

import { useRegisterViewModel } from './useRegister.viewModel'
import { AppInputController } from '../../shared/components/AppInputController'
import { AuthFormHeader } from '../../shared/components/AuthFormHeader'

export const RegisterView = ({
  onSubmit,
  control,
}: ReturnType<typeof useRegisterViewModel>) => {
  return (
    <View className='flex-1  justify-center'>
      <AuthFormHeader
        title='Crie sua conta'
        subTitle='Informe seus dados pessoais e de acesso'
      />
      <AppInputController
        leftIcon='mail-outline'
        label='E-MAIL'
        control={control}
        name='email'
      />

      <TouchableOpacity onPress={onSubmit}>
        <Text>Registrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/login')}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  )
}
