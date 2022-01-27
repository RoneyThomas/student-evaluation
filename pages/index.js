import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comment, setComment] = useState("");

  const router = useRouter();

  const validateSignIn = (event) => {
    event.preventDefault()
    if (email !== "" && password !== "") {
      setLoggedIn(true);
    }
  }

  const submitEvaluation = (event) => {
    event.preventDefault()
    if (email !== "") {
      router.push({
        'pathname': "/thankyou",
        'query': { email, comment }
      })
    }
  }

  const signIn = (
    <div>
      <hgroup>
        <h1>Sign in</h1>
        <h2>Sign to evalute the course</h2>
      </hgroup>
      <form onSubmit={validateSignIn} className="form">
        <input type="text" name="login" value={email} onChange={event => setEmail(event.target.value)} placeholder="Login" aria-label="Login" autoComplete="nickname" required />
        <input type="password" name="password" value={password} onChange={event => setPassword(event.target.value)} placeholder="Password" aria-label="Password" autoComplete="current-password" required />
        <button type="submit" className="contrast">Login</button>
      </form>
    </div>);

  const evalaute = (
    <div>
      <hgroup>
        <h1>Course Evaluation</h1>
      </hgroup>
      <form className="form" onSubmit={submitEvaluation}>
        <hgroup>
          <label htmlFor="coursecode">
            Course Code
            <input type="text" id="coursecode" name="coursecode" required />
          </label>
          <label htmlFor="coursename">
            Course Name
            <input type="text" id="coursename" name="coursename" required />
          </label>
          <label htmlFor="coursecomments">
            Course Comments
          </label>
          <textarea type="text" id="coursecomments" value={comment} onChange={event => setComment(event.target.value)} name="coursecomments" required />
          <label htmlFor="email">
            Email address
            <input type="email" id="email" name="email" value={email} onChange={event => setEmail(event.target.value)} placeholder="Email address" required />
          </label>
        </hgroup>
        <button type="submit">Submit</button>
      </form>
    </div>
  );

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
          {loggedIn ? evalaute : signIn}
        </article>
      </main>
    </>
  )
}
