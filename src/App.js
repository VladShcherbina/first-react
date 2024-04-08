import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Center from './components/Center';
function App() {
  return (
    <div className='app_wrapper'>
     <Header />
     <div className='wrapper'>
      <Navigation />
      <Center />
     </div>
     
    </div>
  );
}

export default App;
