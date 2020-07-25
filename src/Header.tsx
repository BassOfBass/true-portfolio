import React from 'react';
import { sunflowerMandala } from './img/imgObjects';

import "./Header.scss";

export function Header() {
  return (
    <header>
      <h1>
        Peter's corner
          <img src={sunflowerMandala.png} alt="sunflower logo" />
      </h1>
      {
        (process.env.NODE_ENV === "test" || process.env.NODE_ENV === "development") && (
          <small>The application is running in <b>{process.env.NODE_ENV}</b> mode.</small>
        )
      }
      <nav>

        <ul>
          <li><a href="#">Section 1</a></li>
          <li><a href="#">Section 2</a></li>
          <li><a href="#">Section 3</a></li>
          <li><a href="#">Section 4</a></li>
          <li><a href="#">Section 5</a></li>
          <li><a href="#">Section 6</a></li>
          <li><a href="#">Section 7</a></li>
          <li><a href="#">Section 8</a></li>
          <li><a href="#">Section 9</a></li>
          <li><a href="#">Section 10</a></li>
        </ul>
      </nav>
      <LoginForm />
    </header>
  );
}

function LoginForm() {
  const [mailTel, switchMailTel] = React.useState(false);
  const [loginPane, swithLoginPane] = React.useState(false);

  // const passwordInput = document.getElementById('password');
  // const togglePasswordButton = document.getElementById('toggle-password');

  // togglePasswordButton.addEventListener("click", togglePassword);

  // function togglePassword() {
  //   if (passwordInput.type === "password") {
  //     passwordInput.type = "text";
  //     togglePasswordButton.textContent = "Hide password";
  //     togglePasswordButton.setAttribute("aria-label", "Hide password");
  //   } else {
  //     passwordInput.type = "password";
  //     togglePasswordButton.textContent = "Show password";
  //     togglePasswordButton.setAttribute("aria-label", `Show password as plaint text.\n Warning: this will display your password on the screen.`);
  //   }
  // }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <>
      <button 
        className="loginswitch" 
        type="button"
        onClick={() => swithLoginPane(!loginPane)}
      >
        {loginPane ? "Hide login" :"Show login"}
      </button>
      <form 
        className={loginPane ? "formopen" : undefined}
        id="loginform" 
        action="#" 
        method="post" 
        onSubmit={handleSubmit}
      >
        <fieldset>
          <legend>Login form</legend>
          <section>
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              inputMode="text"
              name="name"
              autoFocus={true} 
            />
          </section>
          <section>
            {
              mailTel ? ( // switch between email and tel input
                <> 
                  <label htmlFor="usertel">Phone number:</label>
                  <input
                    id="usertel"
                    type="tel"
                    name="phone"
                    inputMode="tel" 
                    required={mailTel ? true : false}
                  />
                </>
              ) : (
                <> 
                  <label htmlFor="useremail">Email:</label>
                  <input
                    id="useremail"
                    type="email"
                    inputMode="email"
                    name="email"
                    autoComplete="email"
                    required={mailTel ? false : true} 
                  />
                </>
              )
            }
            <button 
              type="button"
              onClick={() => switchMailTel(!mailTel)} 
            >
              {mailTel ? "use email" : "use phone number"}
            </button>
          </section>
          <section>
            <label 
              htmlFor="userpassword">Password:</label>
            <button 
              id="toggle-password" 
              type="button" 
              aria-label="Show password as plain text. Warning: this will display your password on the screen."
            >
              Show password
            </button>
            <input
              id="userpassword"
              type="password"
              name="current-password" // sign-in form only
              required={true} 
              aria-describedby="password-constrains"
            />
            <div id="password-constrains">8+ characters with a mix of letters, numbers and symbols.</div>
            <label htmlFor="newpassword">New Password:</label>
            <input
              id="newpassword"
              type="password"
              name="new-password"
              disabled={true} />
          </section>
          <a href="#">Forgot password...</a>
          <button // TODO disable once it's clicked, probably to go along with async submit
            type="submit"
            disabled={true}
          >
            Sign in
          </button>
        </fieldset>
      </form>
    </>
  );
}
