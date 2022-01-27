import { useRouter } from 'next/router'

export default function Evalaute(props) {
  const router = useRouter();
  const submitEvaluation = (event, email, comment) => {
    event.preventDefault()
    if (email !== "") {
      router.push({
        'pathname': "/thankyou",
        'query': { email, comment }
      })
    }
  }
  return (
    <div>
      <hgroup>
        <h1>Course Evaluation</h1>
      </hgroup>
      <form className="form" onSubmit={event => submitEvaluation(event, props.email, props.comment)}>
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
          <textarea type="text" id="coursecomments" value={props.comment} onChange={event => props.onChangeComment(event)} name="coursecomments" required />
          <label htmlFor="email">
            Email address
            <input type="email" id="email" name="email" value={props.email} onChange={event => props.onChangeEmail(event)} placeholder="Email address" required />
          </label>
        </hgroup>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}