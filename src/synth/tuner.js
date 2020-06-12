import { octave } from 'constants/octave'
import { scaleProgression } from 'constants/scale-progression'
import { ATuning } from 'constants/tuning'

const getNoteFrequency = (ref, difference) => Number((ref * Math.pow(1.059463094359, difference)).toFixed(2))

const getTonic = (note, reference = 3) => {
  const refFrequency = ATuning[reference]
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
