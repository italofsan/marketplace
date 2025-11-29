import { AppPriceTextView } from './AppPriceText.view'
import { useAppPriceTextViewModel } from './useAppPriceText.viewModel'

interface AppPriceTextParams {
  classNameCurrency?: string
  classNameValue?: string
  value: number
}

export const AppPriceText = ({
  classNameCurrency,
  classNameValue,
  value,
}: AppPriceTextParams) => {
  const viewModel = useAppPriceTextViewModel(value)

  return (
    <AppPriceTextView
      {...viewModel}
      classNameCurrency={classNameCurrency}
      classNameValue={classNameValue}
    />
  )
}
