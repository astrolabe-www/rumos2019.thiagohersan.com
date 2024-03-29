let menuOptions;
let contentTabs;
let projDiagramDiv;
let projStageTitles;
let projStageTexts

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

function clearProjStageSelection() {
  for(let i = 0; i < projStageTexts.length; i++) {
    projStageTexts[i].style.height = '0';
    projStageTexts[i].style.opacity = '0';
  }
}

function selectThisStage() {
  const stageName = this.innerHTML.toLowerCase() || 'captar';
  const stageTag = stageName.substring(0, 4);
  const stageDiv = document.getElementsByClassName('proj-stage-text-' + stageTag)[0];

  const justCloseOpenedDiv = (stageDiv.style.opacity === '1');

  const imgFilename = `diagram${(justCloseOpenedDiv) ? '' : '_'+stageName}.png`;
  projDiagramDiv.style['background-image'] = `url(../media/images/project-diagram/${imgFilename})`;

  clearProjStageSelection();

  if (!justCloseOpenedDiv) {
    stageDiv.style.opacity = '1';
    stageDiv.style.height = stageDiv.scrollHeight + 'px';
  }

  setTimeout(function() {
    const tabDiv = document.getElementsByClassName('content-proj')[0];
    tabDiv.style.height = tabDiv.scrollHeight + 'px';
  }, 600);
}

window.onload = function() {
  menuOptions = document.getElementsByClassName('menu-option');
  contentTabs = document.getElementsByClassName('content-tab');

  projDiagramDiv = document.getElementsByClassName('proj-diagram')[0];
  projStageTitles = document.getElementsByClassName('proj-stage-title');
  projStageTexts = document.getElementsByClassName('proj-stage-text');

  for(let i = 0; i < menuOptions.length; i++) {
    menuOptions[i].onclick = selectThisTab;
  }
  menuOptions[0].click();

  for(let i = 0; i < projStageTitles.length; i++) {
    projStageTitles[i].onclick = selectThisStage;
  }
  projStageTitles[0].click();

  document.getElementById('home-loader').style.opacity = '0';
  setTimeout(function() {
    document.getElementById('home-loader').style.display = 'none';
  }, 100);

}
