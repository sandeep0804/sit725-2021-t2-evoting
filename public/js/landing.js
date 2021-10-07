/**
 * To Handle voter login
 */
function handleLogin(event) {
  
  event.preventDefault();

  
  fetch('/api/voters/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      studentId: event.target.loginStudentId.value,
      password: event.target.loginPassword.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        toast.error(data.error);
      } else {
        sessionStorage.setItem('voter', JSON.stringify(data));
        window.location = '/voting.html';
      }
    })
    .catch((ex) => {
      toast.error(ex.message);
    })
    .finally(() => {
      event.target.reset();
    });
}