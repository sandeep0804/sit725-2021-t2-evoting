/**
 * Populate chart
 */
 function populateChart(election) {
    // Get the candidates
    let candidates = [];
    if (election.candidates.length > 0) {
      candidates = election.candidates.map((item) => `${item.firstName} ${item.lastName}`);
    }

 // Get the votes
 let votes = [];
 if (election.candidates.length > 0) {
   election.candidates.forEach((candidate) => {
     let totalVotes = 0;
     election.votes.forEach((vote) => {
       if (vote.candidate === candidate._id) {
         totalVotes++;
       }
     });
     votes.push(totalVotes);
   });
 }
 
// Create bar chart
createBarChart({
    selector: `chart-${election._id}`,
    label: 'Votes',
    labels: candidates,
    data: votes,
  });
}
