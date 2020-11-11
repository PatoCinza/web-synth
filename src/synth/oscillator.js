import { getFrequencyFromNote } from './tuner'

export function squareOscillator () {
  function createSquareOscillator () {
    const audioContext = new(window.AudioContext || window.webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    oscillator.type = 'sine'
    oscillator.gain = 0.5
    oscillator.connect(audioContext.destination)

    return oscillator
  }

  function createCustomOscillator () {
    const audioContext = new(window.AudioContext || window.webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const real = [
      0,
      1,
      0.8144329896907216,
      0.20618556701030927,
      0.020618556701030927,
    ];
    const imag = real.map(() => 0)

    const wave = audioContext.createPeriodicWave(Float32Array.from(real), Float32Array.from(imag), { disableNormalization: true })
    oscillator.setPeriodicWave(wave)
    oscillator.connect(audioContext.destination)

    return oscillator
  }

  let bpm = 60

  const getNoteDuration = (size) => (1000 * 60 / bpm) * (size || 1)

  function playNote ({ frequency, note, octave, size }) {
    const oscillator = createCustomOscillator()
    const noteFrequency = typeof frequency === "undefined" ? getFrequencyFromNote(note, octave) : frequency
    oscillator.frequency.value = noteFrequency
    oscillator.start()

    setTimeout(function () {
      oscillator.stop()
    }, getNoteDuration(size))
  }

  function playChord(notes) {
    notes.forEach(note => {
      playNote(note);
    })
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

  return { playNote, playChord, playMelody, setBPM }
}
