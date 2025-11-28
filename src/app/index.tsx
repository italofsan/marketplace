import { Redirect } from 'expo-router'
import { useUserStore } from '../shared/store/userStore'

export default function App() {
  const { user, token } = useUserStore()

  if (user && token) {
    return <Redirect href='/home' />
  }

  return <Redirect href='/(public)/login' />
}
