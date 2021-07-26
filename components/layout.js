import { Fragment } from 'react';
import Head from 'next/head'
import styles from './layout.module.scss'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import NavBar from './NavBar';
import Bio from './Bio';
import Contact from './Contact';
import Projects from './Projects';
import Intro from './Intro';
import Footer from "./Footer";
const name = 'Ellie Judd'
export const siteTitle = 'Developer Portfolio'

export default function Layout({ children, home }) {
  return (
    <div onScroll={console.log} className={`${styles.container}`}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <NavBar />
       <div className={utilStyles.scroll}>
          {home && (
            <Fragment>
              <Intro />
              <Bio />
              <Projects />
              <Contact />
            </Fragment>
          )}
        </div>
      )
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <Footer/>
    </div>
  )
}
