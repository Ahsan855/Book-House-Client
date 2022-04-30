import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import AddItem from "./Components/Add-item/AddItem";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import ManageItem from "./Components/ManageItem/ManageItem";
import MyItem from "./Components/MyItem/MyItem";
import NotFound from "./Components/NotFound/NotFound";
import Register from "./Components/Register/Register";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/myitem" element={<MyItem />} />
        <Route path="/manageitems" element={<ManageItem />} />
        <Route path="/additem" element={<AddItem />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
