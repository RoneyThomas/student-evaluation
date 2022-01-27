import { useRouter } from 'next/router';

export default function ThankYou() {
  const router = useRouter();
  const { email, comment } = router.query;

  return (
    <>
      <main className="container" id='main' data-theme="dark">
        <h1>Thank You {email}</h1>
        <h2>We appreciate your comments: {comment}</h2>
      </main>
    </>
  )
}
