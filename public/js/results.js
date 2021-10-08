/**
 * Populate chart
 */
 function populateChart(election) {
    // Get the candidates
    let candidates = [];
    if (election.candidates.length > 0) {
      candidates = election.candidates.map((item) => `${item.firstName} ${item.lastName}`);
    }

// Create bar chart
createBarChart({
    selector: `chart-${election._id}`,
    label: 'Votes',
    labels: candidates,
    data: votes,
  });
}