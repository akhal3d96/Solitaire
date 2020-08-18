import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import './App.scss'
import BottomCards from './components/BottomCards'
import generateCards from './components/generateCards'
import TopCards from './components/TopCards'

function App () {
  const cards = generateCards()

  return (
    <div className="section">
      <div className="container">
        <DndProvider backend={HTML5Backend}>
          <TopCards cards={cards}/>
          <BottomCards cards={cards}/>
        </DndProvider>
      </div>
    </div>
  )
}

export default App
