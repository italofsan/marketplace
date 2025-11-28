import { FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { SearchInput } from './components/SearchInput'
import { ProductCard } from './components/ProductCard'
import { HomeHeader } from './components/Header'

import { useHomeViewModel } from './useHome.viewModel'

export const HomeView = ({ products }: ReturnType<typeof useHomeViewModel>) => {
  return (
    <SafeAreaView edges={['top']} className='flex-1'>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={({ id }) => `product-list-item-${id}`}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        ListHeaderComponent={
          <>
            <HomeHeader />
            <SearchInput />
          </>
        }
        contentContainerClassName='px-4 pb-[120px]'
      />
    </SafeAreaView>
  )
}
