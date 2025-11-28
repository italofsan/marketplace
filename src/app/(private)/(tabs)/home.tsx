import { useHomeViewModel } from '../../../viewModels/Home/useHome.viewModel'
import { HomeView } from '../../../viewModels/Home/Home.view'

export default function Home() {
  const viewModel = useHomeViewModel()
  return <HomeView {...viewModel} />
}
