import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Common/Header";
import CreateUser from "./components/User/CreateUser";
import EditUser from "./components/User/EditUser";
import ShowUser from "./components/User/ShowUser";
import User from "./components/User/User";
function App() {
  return (
    <div className="App">
      <header className="container">
        <div className="">
          <Header />
          <Routes>
            <Route path="/edit-user/:id" element={<EditUser />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/create-user" element={<CreateUser />} />
            <Route path="/show-user" element={<ShowUser />} />
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
