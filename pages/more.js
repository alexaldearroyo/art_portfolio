import { Inter } from "next/font/google";
import Main from "../components/Main";
import Gallery from "../components/Gallery";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
        <Main>
        <p>This is the digital art portfolio of Alex Arroyo.</p>
        <p>For more information about the author&apos;s work,</p>
        <p>access his <a href="https://alexaldearroyo.github.io/portfolio" target="_blank" rel="noopener noreferrer" style={{ color: '#FD7C65', textDecoration: 'underline' }}>developer portfolio</a>.</p>

        </Main>
    </>
  );
}
