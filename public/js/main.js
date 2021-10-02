/*
Run on page load
 */
initTabs();

/*
Modals
 */
function modal(selector) {
  const element = document.getElementById(selector);
  return {
    open: () => element.classList.add('show'),
    close: () => element.classList.remove('show'),
  };
}

/*
Delete prompt
*/
function promptDelete(title) {
  return Swal.fire({
    title: title,
    text: 'Are you sure you want to delete this?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    confirmButtonText: 'Delete',
  });
}

/*
Tabs
*/
function initTabs() {
  document.querySelectorAll('.tabs').forEach((tabs) => {
    tabs.onclick = (event) => {
      if (event.target.classList.contains('tabs__menu__item')) {
        // Toggle
        const tabMenuItems = tabs.querySelectorAll('.tabs__menu__item');
        tabMenuItems.forEach((element) => element.classList.remove('active'));
        event.target.classList.add('active');
        // Toggle
        const tabPanes = tabs.querySelectorAll('.tabs__pane');
        tabPanes.forEach((element) => element.classList.remove('active'));
        const target = event.target.dataset.target;
        tabs.querySelector(target).classList.add('active');
      }
    };
  });
}
