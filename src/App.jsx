import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { ThemeSelector, FirstCustomization, SecondCustomization, ThirdCustomization } from './components/index'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ThemeSelector />} />
        <Route path="/first-customization" element={<FirstCustomization />} />
        <Route path="/second-customization" element={<SecondCustomization />} />
        <Route path="/third-customization" element={<ThirdCustomization />} />
      </Routes>
    </Router>
  )
}

export default App