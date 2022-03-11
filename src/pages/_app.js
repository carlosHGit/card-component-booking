import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient()


function MyApp({ Component, props }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...props}/>
    </QueryClientProvider>
  )
}

export default MyApp
