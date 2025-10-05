import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'
import data from './data'

export default function App() {
    const entryElements = data.map((entry)=> {

        return (
            <Entry 
                key={entry.id}
                // {..entry} Spread the object as props, can replace all the code below, but the code isn’t maintainable — future developers may struggle to understand it.
                img={entry.img}
                title = {entry.title}
                country = {entry.country}
                googleMapsLink = {entry.googleMapsLink}
                dates = {entry.dates}
                text = {entry.text} 
            />
        )
    });

    return (
        <>
            <Header/>
            <main className='journalEntry'>
                {entryElements}
                <div id='testing'></div>
            </main>
        </>
    )
}
