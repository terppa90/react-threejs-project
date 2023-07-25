/* eslint-disable no-unused-vars */
import Canvas from './canvas';
import Customizer from './pages/Customizer';
import Home from './pages/Home';

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  );
}

export default App;

// https://youtu.be/tllZWCQZ9_0?t=6530
