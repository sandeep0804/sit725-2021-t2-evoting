/**
 * Web-Socket
 */
const socket = io();

/**
 * Run on page load
 */
checkVoter();

/**
 * voter existence
 */
function checkVoter() {
  if (getVoter() === null) {
    // Voter not logged in
    window.location = '/';
  } else {
    // Show voter info
    const { firstName, lastName } = getVoter();
    document.getElementById('voterInfo').textContent = `${firstName} ${lastName}`;
    // Get running elections
    getRunningElections();
  }
}

/**
 * All running elections details
 */
function getRunningElections() {
  fetch(`/api/elections/running`)
    .then((res) => res.json())
    .then((data) => {
      populateContainer(data);
    })
    .catch((ex) => {
      toast.error(ex.message);
    });
}