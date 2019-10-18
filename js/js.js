let menuOptions;
let contentTabs;
let projStageTitles;
let projDiagramDiv;

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

function selectThisStage() {
  const stageName = this.innerHTML.toLowerCase();
  const imgFilename = `2019-rumos-hersan_${stageName}.png`;
  projDiagramDiv.style['background-image'] = `url(../media/images/${imgFilename})`;
}

window.onload = function() {
  menuOptions = document.getElementsByClassName('menu-option');
  contentTabs = document.getElementsByClassName('content-tab');
  projStageTitles = document.getElementsByClassName('proj-stage-title');
  projDiagramDiv = document.getElementsByClassName('proj-diagram')[0];

  for(let i = 0; i < menuOptions.length; i++) {
    menuOptions[i].onclick = selectThisTab;
  }
  menuOptions[0].click();

  for(let i = 0; i < projStageTitles.length; i++) {
    projStageTitles[i].onclick = selectThisStage;
  }
}
