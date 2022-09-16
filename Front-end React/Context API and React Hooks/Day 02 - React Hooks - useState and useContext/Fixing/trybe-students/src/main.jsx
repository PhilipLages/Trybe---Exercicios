import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import FormDataProvider from './context/FormDataProvider'
import StudentsProvider from './context/StudentsProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormDataProvider>
      <StudentsProvider>
        <App />
      </StudentsProvider>
    </FormDataProvider>
  </React.StrictMode>
)
