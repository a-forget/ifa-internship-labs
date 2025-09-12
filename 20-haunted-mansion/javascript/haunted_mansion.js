/* 
 Aaron
 Lab 20
 September 12, 2025
*/

// Part 2
// Start the game
alert(
  "You are trapped in a very spooky haunted mansion and must try to escape. What fate awaits you?"
);

let playerName = prompt("What is your name?");
console.log("Player name: " + playerName);

// First decision
let decision1 = prompt(
  playerName +
    ", you find yourself at a crossroads with two choices: go into the left room or into the right room.\nWhich direction will you choose, left or right?"
);
decision1 = decision1.toLowerCase();

if (decision1 == "left") {
  console.log("D1: " + playerName + " chose the left room.");
  alert("You go into the left room.");
} else {
  console.log("D1: " + playerName + " chose the right room.");
  alert("You go into the right room.");
}

// Part 3
// Second decision
alert(
  "You find yourself in a room with a chest. You try opening it before realizing that it's locked with a key and a code."
);

let hasChestKey = prompt("Do you have the key? yes/no");
let hasChestCode = prompt("Do you have the code? yes/no");

hasChestKey = hasChestKey.toLowerCase();
hasChestCode = hasChestCode.toLowerCase();

if (hasChestKey == "yes" && hasChestCode == "yes") {
  console.log(playerName + " has found both the key and the code.");
  alert(
    "Monster-in-a-box!\n\nIn your final moments, you consider your decision to open the chest and realize that the chest was double-locked for a good reason."
  );

  // Reloads current page
  window.location.reload();
} else if (hasChestKey == "yes" && hasChestCode == "no") {
  console.log(playerName + " has found the key but not the code.");
  alert(
    "Congratulations - you've found the key! However, you still need to find the code to unlock the chest."
  );
} else if (hasChestCode == "yes" && hasChestKey == "no") {
  console.log(playerName + " has found the code but not the key.");
  alert(
    "Congratulations - you've found the code! However, you still need to find the key to unlock the chest."
  );
} else {
  console.log(playerName + " has not yet found either the key or the code.");
  alert(
    "Unfortunately, you haven't found either the key or the code yet. Keep searching!"
  );
}

// Part 4
alert(
  "You walk down a long, narrow corridor, eventually coming to a door.\nYou try turning the handle to find that it is locked."
);

alert(
  "Suddenly a haunting voice speaks out from behind the door. Its words are momentarily lost on you as you work to process what was said. It asked you a question -- no, a riddle:"
);

let riddle1 = prompt("'What has keys but can't open locks?'");
riddle1 = riddle1.toLowerCase();

let riddle2;

if (riddle1 != "piano" && riddle1 != "a piano") {
  console.log(playerName + " got the first riddle wrong.");
  prompt(
    "'Wrong answer!' shrieks the voice.\n\nWith an eerie cackle you perceive as a twisted sort of joy, it says, 'This is your last chance! I have teeth but can't bite. What am I?'"
  );

  if (riddle2 != "key" && riddle2 != "a key") {
    console.log(playerName + " got the second riddle wrong.");
    alert(
      "'hehe! Wrong again!'\n\nYou watch as two large, shimmering black eyes emerge from the door, along with a wide, evil grin filled with multiple rows of sharp, jagged, red-stained teeth that seem to point in all directions.\n\nBefore you even get a chance to react, the door accelerates towards you at what seems like lightning speed and grabs you in its jaws."
    );
    window.location.reload();
  } else {
    console.log(playerName + " got the second riddle right.");
    alert(
      "You hear the voice let out a deep, disapproving grunt. You're unsure of what to do, and are starting to wonder if maybe that means you answered incorrectly? But then, the door opens."
    );
  }
} else {
  console.log(playerName + " got the riddle right.");
  alert(
    "You hear the voice let out a deep, disapproving grunt. You're unsure of what to do, and are starting to wonder if maybe that means you answered incorrectly? But then, the door opens."
  );
}

