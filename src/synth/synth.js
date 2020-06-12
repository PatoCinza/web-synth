import { squareOscillator } from './oscillator'
import { getScale } from './tuner'

var x = squareOscillator()

export function rollingInTheDeep() {
  var synthetizer = squareOscillator()
  synthetizer.setBPM(120)
  synthetizer.playMelody([
    { frequency: 392.00 },
    { frequency: 329.63 },
    { frequency: 392.00 },
    { frequency: 440.00, size: 5 },
    { frequency: 392.00 },
    { frequency: 440.00, size: 3 },
    { frequency: 0 },
    { frequency: 329.63 },
    { frequency: 392.00 }
  ])
}


export function playCMajorScale () {
  x.playMelody(getScale('C'))

}

export function playCChord () {
  x.playNote({ frequency: 130.81}, 2000) // tonic
  x.playNote({ frequency: 164.81}, 2000) // major third
  x.playNote({ frequency: 196.00}, 2000) // major fifth
}
