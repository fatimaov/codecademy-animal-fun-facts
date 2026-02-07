const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
const title = '';
const animalFacts = <h1>{title ? title : 'Click an animal for a fun fact'}</h1>;
root.render(animalFacts);
