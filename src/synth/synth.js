function squareOscillator () {
  function createSquareOscillator () {
    var audioContext = new(window.AudioContext || window.webkitAudioContext)()
    var oscillator = audioContext.createOscillator()
    oscillator.type = 'square'
    oscillator.connect(audioContext.destination)

    return oscillator
  }
  var bpm = 60

  const getNoteDuration = (size) => (1000 * 60 / bpm) * (size || 1)

  function playNote (note) {
    var oscillator = createSquareOscillator()
    oscillator.frequency.value = note.frequency
    oscillator.start()

    setTimeout(function () {
      oscillator.stop()
    }, getNoteDuration(note.size))
  }

  function playMelody (noteList) {
    var wait = 0
    noteList.forEach(function (note) {
      var duration = getNoteDuration(note.size)
      setTimeout(function () { playNote(note) }, wait)
      wait = wait + duration
    })
  }

  function setBPM (value) {
    bpm = value
  }

  return { playNote, playMelody, setBPM }
}

var x = squareOscillator()
var cScale = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25]

export function rollingInTheDeep() {
  var synthetizer = squareOscillator()
  synthetizer.setBPM(120)
  synthetizer.playMelody([
    { frequency: 329.63 },
    { frequency: 392.00 },
    { frequency: 329.63 },
    { frequency: 392.00 },
    { frequency: 329.63 },
    { frequency: 392.00 },
    { frequency: 440.00, size: 5 },
    { frequency: 392.00 },
    { frequency: 440.00, size: 3 },
    { frequency: 0 },
    { frequency: 329.63 },
    { frequency: 392.00 },
    { frequency: 329.63 },
    { frequency: 392.00 },
    { frequency: 329.63 },
    { frequency: 392.00 },
    { frequency: 440.00, size: 5 },
    { frequency: 493.88 },
    { frequency: 392.00, size: 3 },
    { frequency: 0 }
  ])
}


export function playCMajorScale () {
  cScale.forEach(function (note, i) {
    setTimeout(function () { x.playNote(note) }, i * 1000)
  })
}

export function playCChord () {
  x.playNote({ frequency: cScale[0]}, 2000) // tonic
  x.playNote({ frequency: cScale[2]}, 2000) // major third
  x.playNote({ frequency: cScale[4]}, 2000) // major fifth
}
