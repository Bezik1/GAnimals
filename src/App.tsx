import './App.css'
import { Ganimal } from './assets/Ganimal'

const App = () =>{
  return (
    <div className='app'>
      <div className='ganimal-info-container'>
        <nav className='navbar'>
          <h1 className='title'>GANIMALS</h1>
        </nav>
      </div>
      <div className='ganimal-image-container'>
          <Ganimal
            className='ganimal'
            baseColor='#EE1056FF'
            eyeColor="#34E1F1FF"
            specialColor="#E65027FF"
          />
        </div>
      </div>
  )
}

export default App
