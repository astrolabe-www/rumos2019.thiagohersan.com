const menuOptions = document.getElementsByClassName('menu-option');
const contentTabs = document.getElementsByClassName('content-tab');

function clearMenuSelection() {
  for(let i = 0; i < menuOptions.length; i++) {
    menuOptions[i].classList.remove('selected');
  }
}

function selectThisTab() {
  clearMenuSelection();
  this.classList.add('selected');
  const tabTag = this.innerHTML.substring(0, 4).toLowerCase();

  for(let i = 0; i < contentTabs.length; i++) {
    if(!contentTabs[i].classList.contains('content-' + tabTag)) {
      contentTabs[i].style.opacity = '0';

      setTimeout(function() {
        contentTabs[i].style.height = '0';
        setTimeout(function() {
          contentTabs[i].style.display = 'none';
        }, 100);
      }, 200);
    }
  }

  setTimeout(function() {
    for(let i = 0; i < contentTabs.length; i++) {
      if(contentTabs[i].classList.contains('content-' + tabTag)) {
        contentTabs[i].style.height = 'auto';
        contentTabs[i].style.display = 'block';

        setTimeout(function() {
          contentTabs[i].style.opacity = '1';  
        }, 300);

      }
    }
  }, 600);
}

window.onload = function() {
  // load onclicks
  for(let i = 0; i < menuOptions.length; i++) {
    menuOptions[i].onclick = selectThisTab;
  }
  menuOptions[0].click();
}
