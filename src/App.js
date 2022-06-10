import ProfileComponent from "./Profile/ProfileComponent";
import image from "./user.png"

function App() {
    const handleName = name => alert(name);
    const bio="Heey, I am ESSAFI Najwa ans I am happy to join GOMYCODE team ";
  return (
    <div className="App">
        <ProfileComponent fullName="Essafi Najwa" bio={bio} profession="Developpeur" handleName={handleName}>
            <img style={{height:"148px"}} src={image}/>
        </ProfileComponent>
    </div>
  );
}

export default App;
