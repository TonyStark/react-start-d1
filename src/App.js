import logo from './mountain.png';
import './App.css';

function App() {

  return (
    <header>
      <div class="fullogo">
        <div class="logoname">
          Mountain
        </div>
        <div class="logo">
          <img src={logo} class="img1" />
        </div>
        <div class="logoname2">
          Rider
        </div>
        <div class="dar">
          Dar Ke Aaage
        </div>
        <div class="jeet">
          Jeet Hey....
        </div>
      </div>
      <nav class="nav">
        <a href="">Book</a>
        <a href="">Journey</a>
        <a href="">Route</a>
        <a href="">Sponser</a>
        <a href="">Pricing</a>
      </nav>
    <div class="content" style={{"text-align":"center", "margin-top":"20px"}}>
      <img src="https://i.pinimg.com/originals/81/d8/bb/81d8bbd73c97e0e39ca81d3435e413e3.jpg" width="500"/>
    </div>
    </header>
  );
}

export default App;
