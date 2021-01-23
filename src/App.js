import './App.css';
import Profile from './Profiles/Profile';
import ProfilPhoto from './ProfilPhoto.jpg';



function App() {
  return (
    <div className="App" style={{padding:'5px', display:'flex', justifyContent:'center'}}>

        <Profile fullName='khaled sallem' bio="it's my bio" profession='manager'> <img src={ProfilPhoto} alt='profilPhoto' style={{width:'200px', height:'200px'}} ></img></Profile>

    </div>
  );
}

export default App;
