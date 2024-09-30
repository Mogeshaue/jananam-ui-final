import React from "react";
import Ticket from "./Components/Ticket.js";
import Home from "./pages/login-page.js";
import ConcertBooking from "./pages/bay-page.js";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App = () => {
 
  // Images for carousel
  const images = [
    'https://picsum.photos/1920/1080?random=1.jpg',
    'https://picsum.photos/1920/1080?random=2.jpg',
    'https://picsum.photos/1920/1080?random=3.jpg'
  ];


  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home images={images} />} />
          <Route path="/booking" element={<ConcertBooking />} />
          <Route path="/ticket" element={<Ticket/>}/>
        </Routes>
    </Router>
  );
};

export default App;