// Part 5
alert(
  "You continue walking down what feels like an endless series of twisting and turning corridors before finally coming to a second door.\n\nThe door looks different from the last one; this one seems much older, and the handle isn't a round knob but a semi-circle loop that you'd first have to pull out of its recess before you could turn it.\n\nYou're tired and hungry and just want to get out of here. You reach out, lift the handle, and try turning it, but it doesnt move.\n\nAs you let the handle go to fall back in place you notice a keyhole inside the handle's semi-circle.\n\n'Well, that's good at least,' you think to yourself, 'there's no riddle this time.'"
);

let hasEscapeKey = prompt("Do you have the key to the door?");
hasEscapeKey = hasEscapeKey.toLowerCase();

alert(
  "'Heh heh, sorry to disappoint you,but I can't let you go free so easily,' you hear a voice say. You're unsure of where it's coming from exactly, but you get the horrifying sense that it's coming from within your own mind, and that thought sends a chilling shiver down your spine."
);
let finalRiddle = prompt(
  "'But I'll tell you what - answer this riddle correctly and you're free to go.'\n\n'I stand between two different scenes, one of silence, one of screams. What am I?'"
);
finalRiddle = finalRiddle.toLowerCase();

if (finalRiddle == "door" && finalRiddle == "a door") {
  finalRiddle = "yes";
}

if (hasEscapeKey != "yes" && finalRiddle != "yes") {
  console.log(
    playerName +
      " didn't answer the riddle correctly and doesn't have the escape key."
  );
  alert(
    "'Hehh hehhh hehhhh, excellent! Quite rare indeed... is how I like my meals.' You watch as two large, shimmering black eyes emerge from the door, along with a wide, evil grin filled with multiple rows of sharp, jagged, red-stained teeth that seem to point in all directions.\n\nBefore you even get a chance to react, the door accelerates towards you at what seems like lightning speed and grabs you in its jaws."
  );
  window.location.reload();
} else if (hasEscapeKey != "yes" && finalRiddle == "yes") {
  console.log(
    playerName +
      " has correctly answered the riddle but doesn't have the escape key."
  );
  alert(
    "'Hmph, well then. It looks like you're free to pass... if you can, heh heh.'\n\nYou don't like the sound of that but breathe a sigh of relief anyway, wondering what exactly is meant by that.\n\nThen you remember the keyhole and realize that the voice never said it would let you pass, just that you were 'free to go'."
  );
} else if (hasEscapeKey == "yes" && finalRiddle != "yes") {
  console.log(
    playerName +
      " has the escape key but did not answer the final riddle correctly."
  );
  alert(
    "'Hehh hehhh hehhhh, excellent! Quite rare indeed... is how I like my meals.' You watch as two large, shimmering black eyes emerge from the door, along with a wide, evil grin filled with multiple rows of sharp, jagged, red-stained teeth that seem to point in all directions.\n\nBefore you even get a chance to react, the door accelerates towards you at what seems like lightning speed and grabs you in its jaws."
  );
  window.location.reload();
} else {
  console.log(
    playerName + " has the escape key and answered the riddle correctly."
  );
  alert(
    "'Hmph, well then. It looks like you're free to pass... if you can, heh heh.'\n\nYou don't like the sound of that but breathe a sigh of relief anyway, wondering what exactly they mean by that.\n\nThen you remember the keyhole and realize that the voice never said it would let you pass, just that you were 'free to go'."
  );
  alert(
    "You decide you've got nothing to lose and try putting the key into the keyhole. Turning it, you hear the light 'thud' of a deadbolt and know that the key has worked.\n\n'Ah, crud!' says the voice dejectedly. You almost feel bad for it. Almost.\n\nYou lift and turn the handle and the door swings open to the outside. You're free at last!"
  );
}
alert("The End.");
console.log("The game has ended.");
