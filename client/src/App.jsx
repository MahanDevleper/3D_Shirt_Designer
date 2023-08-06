import Canvas from './canvas';
import Customizer from './pages/Customizer';
// import SplineModel from './Spline 3D/Spline-show';
import Home from './pages/Home'
function App() {
  return (
    <main className="app transition-all ease-in">
      {/* <SplineModel /> */}
      <Home />
      <Canvas />
      <Customizer />
    </main>
  )
}

export default App