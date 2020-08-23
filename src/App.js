import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'
import './App.scss'
import BottomCards from './components/BottomCards'
import TopCards from './components/TopCards'

function isMobile () {
  return ('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)
}

function App () {
  const dragBackEnd = isMobile() ? TouchBackend : HTML5Backend
  return (
    <>
      <div className="section">
        <div className="container">
          <DndProvider backend={dragBackEnd}>
            <TopCards />
            <BottomCards />
          </DndProvider>
        </div>
      </div>
    </>
  )
}

export default App
