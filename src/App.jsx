import './App.css';
import Header from './components/Header'
import Display from './components/Display'
import Input from './components/Input'


const App = () => {

  return (
    <div className="App">
      <Header/>
      <Display/>
      <hr/>
      <h2>My Virtual Wardrobe</h2>
      <h3> Enter a <span>description for</span> or <span>upload a picture of</span> an item of clothing whose characteristics you want to track! </h3>
      <Input/>
    </div>
  )
}

export default App
