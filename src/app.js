import zerd from './zerd.json';
import { sceneImages } from './scenes.js';

const question = document.getElementById('question');
const answer = document.getElementById('answer');
const sceneImage = document.getElementById('sceneImage');

// Build answer map for efficient lookup
const answerMap = buildAnswerMap();

function buildAnswerMap() {
  const map = {};
  zerd.forEach((item) => {
    map[item.if_answer.toLowerCase()] = item;
  });
  return map;
}

function loadSceneImage(settingId) {
  const imageSVG = sceneImages[settingId] || sceneImages[1];
  sceneImage.innerHTML = imageSVG;
}

// Load initial scene image
loadSceneImage(1);

answer.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const userInput = answer.value.trim().toLowerCase();
    setQuestion(userInput);
  }
});

function setQuestion(userInput) {
  // Check for special case: wake up
  if (userInput === 'wake up') {
    answer.value = '';
    question.innerHTML = 'You rouse, sputtering.';
    loadSceneImage(1);
    return;
  }

  // Look up answer in the map
  const dialogItem = answerMap[userInput];
  if (dialogItem) {
    answer.value = '';
    question.innerHTML = dialogItem.then_question;
    loadSceneImage(dialogItem.setting_id);

    // Handle special logic for specific answers
    if (userInput === 'move toward the light') {
      setSiamorClick();
    }
    return;
  }

  // No valid answer found
  answer.value = '';
  question.innerHTML = 'The wind blows, and the stars twinkle. You curl up under a tree for a long winter\'s nap. You begin to snore. A late to hibernate squirrel takes a sniff of the air and then runs up a tree. Nighty night.';
  loadSceneImage(1);
}

/**
 * Setup click handlers for Siamor scenario buttons
 */
function setSiamorClick() {
  const yesButton = document.getElementById('siamor-yes');
  const noButton = document.getElementById('siamor-no');

  if (yesButton) {
    yesButton.addEventListener('click', handleSiamor);
  }
  if (noButton) {
    noButton.addEventListener('click', handleSiamor);
  }
}

/**
 * Handle clicks on Siamor buttons
 */
function handleSiamor() {
  setQuestion(this.id);
}
