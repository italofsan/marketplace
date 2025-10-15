import { useRegisterViewModel } from '../viewModels/Register/useRegister.viewModel'

import { RegisterView } from '../viewModels/Register/Register.view'

export default function Register() {
  const props = useRegisterViewModel()

  return <RegisterView {...props} />
}
