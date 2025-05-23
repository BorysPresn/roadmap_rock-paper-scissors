import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import StartScreen from './components/StartScreen'
import ThemeSwitcher from './components/ThemeSwitcher'
import GameScreen from './components/GameScreen'

function App() {
  
  return (
    <HashRouter>
      <ThemeSwitcher />
      <Routes>
        <Route path='/' element={<StartScreen />} />
        <Route path='/game' element={<GameScreen />} />
        <Route path='*' element={<div>Page not found</div>} />
      </Routes>
    </HashRouter>
  )
}

export default App
