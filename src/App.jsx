import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'

function App() {
    return (
        <>
            <Header/>
            <main className='journalEntry'>
                <Entry/>
                <div id='testing'></div>
            </main>
        </>
    )
}

export default App
