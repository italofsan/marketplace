import { FlatList, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useProductViewModel } from './useProduct.viewModel'
import { Header } from './components/Header'

export const ProductView = ({
  isLoading,
  productDetails,
  error,
}: ReturnType<typeof useProductViewModel>) => {
  if (error) {
    return <Text>Houve um erro ao carregar os detalhes do produto</Text>
  }

  if (!productDetails) {
    return null
  }

  return (
    <SafeAreaView className='flex-1 bg-background'>
      <FlatList
        data={[]}
        renderItem={() => <></>}
        ListHeaderComponent={() => <Header productDetails={productDetails} />}
        className='px-6'
      />
    </SafeAreaView>
  )
}
