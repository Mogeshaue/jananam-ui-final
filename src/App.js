import React, { useState, useEffect } from "react";
import Carousel from "./Components/Carousel";
import axios from "axios";
import "./index.css";
import Header from "./Components/Header.jsx";
import Bays from "./Components/Bays";
import Alert from "./Components/Alert";
import stageImage from "./Components/stage.jpg";


import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

function Home({ images }) {
  return (
    <div className="App">
      <Header />
      <Carousel images={images} />
    </div>
  );
}

const App = () => {
  const [boysBays, setBoysBays] = useState([]);
  const [girlsBays, setGirlsBays] = useState([]);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [selectedBay, setSelectedBay] = useState(null);
  const [ticketCount, setTicketCount] = useState(1);

  // Images for carousel
  const images = [
    'https://picsum.photos/1920/1080?random=1.jpg',
    'https://picsum.photos/1920/1080?random=2.jpg',
    'https://picsum.photos/1920/1080?random=3.jpg'
  ];

  // Fetch bay data from backend on component mount
  useEffect(() => {
    const fetchBays = async () => {
      try {
        const response = await axios.get("http://localhost:8000/getBays");
        const { boysBays, girlsBays } = response.data;
        setBoysBays(boysBays);
        setGirlsBays(girlsBays);
      } catch (error) {
        console.error("Error fetching bays:", error);
      }
    };
    fetchBays();
  }, []);

  const handleBayClick = (bay) => {
    setSelectedBay(bay);
    setIsAlertOpen(true);
  };

  const handleProceedToPayment = async () => {
    if (selectedBay && ticketCount > 0 && ticketCount <= 5) {
      const totalAmount = selectedBay.amount_of_ticket * ticketCount; // Updated to use amount_of_ticket

      const formData = {
        amount: totalAmount,
        productinfo: "Test Product",
        firstname: "Anbarasan",
        email: "ajithkumar161105@gmail.com",
      };

      try {
        const response = await axios.post(
          "http://localhost:8000/generate-hash",
          formData
        );
        const { hash, txnid } = response.data;

        const payUForm = document.createElement("form");
        payUForm.method = "POST";
        payUForm.action = "https://test.payu.in/_payment";

        const fields = {
          key: "Hfr7dn",
          txnid: txnid,
          amount: totalAmount,
          productinfo: formData.productinfo,
          firstname: formData.firstname,
          email: formData.email,
          phone: "8056901611",
          surl: "https://test.payu.in/success",
          furl: "http://localhost:5000/payment-failure",
          hash: hash,
          service_provider: "payu_paisa",
        };

        Object.keys(fields).forEach((key) => {
          const input = document.createElement("input");
          input.type = "hidden";
          input.name = key;
          input.value = fields[key];
          payUForm.appendChild(input);
        });

        document.body.appendChild(payUForm);
        payUForm.submit();
      } catch (error) {
        console.error("Error generating hash:", error);
        alert("Error generating hash");
      }
    } else {
      alert("Please select a valid number of tickets (1-5).");
    }
  };

  const closeAlert = () => {
    setIsAlertOpen(false);
    setSelectedBay(null);
    setTicketCount(1);
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Define routes inside the Routes component */}
          <Route path="/" element={<Home images={images} />} />
        </Routes>
        {/* These elements are not part of routes, and should be rendered outside Routes */}
    
        <img src={stageImage} alt="Stage" className="stage-image" />
        <h1 className="BayText">Bays</h1>
        <Bays
          boysBays={boysBays}
          girlsBays={girlsBays}
          onBayClick={handleBayClick}
        />
        <Alert
          isOpen={isAlertOpen}
          onClose={closeAlert}
          bayDetails={selectedBay}
          ticketCount={ticketCount}
          setTicketCount={setTicketCount}
          onProceed={handleProceedToPayment}
        />
      </div>
    </Router>
  );
};

export default App;
