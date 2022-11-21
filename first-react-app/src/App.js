// eslint-disable-next-line
import logo from './logo.svg'; 
import './App.css';
const h1Style = { 
  "fontSize":"40px",
  "color":"#cc0000",
  "textTransform":"lowercase"
};
function App() {
  return (
    <div className="App">
<h1 style={h1Style}>Natalie's React Page</h1>
<h1>logo</h1>
<h2>This is my first React page…</h2>
<p className="bio">This work started in November 22 </p>
</div>
  );
}

export default App;
