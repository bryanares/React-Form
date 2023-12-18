import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Img-Div">
      <img className="Profile-Img"
        src="https://ew.com/thmb/D0xnpFhgACNWiVqERXrT8jrEphQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/simp_homersingle08_f_hires2-2000-cf09d1b1345c4e66b57bced2bebbe492.jpg"
        alt='Welp' />

      <h1 className="h1">Log In</h1>
    </div>
  );
}

export default function Login() {
  return (

    <section>
      <App></App>
      <div>
        <form>
          <label for="Username"> Username </label>
          <input type="text" id="username" name="username" />
          <label for="Password"> Password </label>
          <input type="text" id="password" name="password" />
        </form>
      </div>
    </section>
  );
}