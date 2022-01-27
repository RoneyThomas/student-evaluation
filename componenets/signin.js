export default function SignIn(props) {
  return (
    <div>
      <hgroup>
        <h1>Sign in</h1>
        <h2>Sign to evalute the course</h2>
      </hgroup>
      <form onSubmit={props.validateSignIn} className="form">
        <input type="text" name="login" value={props.email} onChange={(event) => props.onChangeEmail(event)} placeholder="Login" aria-label="Login" autoComplete="nickname" required />
        <input type="password" name="password" value={props.password} onChange={(event) => props.onChangePassword(event)} placeholder="Password" aria-label="Password" autoComplete="current-password" required />
        <button type="submit" className="contrast">Login</button>
      </form>
    </div>);
}