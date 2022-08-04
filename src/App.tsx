import './App.css';

function App() {
  return (
    <div className="App">
    <p>Demo of Web components</p>
    <p></p>
    <p>Lit Web Component:</p>
    <p><sample-lit-test text="Test" /></p>
    <p></p>
    <p>Stencil Web Component:</p>
    <p><sample-stencil-test text="Test" /></p>
    </div>
  );
}

export default App;
