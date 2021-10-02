/**
 * Run on page load
 */
 getVoters();

 /**
  * All voters details
  */
 function getVoters() {
   fetch('/api/voters')
     .then((res) => res.json())
     .then((data) => {
       populateTable('tableNewVoters', 0, data);
       populateTable('tableApprovedVoters', 1, data);
       populateTable('tableRejectedVoters', -1, data);
     })
     .catch((ex) => {
       toast.error(ex.message);
     });
 }
 
 /**
  * Table
  */
  function populateTable(selector, status, data) {
     const table = document.getElementById(selector);
     if (data.length > 0) {
       const filtered = data.filter((item) => item.status === status);
       if (filtered.length > 0) {
         table.innerHTML = filtered.map((item, index) => getTableRow(item, index)).join('');
       } else {
         table.innerHTML = getTableEmptyRow();
       }
     } else {
       table.innerHTML = getTableEmptyRow();
     }
   }

   /**
 * To get details of particular row in a Table 
 */
function getTableRow(data, index) {
  const getSelectedOption = (value) => (value === data.status ? ' selected' : '');

  return `
    <tr>
      <td>${index + 1}</td>
      <td>${data.studentId}</td>
      <td>${data.firstName} ${data.lastName}</td>
      <td>${data.email}</td>
      <td>${new Date(data.createdAt).toLocaleString()}</td>
      <td>
        <div class="table__actions">
          <select class="form__control" onchange="handleChangeVoterStatus(event, '${data._id}')">
            <option value="0"${getSelectedOption(0)}>Pending</option>
            <option value="1"${getSelectedOption(1)}>Approved</option>
            <option value="-1"${getSelectedOption(-1)}>Rejected</option>
          </select>
          <button type="button" class="btn btn--link" onclick="handleDeleteVoter('${data._id}')">Delete</button>
        </div>
      </td>
    </tr>
  `;
}

/**
 * Empty row from Table 
 */
function getTableEmptyRow() {
  return `
    <tr>
      <td colspan="6" class="text-muted text-center">No voters available</td>
    </tr>
  `;
}