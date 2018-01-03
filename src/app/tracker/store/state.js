const state = {
  ui: {
    concentration: {
      showModal: false,
      saveDC: 0,
    }
  },
  encounters: {
    byId: {
      1: {
        name: '4 Kobolds',
        creatures: [
          { name: 'Kobold', count: 4, hp: '1d4+10', initiative: '1d20+2' }
        ]
      },
      2: {
        name: 'Tiamat!',
        creatures: [
          { name: 'Tiamat', count: 1, hp: '635', initiative: '1d20' }
        ]
      }
    },
    ids: [1, 2]
  },
  players: {
    byId: {
      1: { name: 'George', concentrating: false },
      2: { name: 'Fred', concentrating: false },
    },
    ids: [1, 2]
  },
  currentEncounter: {
    name: 'Tiamat!',
    initiative: 0,
    round: 0,
    secondsPassed: 0,
    activePlayers: [1, 2],
    creatures: {
      1: { name: 'Tiamat', hp: { current: 500, max: 635 }, active: true, concentrating: false }
    }
  }
};