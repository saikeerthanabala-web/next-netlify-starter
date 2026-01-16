import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>SaiKeerthana Bala</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="SAI KEERTHANA BALA" />
        <p className="description">
          Automation Test Engineer</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
