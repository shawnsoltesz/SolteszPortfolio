import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import './components/navigation.scss'
import './components/home.scss'
import './components/about.scss'
import './components/portfolio.scss'
import './components/contact.scss'
import './components/footer.scss'
import { App } from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
