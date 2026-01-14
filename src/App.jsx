import './App.css'
import SocialLinks from './components/SocialLink'
import Header from './components/Header'
import NameStyle from './components/NameCard'

function App() {

  return (
    <>
      <Header />
      <div className='center'>
        <NameStyle />
        <SocialLinks />
      </div>
    </>
  )
}

export default App
