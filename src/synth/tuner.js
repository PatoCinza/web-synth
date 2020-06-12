const AReference = {
  0: 27.50,
  1: 55,
  2: 110,
  3: 220,
  4: 440,
  5: 880,
  6: 1760,
  7: 3520,
  8: 7040,
}

const scaleProgression = {
  major: [0, 2, 4, 5, 7, 9, 11, 12],
  minor: [0, 2, 3, 5, 7, 8, 10, 12]
}

const octave = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']

const getNoteFrequency = (ref, difference) => Number((ref * Math.pow(1.059463094359, difference)).toFixed(2))

const getTonic = (note, reference = 3) => {
  const refFrequency = AReference[reference]
  const startingPoint = octave.indexOf(note) - octave.indexOf('A')

  return getNoteFrequency(refFrequency, startingPoint)
}

export const getScale = (tonic = 'C', type = 'major', reference = 3) => {
  const progression = scaleProgression[type] || scaleProgression['major']
  const tone = getTonic(tonic, reference)
  return progression.map(step => ({
    frequency: getNoteFrequency(tone, step),
    label: octave[(octave.indexOf(tonic) + step) % 12]
  }))
}
