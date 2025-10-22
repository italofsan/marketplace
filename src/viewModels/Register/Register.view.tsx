import { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useRegisterViewModel } from './useRegister.viewModel'
import { AppInput } from '../../components/AppInput'
import { Controller } from 'react-hook-form'

export const RegisterView = ({
  onSubmit,
  control,
}: ReturnType<typeof useRegisterViewModel>) => {
  const [email, setEmail] = useState('')

  return (
    <View className='flex-1  justify-center'>
      <Controller
        control={control}
        name='email'
        render={({ field: { onChange, onBlur, value } }) => (
          <AppInput
            leftIcon='mail-outline'
            label='E-mail'
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />
      <AppInput leftIcon='lock-closed-outline' label='Senha' secureTextEntry />
      <TouchableOpacity onPress={onSubmit}>
        <Text>Registrar</Text>
      </TouchableOpacity>
    </View>
  )
}
