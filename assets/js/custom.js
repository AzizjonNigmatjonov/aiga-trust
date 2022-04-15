AOS.init();
window.onload = function() {
  const el = document.getElementById('overlay');
  el.style.display = 'none';
};
const currentLocation = location.href;
const navItem = document.querySelectorAll('.nav-link');
const navItemLength = navItem.length;
for (let i = 0; i < navItemLength; i++) {
  if (navItem[i].href === currentLocation) {
    navItem[i].classList.add('active');
  }
}