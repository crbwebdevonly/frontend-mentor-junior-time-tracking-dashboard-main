import logo from "./logo.svg";
import "./app.scss";
import Profile from "./components/Profile";
import Card from "./components/Card";

function App() {
     return (
          <div className="app-container">
               <div className="app-profile-wrap">
                    <Profile />
               </div>
               <div className="app-all-cards-wrap">
                    <Card />
               </div>
          </div>
     );
}

export default App;
