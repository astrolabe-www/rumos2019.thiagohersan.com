const menuOptions = document.getElementsByClassName('menu-option');
const contentTabs = document.getElementsByClassName('content-tab');

function clearMenuSelection() {
  for(let i = 0; i < menuOptions.length; i++) {
    menuOptions[i].classList.remove('selected');
  }
  for(let i = 0; i < contentTabs.length; i++) {
    contentTabs[i].style.opacity = '0';
    contentTabs[i].style.height = '0';
  }
}

function selectThisTab() {
  clearMenuSelection();

  this.classList.add('selected');
  const tabTag = this.innerHTML.substring(0, 4).toLowerCase();
  const tabDiv = document.getElementsByClassName('content-' + tabTag)[0];

  setTimeout(function() {
    tabDiv.style.height = tabDiv.scrollHeight + 'px';
  }, 600);

  setTimeout(function() {
    tabDiv.style.opacity = '1';
  }, 900);
}

window.onload = function() {
  for(let i = 0; i < menuOptions.length; i++) {
    menuOptions[i].onclick = selectThisTab;
  }
  menuOptions[0].click();
}
