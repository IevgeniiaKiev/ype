document.getElementById('openNavMob').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('sideNav').style.width = '100%';
});

document.getElementById('closeNavMob').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('sideNav').style.width = '0';
});
