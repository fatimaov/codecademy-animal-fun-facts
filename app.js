const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
const title = '';
const background = <img className='background' alt='ocean' src='/img/ocean.jpg' />;
const animalFacts = (
    <div>
        {background}
        <h1>{title ? title : 'Click an animal for a fun fact'}</h1>
    </div>
);
root.render(animalFacts);
