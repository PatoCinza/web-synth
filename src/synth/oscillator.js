export function squareOscillator () {
  function createSquareOscillator () {
    const audioContext = new(window.AudioContext || window.webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    oscillator.type = 'square'
    oscillator.connect(audioContext.destination)

    return oscillator
  }
  let bpm = 60

  const getNoteDuration = (size) => (1000 * 60 / bpm) * (size || 1)

  function playNote (note) {
    const oscillator = createSquareOscillator()
    oscillator.frequency.value = note.frequency
    oscillator.start()

    setTimeout(function () {
      oscillator.stop()
    }, getNoteDuration(note.size))
  }

  function playMelody (noteList) {
    let wait = 0
    noteList.forEach(function (note) {
      const duration = getNoteDuration(note.size)
      setTimeout(function () { playNote(note) }, wait)
      wait = wait + duration
    })
  }

  function setBPM (value) {
    bpm = value
  }

  return { playNote, playMelody, setBPM }
}
