import { Inter } from 'next/font/google'
import Main from '../components/Main'
import Gallery from '../components/Gallery'
import TextSpace from '../components/TextSpace';

const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  return (
    <>
      <Main>
        <Gallery />
        <TextSpace />
      </Main>
    </>
  )
}