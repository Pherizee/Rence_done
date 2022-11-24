import GlobalStyles from "./components/styled/GlobalStyles";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
