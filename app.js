const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
const title = '';
const background = <img className='background' alt='ocean' src='/img/ocean.jpg' />;
// Add an array of images
const images = [];
for (const animal in window.animals) {
    images.push(<img key={animal} className='animal' alt={animal} src={window.animals[animal].image} aria-label={animal} role='button'/>)
}
const animalFacts = (
    <div>
        {background}
        <div className='animals'>
            {images}
        </div>
        <h1>{title ? title : 'Click an animal for a fun fact'}</h1>
    </div>
);
root.render(animalFacts);
