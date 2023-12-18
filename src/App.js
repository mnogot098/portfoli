import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import About from "./views/About";
import Blogs from "./views/Blogs";
import Certifications from "./views/Certifications";
import Contact from "./views/Contact";
import Footer from "./views/Footer";
import Home from "./views/Home";
import Projects from "./views/Projects";
import Services from "./views/Services";


function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <>
      {!loading ? (
        <div>
          <Navbar />
          <Home />
          <About />
          <Services />
          <Projects />
{/*           <Blogs />
 */}          <Certifications />
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
