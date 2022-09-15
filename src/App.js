import './App.css'
import Gallery from './components/Gallery/Gallery'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import NewsLetter from './components/NewsLetter/NewsLetter'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Hero />
      <Products/>
      <Gallery/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default App
