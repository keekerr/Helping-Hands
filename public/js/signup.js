const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const fname = document.querySelector('#fname').value.trim();
    const lname = document.querySelector('#lname').value.trim();
    const birthday = document.querySelector('#birthday').value.trim();
    const date = document.querySelector('#state').value.trim();
    const userZip = document.querySelector('#userzip').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (fname && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  