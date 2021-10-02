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
  *  Table with election details
  */
 function populateTable(data) {
   const table = document.getElementById('tableElections');
   if (data.length > 0) {
     table.innerHTML = data.map((item, index) => getTableRow(item, index)).join('');
   } else {
     table.innerHTML = getTableEmptyRow();
   }
 }
 
 