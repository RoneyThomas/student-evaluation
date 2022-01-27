import Head from 'next/head'
import Evalaute from '../componenets/evalaute';
import SignIn from '../componenets/signIn';
import { useState } from 'react'

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comment, setComment] = useState("");

  const validateSignIn = (event) => {
    event.preventDefault()
    if (email !== "" && password !== "") {
      setLoggedIn(true);
    }
  }

  return (
    <>
      <Head>
        <title>Student Evaluation</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Student Evaluations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container" id='main' data-theme="dark">

        <article className="grid">
          {loggedIn ?
            <Evalaute email={email} comment={comment} onChangeEmail={(event) => setEmail(event.target.value)} onChangeComment={(event) => setComment(event.target.value)} /> :
            <SignIn email={email} password={password} onChangeEmail={(event) => setEmail(event.target.value)} onChangePassword={(event) => setPassword(event.target.value)} validateSignIn={validateSignIn} />
          }
        </article>
      </main>
    </>
  )
}
