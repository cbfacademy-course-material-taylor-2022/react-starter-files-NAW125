import logo from './logo.svg';
import './App.css';
const h1Style = { 
  "fontSize":"30px",
  "color":"#cc0000",
  "textTransform":"uppercase"
};
function App() {
  return (
    <div className="App">
<h1 style={h1Style}>Natalie's React Page</h1>
<h1>My React Page</h1>
<h2>This is my first React page…</h2>
<p className="bio">We have one cat and two dogs</p>
</div>
  );
}

export default App;
