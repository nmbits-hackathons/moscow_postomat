import Maps from "../Maps"
import './App.css';

function App() {
    const handleTest = (map) => {
        console.log(map)
    }
    return <div><Maps {...{handleTest}} /></div>;
}

export default App;
