import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './app/App'
import { Providers } from './app/Provider'
import RootLayout from './app/RootLayout'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <RootLayout>
        <App />
      </RootLayout>
    </Providers>
  </StrictMode>,
)
