import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import Footer from './Footer';
//import MainContent from './MainContent';
import Square from './Square';
import Board from './Board';
import SampleForm from './SampleForm';
import TicTacToe from './TicTacToe';
import ScoreCalculator from './ScoreCalculator';
import DynamicForm from './DynamicForm';

function App() {
  return (
    <div>
   <Header/>
   <DynamicForm/>
   <TicTacToe/>
   <SampleForm/> 
   <ScoreCalculator/>  
   <Square className="grey" textContent="Hello" index="1"/>
   <Square className="blue" textContent="World" index="2"/>
   <Square className="red" textContent="Map" index="3"/>
   <hr/>
   <Board/>
   <Footer className="footer" footerContent="Terms and Conditions"/>
    </div>
  );
}

export default App;
