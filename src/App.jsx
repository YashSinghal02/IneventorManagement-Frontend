import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logout from "./Components/Dashboard/LeftSide/Logout/Logout";
import ADDCart from "./Components/Dashboard/LeftSide/ADDCart/ADDCart";
import AllCard from "./Components/Dashboard/LeftSide/AllCard/AllCard";
import Combine from "./Components/Dashboard/CombineLeft&RightSide/Combine";
import { Toaster } from "react-hot-toast";
import SignUp from "./Components/SignUp/SignUp";
import LogIn from "./Components/LogIn/LogIn";
import EditCard from "./Components/Dashboard/LeftSide/EditCard/EditCard";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />


      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route element={<Combine />}>
          <Route path="/allcard" element={<AllCard />} />
          <Route path="addcard" element={<ADDCart />} />
          <Route path="logout" element={<Logout />} />
          <Route path="editcard/:id" element={<EditCard/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
