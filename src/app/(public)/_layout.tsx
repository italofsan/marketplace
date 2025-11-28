import { Redirect, Stack } from 'expo-router'
import { useUserStore } from '../../shared/store/userStore'

export default function PublicLayout() {
  const { user, token } = useUserStore()

  if (user && token) {
    return <Redirect href='/home' />
  }

  return <Stack screenOptions={{ headerShown: false }} />
}
