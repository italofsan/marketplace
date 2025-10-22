import { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useRegisterViewModel } from './useRegister.viewModel'
import { AppInput } from '../../components/AppInput'

export const RegisterView = ({
  onSubmit,
}: ReturnType<typeof useRegisterViewModel>) => {
  const [email, setEmail] = useState('')

  return (
    <View className='flex-1  justify-center'>
      <AppInput
        leftIcon='mail-outline'
        label='E-mail'
        value={email}
        onChangeText={setEmail}
        error='E-mail inválido'
      />
      <AppInput leftIcon='lock-closed-outline' label='Senha' secureTextEntry />
      <TouchableOpacity onPress={onSubmit}>
        <Text>Registrar</Text>
      </TouchableOpacity>
    </View>
  )
}
