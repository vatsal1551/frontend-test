import React, { useState } from "react";
import "./styles.css";

// Instructions for Candidate:
// 1. Clone this repo
// 2. Add an input field to accept an email.
// 3. Add a button that passes the input value to the parent component.
// 4. In the parent component, add logic to send the value to a backend with a POST request to
//the following url https://webhook.site/30b1bdd1-b233-4262-b3f0-918cb9d94e71. Along with the email, send your github username in the JSON.
// 5. Add styling to the button (Button) and input (Input) using the ShadCN Component library here: https://ui.shadcn.com/docs/components/input
// 6. Please return your video, along with your cloned github repo link.


const EmailForm = ({ setEmailValue, handleSubmit }) => {
  return (
    <>
      <div>Email form</div>
      <div>
        <input className='email-filled' onChange={(e) => setEmailValue(e.target.value)} type="email" placeholder="Email" />
      </div>
      <div>
        <button className='submit-button' onClick={() => handleSubmit()} type="submit">
          Submit
        </button>
      </div>
    </>
  )
};

export default function App() {
  const [emailValue, setEmailValue] = useState('')

  const handleSubmit = async () => {
    const gmailStr = '@gmail.com'
    const isValidEmail = emailValue.includes(gmailStr)
    if (!isValidEmail) return alert('Please Enter a Valid Email')

    const payload = { email: emailValue, gitHubUserName: 'vatsal1551' }

    await fetch('https://webhook.site/30b1bdd1-b233-4262-b3f0-918cb9d94e71', {
      method: 'post',
      body: JSON.stringify(payload)
    })
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <EmailForm setEmailValue={setEmailValue} handleSubmit={handleSubmit} />
    </div>
  );
}
