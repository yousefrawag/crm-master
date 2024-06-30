import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from './App.jsx'
import './index.scss'
import {Provider} from "react-redux"
import store from '../store/index.js';
import { QueryClient ,QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:0
    }
  }
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
      <QueryClientProvider client={queryClient}>  
      <Provider  store={store}> 
        <App />
        </Provider>
  <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    
  
  </React.StrictMode>,
)
