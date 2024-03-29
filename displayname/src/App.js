import React, { useState } from 'react';

const App = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const[isSubmitted, setIsSubmitted] = useState(false)
  const[fullName, setFullName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setIsSubmitted(!isSubmitted)

    setFullName(firstName+" "+lastName);

    // Check if both first name and last name are provided
    // if (firstName.trim() === '' || lastName.trim() === '') {
    //   alert('Both First Name and Last Name are required.');
    //   return;
    // }

    // Your logic to handle form submission or other actions
    // For example, you can send the form data to a server or update state
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label >
          First Name:
          <input type="text" name='firstName' id='firstName' value={firstName} onChange={handleFirstNameChange} required />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" name='lastName' id='lastName' value={lastName} onChange={handleLastNameChange} required />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {isSubmitted && <div>{`Full Name: ${fullName}`}</div>}
    </div>
  );
};

export default App;
