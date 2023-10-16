import { useState, useEffect } from "react";
import Contact from "./views/Contact";
import Navbar from "./components/Navbar";
import About from "./views/About";
import Home from './views/Home'
import Services from "./views/Services";
import Projects from "./views/Projects";
import LoadingScreen from "./components/LoadingScreen";
import { ThemeProvider } from "./themeProvider";
import Blogs from "./views/Blogs";
import Footer from "./views/Footer";

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
      <>

        {!loading ? (
          <div >
            <Navbar />
            <Home />
            <About />
            <Services />
            <Projects />
            <Blogs/>
            <Contact />
            <Footer />
          </div>

        ) : (
          <LoadingScreen />
        )}
      </>
  );
}

export default App;
