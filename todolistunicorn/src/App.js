import Register from "./Register";
import List from "./ToDoList";
import Navbar from "./Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToDoList from "./ToDoList";

function App() {

    
    return( 
       <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/ToDoList" element={<ToDoList />} />
      </Routes>
    </Router>
    );
    
    };

export default App