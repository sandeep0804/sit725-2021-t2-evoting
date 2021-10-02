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