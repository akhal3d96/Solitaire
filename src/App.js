import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import './App.scss'
import BottomCards from './components/BottomCards'
import TopCards from './components/TopCards'

function App () {
  return (
    <div className="section">
      <div className="container">
        <DndProvider backend={HTML5Backend}>
          <TopCards />
          <BottomCards />
        </DndProvider>
      </div>
    </div>
  )
}

export default App
