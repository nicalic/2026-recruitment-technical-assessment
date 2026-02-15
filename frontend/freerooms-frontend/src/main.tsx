import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FreeroomsPage from './FreeroomsPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FreeroomsPage />
  </StrictMode>,
)
