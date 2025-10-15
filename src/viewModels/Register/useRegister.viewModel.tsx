import { useState } from 'react'

export const useRegisterViewModel = () => {
  const [userData, setUserData] = useState({
    name: 'Ítalo',
  })

  return {
    userData,
    setUserData,
  }
}
