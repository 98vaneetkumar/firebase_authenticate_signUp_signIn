import { getDatabase,set,ref } from "firebase/database";
import './App.css';
import {app} from "./firebase"
import SignUp from "./Pages/SignUp";
const db=getDatabase(app)
function App() {
  const putData=()=>{
    set(ref(db, 'users/vaneet'), {
      id: 1,
      email: "vaneet3157gmail.com",
      password :"123456789"
    });
  }
  console.log("putData",putData);
  return (  
    <div className="App">
        <h2>Firebase Reactf</h2>
        {/* <button onClick={putData}>Put data</button> */}
        <SignUp/>
    </div>
  );
}

export default App;
