import React from 'react'
import './bootstrap.min.css'
import './App.css'
import Questions from './components/Questions'
import Progress from './components/Progress'
import Answer from './components/Answer'
import Score from './components/Score'

function App () {

    return (
        <div className='App '>
            <Progress/>

            <div id='bigOverlay' className='container'>
                <Questions/>

                <Answer/>

                <Score />
            </div>
        </div>
    )
}

export default App
