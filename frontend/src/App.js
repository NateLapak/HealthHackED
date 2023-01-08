import Home from "./Components/Homepage/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
            <Navbar />
            <Home />
            <Footer />
        </header>
      </div>
    </ChakraProvider>
  );
}

export default App;
