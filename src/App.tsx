import './App.css'
import Three360Viewer from './components/TourCanvas'
import image from './assets/panorama.jpg'

function App() {

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Three360Viewer imageUrl={image} />
    </div>
  )
}

export default App
