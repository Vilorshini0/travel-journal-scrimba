import globe from '../assets/Globe.png'

export default function Header() {
    return (
        <header>
            <img src={globe} alt="Globe icon" />
            <h1>my travel journal</h1>
        </header>
    )
}