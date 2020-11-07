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

export function badRomance() {
  const synthetizer = squareOscillator()
  synthetizer.setBPM(120)
  synthetizer.playMelody([
    { note: 'C', octave: 3, size: 1 },
    { note: 'D', octave: 3, size: 1 },
    { note: 'E', octave: 3, size: 1 },
    { note: 'C', octave: 3, size: 1 },
    { note: 'F', octave: 3, size: 1.5 },
    { note: 'F', octave: 3, size: 1 },
    { note: 'E', octave: 3, size: 1 },
    { note: 'F', octave: 3, size: 1 },
    { note: 'E', octave: 3, size: 1 },
    { note: 'D', octave: 3, size: 1 },
    { frequency: 0},
    { note: 'B', octave: 3, size: 1 },
    { note: 'C', octave: 3, size: 1 },
    { note: 'D', octave: 3, size: 1 },
    { note: 'E', octave: 3, size: 1 },
    { frequency: 0 },
    { note: 'E', octave: 3, size: 1 },
    { note: 'F', octave: 3, size: 1 },
    { note: 'E', octave: 3, size: 1 },
    { note: 'D', octave: 3, size: 1 },
    { note: 'C', octave: 3, size: 1 }
  ])
}


export function playMajorScale (scale) {
  x.playMelody(getScale(scale))

}

export function playCChord () {
  const CChordNote = [
    { note: "C", octave: 3 }, //tonic
    { note: "E", octave: 3 }, //third
    { note: "G", octave: 3 }, // fifth
  ]
  x.playChord(CChordNote)
}
