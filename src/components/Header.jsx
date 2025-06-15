import planet from '../images/planet-svgrepo-com.svg';

export default function Header() {
    return (
        <header>
            <img src={planet} alt="globe icon" />
            <h1>my travel journal.</h1>
        </header>
    )
}