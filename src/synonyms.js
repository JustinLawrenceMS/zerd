// Synonym and phrase mapping for user input
export const synonyms = {
  // Forest exploration
  'look': 'look around',
  'look around': 'look around',
  'observe': 'look around',
  'observe surroundings': 'look around',
  'examine': 'look around',
  'check surroundings': 'look around',
  'what do i see': 'look around',
  'scan': 'look around',

  // Door interactions
  'open': 'open the door',
  'open the door': 'open the door',
  'try to open': 'open the door',
  'try opening': 'open the door',
  'unlock': 'open the door',
  'enter': 'open the door',

  // Breaking/forcing
  'break': 'break down the door',
  'break down': 'break down the door',
  'break down the door': 'break down the door',
  'force': 'break down the door',
  'force open': 'break down the door',
  'smash': 'break down the door',
  'break it': 'break down the door',
  'kick': 'kick him',
  'kick him': 'kick him',
  'attack': 'kick him',
  'hit him': 'kick him',
  'punch': 'kick him',

  // Light/wizard
  'move toward the light': 'move toward the light',
  'go toward the light': 'move toward the light',
  'follow light': 'move toward the light',
  'follow the light': 'move toward the light',
  'head toward light': 'move toward the light',
  'go to light': 'move toward the light',

  // Waking up
  'wake up': 'wake up',
  'wake': 'wake up',
  'wake up!': 'wake up',
  'awake': 'wake up',
  'rouse': 'wake up',

  // Searching/investigating
  'search': 'search the ground',
  'search the ground': 'search the ground',
  'look for clues': 'search the ground',
  'find clues': 'search the ground',
  'investigate': 'search the ground',
  'examine ground': 'search the ground',
  'check ground': 'search the ground',

  // Following creatures
  'follow': 'follow the flying creature',
  'follow the flying creature': 'follow the flying creature',
  'chase': 'follow the flying creature',
  'pursue': 'follow the flying creature',
  'track': 'follow the flying creature',
  'follow creature': 'follow the flying creature',

  // Using items
  'use the key': 'use the key',
  'use key': 'use the key',
  'unlock door': 'use the key',
  'try key': 'use the key',

  // Listening
  'listen': 'listen at the door',
  'listen at the door': 'listen at the door',
  'listen at door': 'listen at the door',
  'eavesdrop': 'listen at the door',
  'hear': 'listen at the door',

  // Dungeon entry
  'enter the dungeon': 'enter the dungeon',
  'enter dungeon': 'enter the dungeon',
  'go in': 'enter the dungeon',
  'go down': 'enter the dungeon',
  'descend': 'enter the dungeon',

  // Tunnel choices
  'go left': 'go left',
  'left': 'go left',
  'left tunnel': 'go left',
  'take left': 'go left',

  'go right': 'go right',
  'right': 'go right',
  'right tunnel': 'go right',
  'take right': 'go right',

  'go straight': 'go straight',
  'straight': 'go straight',
  'center': 'go straight',
  'middle': 'go straight',
  'center tunnel': 'go straight',

  // Combat
  'fight': 'fight',
  'attack': 'fight',
  'battle': 'fight',
  'combat': 'fight',
  'defend': 'fight',

  'run': 'run',
  'flee': 'run',
  'run away': 'run',
  'escape': 'run',
  'retreat': 'run',

  // Sneaking
  'sneak': 'sneak toward the crystal',
  'sneak toward the crystal': 'sneak toward the crystal',
  'sneak carefully': 'sneak toward the crystal',
  'approach quietly': 'sneak toward the crystal',
  'tiptoe': 'sneak toward the crystal',
  'creep': 'sneak toward the crystal',

  // Treasure
  'take treasure': 'take the treasure',
  'take the treasure': 'take the treasure',
  'grab treasure': 'take the treasure',
  'steal': 'take the treasure',
  'loot': 'take the treasure',

  // Bridge
  'cross the bridge': 'cross the bridge',
  'cross bridge': 'cross the bridge',
  'walk across': 'cross the bridge',
  'go across': 'cross the bridge',

  // Door/Chamber
  'open the door': 'open the door',
  'enter': 'open the door',

  // Crystal
  'take the crystal': 'take the crystal',
  'take crystal': 'take the crystal',
  'grab crystal': 'take the crystal',
  'claim': 'take the crystal',

  // Return
  'return to siamor': 'return to siamor',
  'return': 'return to siamor',
  'go back': 'return to siamor',
  'head back': 'return to siamor',

  // Keeping crystal
  'keep the crystal': 'keep the crystal',
  'keep crystal': 'keep the crystal',
  'keep it': 'keep the crystal',
  'pocket': 'keep the crystal',

  // Siamor dialogue
  'yes': 'siamor-yes',
  'siamor-yes': 'siamor-yes',
  'siamor yes': 'siamor-yes',
  'i agree': 'siamor-yes',
  'agree': 'siamor-yes',
  'accept': 'siamor-yes',
  'okay': 'siamor-yes',
  'ok': 'siamor-yes',
  'sure': 'siamor-yes',
  'alright': 'siamor-yes',
  'i will': 'siamor-yes',
  'let\'s go': 'siamor-yes',

  'no': 'siamor-no',
  'siamor-no': 'siamor-no',
  'siamor no': 'siamor-no',
  'i disagree': 'siamor-no',
  'disagree': 'siamor-no',
  'refuse': 'siamor-no',
  'decline': 'siamor-no',
  'nope': 'siamor-no',
  'nah': 'siamor-no',
  'not interested': 'siamor-no',
};

/**
 * Normalize user input to find matching synonyms
 * @param {string} input - Raw user input
 * @returns {string} - Normalized input or original if no synonym found
 */
export function normalizeInput(input) {
  const cleaned = input.toLowerCase().trim();
  return synonyms[cleaned] || cleaned;
}
