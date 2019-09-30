var nav = document.querySelector('.nav-content');
nav.addEventListener('click', onTabClick, false);

function onTabClick(event) {
  let activeTab = document.querySelectorAll('.active');

  activeTab.forEach(function (e) {
    e.className = e.className.replace('active', '');
  });
  
  event.target.className += ' active';
  document.getElementById(event.target.dataset.target).className += ' active';  
}