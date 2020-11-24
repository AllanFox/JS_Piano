const synth = new Tone.Synth().toDestination();
// Set the tone to sine
// synth.oscillator.type = "sine";
// connect it to the master output (your speakers)
// synth.toMaster();

const piano = document.getElementById("piano");

piano.addEventListener("mousedown", e => {
  // fires off a note continously until trigger is released
  synth.triggerAttackRelease(e.target.dataset.note, "16n");
});

// piano.addEventListener("mouseup", e => {
//   // stops the trigger
//   synth.triggerRelease();
// });

// handles keyboard events
document.addEventListener("keydown", e => {
  // e object has the key property to tell which key was pressed
  switch (e.key) {
    case "d":
      return synth.triggerAttackRelease("C4", "16n");
    case "r":
      return synth.triggerAttackRelease("C#4", "16n");
    case "f":
      return synth.triggerAttackRelease("D4", "16n");
    case "t":
      return synth.triggerAttackRelease("D#4", "16n");
    case "g":
      return synth.triggerAttackRelease("E4", "16n");
    case "h":
      return synth.triggerAttackRelease("F4", "16n");
    case "u":
      return synth.triggerAttackRelease("F#4", "16n");
    case "j":
      return synth.triggerAttackRelease("G4", "16n");
    case "i":
      return synth.triggerAttackRelease("G#4", "16n");
    case "k":
      return synth.triggerAttackRelease("A4", "16n");
    case "o":
      return synth.triggerAttackRelease("A#4", "16n");
    case "l":
      return synth.triggerAttackRelease("B4", "16n");
    default:
      return;
  }
});
// when the key is released, audio is released as well
// document.addEventListener("keyup", e => {
//   switch (e.key) {
//     case "d":
//     case "r":
//     case "f":
//     case "t":
//     case "g":
//     case "h":
//     case "u":
//     case "j":
//     case "i":
//     case "k":
//     case "o":
//     case "l":
//        synth.triggerRelease(); 
//   }
// });