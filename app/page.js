import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head';

export default function Home() {
  return (
    <div className={styles.app}>
      <Head>
        <title>Chatbot with choreographers</title>
      </Head>
      <section className={styles.sidebar}>
        <button>
          + New chat
        </button>
        <ul className={styles.history}>
          <li>bruh</li>
        </ul>
        <nav><p>made by Lu</p></nav>
      </section>
      <section className={styles.main}>
        <h1>LuGPT</h1>
        <ul className={styles.feed}>
        </ul>
        <div className={styles.bottomsection}>
          <div className={styles.inputcontainer}>
            <input />
            <div id='submit' className={styles.submit}> ➣ </div>
          </div>
          <p className={styles.info}>
            Prevailed sincerity behaviour to so do principle mr. As departure at no propriety zealously my. On dear rent if girl view. First on smart there he sense. Earnestly enjoyment her you resources. Brother chamber ten old against. Mr be cottage so related minuter is. Delicate say and blessing ladyship exertion few margaret. Delight herself welcome against smiling its for. Suspected discovery by he affection household of principle perfectly he.
          </p>
        </div>
      </section>
    </div>
  )
}
