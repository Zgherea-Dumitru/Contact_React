import './App.css';
import Contact from "./components/Contact"

let users = [{
  firstName : "Dumitru",
  lastName : "Z",
  image : "https://avatars.githubusercontent.com/u/48413108?s=400&v=4",
  statusClass : "status-online",
  online : true,
}, 
{
  firstName : "Benjamin",
  lastName : "F",
  image : "https://www.swashvillage.org/storage/img/images_2/benjamin-franklin-biography_4.jpg",
  statusClass : "status-offline"
}, 
{
  firstName : "Jack",
  lastName : "S",
  image : "https://www.vegas-productions.com/file/si927938/Sosie-Jack-Sparrow-fi14585590x490.jpg",
  statusClass : "status-online",
  online : true
}]

function App() {
  return (
    <div className="App">
      <Contact {...users[0]}/>
      <Contact {...users[1]}/>
      <Contact {...users[2]}/>
    </div>
  );
}

export default App;
