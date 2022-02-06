import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import Blocks from './Blocks';

function App() {
  return (
    <div className='App'>
      <Header />,
      <Body />,
      <Blocks />,
      <Footer />,
    </div>
  );
}

export default App;
