import "@/styles/globals.css";
import "../styles/main.css";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <div className="container">
      <header className="headerSpace">
        <Header />
      </header>
      <main className="mainSpace">
        <Main />
      </main>
      <footer className="footerSpace">
        <Footer />
      </footer>
    </div>
  );
}
