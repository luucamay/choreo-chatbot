"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head';
import { useState } from "react";

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [previusChats, setPreviusChats] = useState("");

  const getMessages = async () => {
    try {
      const response = await fetch("/api/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

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
            <input value={userInput} onChange={(e) => { setUserInput(e.target.value) }} />
            <div id='submit' className={styles.submit} onClick={getMessages}> ➣ </div>
          </div>
          <p className={styles.info}>
            Prevailed sincerity behaviour to so do principle mr. As departure at no propriety zealously my. On dear rent if girl view. First on smart there he sense. Earnestly enjoyment her you resources. Brother chamber ten old against. Mr be cottage so related minuter is. Delicate say and blessing ladyship exertion few margaret. Delight herself welcome against smiling its for. Suspected discovery by he affection household of principle perfectly he.
          </p>
        </div>
      </section>
    </div>
  )
}
