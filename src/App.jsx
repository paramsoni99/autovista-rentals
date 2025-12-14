import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
//all future pages to go here
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return ( <div className="text-zinc-100 bg-zinc-950">
    <NavBar />  
    
    <main className="min-h-screen">
        {/*  pages here */}
    
        <Routes>
          
          <Route path="/" element={<HomePage />} />        

        </Routes>
    
    </main>

    <Footer />
  </div>
);
};

export default App;
