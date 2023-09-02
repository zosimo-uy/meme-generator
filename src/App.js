import './App.css';
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Meme from './components/Meme';

function App() {
  return (
      <div className='container-fluid'>
        <Header />
        <Meme />
      </div>
  )
}

export default App;
