import imageInSrc from './imageInSrc.jpg';
import MyVideo from './react.mp4';
import './App.css';
import './style.css';
function App() {
  return (
    <div className="App">
      <div className="app-jsx">
      <h1 class="title red">Bonjour !</h1>
      <br />
        <img src={imageInSrc} className="imgsrc img-responsive" alt="ImageSrc" />
        <br />
        <img src="/imageInPublic.jpg" className="imgsrc img-responsive" alt="ImagePublic" />
      </div>
      <video width="320" height="240" controls>
         <source src={MyVideo} type="video/mp4" /> 
      </video>
    </div>
  );
}
export default App;