import { Inter } from "next/font/google";
import Main from "../components/Main";
import TextSpace from "../components/TextSpace";
import ImageComponent from "../components/Canvas";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
        <Main>
          <ImageComponent />
          <TextSpace />
        </Main>
    </>
  );
}
