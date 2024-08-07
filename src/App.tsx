import CharacterList from './components/characterList.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient()
function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <h1>Star Wars Characters</h1>
      <CharacterList/>
    </QueryClientProvider>
  )
}

export default App
