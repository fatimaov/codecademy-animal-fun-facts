const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
const title = '';
const background = <img className='background' alt='ocean' src='./img/ocean.jpg' />;
// Display facts
function displayFact(e) {
    const funFact = window.animals[e.target.alt].facts[Math.floor(Math.random() * window.animals[e.target.alt].facts.length)];
    document.getElementById('fact').innerHTML = funFact;
}
// Add an array of images
const images = [];
for (const animal in window.animals) {
    images.push(<img key={animal} onClick={displayFact} className='animal' alt={animal} src={window.animals[animal].image} aria-label={animal} role='button' />)
}
const animalFacts = (
    <div>
        <h1>{title ? title : 'Click an animal for a fun fact'}</h1>
        <div className='background-container'>
        <p id='fact'></p>
        {background}
        <div className='animals'>
            {images}
        </div>
        </div>
    </div>
);
root.render(animalFacts);
