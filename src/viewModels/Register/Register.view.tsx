import { ScrollView, Text, View } from 'react-native'
import { router } from 'expo-router'

import { AppInputController } from '../../shared/components/AppInputController'
import { KeyboardContainer } from '../../shared/components/ContainerKeyboard'
import { AuthFormHeader } from '../../shared/components/AuthFormHeader'
import { AppButton } from '../../shared/components/AppButton'

import { useRegisterViewModel } from './useRegister.viewModel'

export const RegisterView = ({
  onSubmit,
  control,
}: ReturnType<typeof useRegisterViewModel>) => {
  return (
    <KeyboardContainer>
      <ScrollView className='flex-1 px-[40px]'>
        <AuthFormHeader
          title='Crie sua conta'
          subTitle='Informe seus dados pessoais e de acesso'
        />
        <AppInputController
          leftIcon='person-outline'
          label='NOME'
          control={control}
          name='name'
          placeholder='Seu nome completo'
        />

        <AppInputController
          leftIcon='call-outline'
          label='TELEFONE'
          control={control}
          name='phone'
          placeholder='(00) 00000-0000'
        />
        <AppInputController
          leftIcon='mail-outline'
          label='E-MAIL'
          control={control}
          name='email'
          placeholder='mail@example.com.br'
        />

        <AppInputController
          leftIcon='lock-closed-outline'
          label='SENHA'
          control={control}
          name='password'
          placeholder='Sua senha'
          secureTextEntry
        />

        <AppInputController
          leftIcon='lock-closed-outline'
          label='CONFIRMAR SENHA'
          control={control}
          name='confirmPassword'
          placeholder='Confirme sua senha'
          secureTextEntry
        />

        <AppButton className='mt-6' onPress={onSubmit}>
          Registrar
        </AppButton>

        <View className='mt-16'>
          <Text className='text-base mb-6 text-gray-300'>
            Já tem uma conta?
          </Text>
          <AppButton variant='outlined' onPress={() => router.push('/login')}>
            Login
          </AppButton>
        </View>
      </ScrollView>
    </KeyboardContainer>
  )
}
