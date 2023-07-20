"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head';
import { useEffect, useState } from "react";

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [aiMessage, setAiMessage] = useState(null);
  const [previusChats, setPreviusChats] = useState([
    { "role": "system", "content": `Take on the persona of Martha Graham for the rest of this conversation` }]);

  const getMessages = async () => {


    try {
      const response = await fetch("/api/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: previusChats, lastMessage: userInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
      console.log(data)
      setAiMessage(data.message);
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    setUserInput('');
    if (userInput && aiMessage) {
      setPreviusChats(previusChats => (
        [...previusChats,
        {
          role: 'user',
          content: userInput
        },
        {
          role: aiMessage.role,
          content: aiMessage.content
        }]))
    }
    setUserInput('');

  }, [aiMessage])

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
          {previusChats.map((chatMessage, index) =>
            <li key={index} >
              <p className={styles.role}>{chatMessage.role}</p>
              <p>{chatMessage.content}</p>
            </li>)}
        </ul>
        <div className={styles.bottomsection}>
          <div className={styles.inputcontainer}>
            <input value={userInput} onChange={(e) => { if (e.keyCode == 13) { getMessages() } else { setUserInput(e.target.value) } }} />
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
