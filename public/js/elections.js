/**
 * Run on page load
 */
 getElections();

 /**
  * Elections
  */
 function getElections() {
   fetch('/api/elections')
     .then((res) => res.json())
     .then((data) => {
       populateTable(data);
     })
     .catch((ex) => {
       toast.error(ex.message);
     });
 }
 
 /**
  *  Table  of election details
  */
 function populateTable(data) {
   const table = document.getElementById('tableElections');
   if (data.length > 0) {
     table.innerHTML = data.map((item, index) => getTableRow(item, index)).join('');
   } else {
     table.innerHTML = getTableEmptyRow();
   }
 }
 
 /**
 * Row template table
 */
function getTableRow(data, index) {
    const getSelectedOption = (value) => (value === data.status ? ' selected' : '');
  
    return `
      <tr>
        <td>${index + 1}</td>
        <td>${data.name}</td>
        <td>${data.date}</td>
        <td>
          <select class="form__control" onchange="handleChangeElectionStatus(event, '${data._id}')">
          <option value="1"${getSelectedOption(1)}>Running</option>
            <option value="0"${getSelectedOption(0)}>Closed</option>
          </select>
        </td>
        <td>
          <div class="table__actions">
            <button type="button" class="btn btn--link" onclick="handleDeleteElection('${data._id}')">Delete</button>
          </div>
        </td>
      </tr>
    `;
  }
  
  /**
   * Empty row template table
   */
  function getTableEmptyRow() {
    return `
      <tr>
        <td colspan="5" class="text-muted text-center">No elections available</td>
      </tr>
    `;
  }
