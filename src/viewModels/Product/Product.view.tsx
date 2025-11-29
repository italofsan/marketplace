import { FlatList, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { CommentItem } from './components/CommentItem'
import { ListFooter } from './components/ListFooter'
import { EmptyList } from './components/EmptyList'
import { Loading } from './components/Loading'
import { Header } from './components/Header'

import { useProductViewModel } from './useProduct.viewModel'
import { ProductError } from './components/Error'

export const ProductView = ({
  isLoading,
  productDetails,
  error,
  comments,
  isLoadingComments,
  errorComments,
  handleLoadMore,
  handleRefetch,
  handleEndReached,
  isRefetching,
  isFetchingNextPage,
}: ReturnType<typeof useProductViewModel>) => {
  console.log(comments)

  if (error) return <ProductError />

  if (isLoading || !productDetails) return <Loading />

  return (
    <SafeAreaView className='flex-1 bg-background'>
      <FlatList
        data={comments}
        renderItem={({ item }) => <CommentItem comment={item} />}
        ListHeaderComponent={() => <Header productDetails={productDetails} />}
        className='px-6'
        onEndReached={handleEndReached}
        onRefresh={handleRefetch}
        refreshing={isRefetching}
        ListFooterComponent={() => (
          <ListFooter isLoadingMore={isFetchingNextPage} />
        )}
        ListEmptyComponent={<EmptyList isLoadingComments={isLoadingComments} />}
      />
    </SafeAreaView>
  )
}
