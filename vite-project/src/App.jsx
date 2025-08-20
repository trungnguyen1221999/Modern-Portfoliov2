import { ThemeProvider } from "styled-components";
import theme from "./Theme";
import { GlobalStyles } from "./GlobalStyles";
import { Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import Contact from "./assets/pages/Contact";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
