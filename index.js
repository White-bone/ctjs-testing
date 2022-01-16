var wKeyBind = getKeyBindFromKey(Keyboard.KEY_Z, "My Z Key");

function getKeyBindFromKey(key, description) {
  var mcKeyBind = Client.getKeyBindFromKey(key);

  if (mcKeyBind == null || mcKeyBind == undefined) {
    mcKeyBind = new KeyBind(description, key);
  }

  return mcKeyBind;
}
if (keyboard.KEY_Z) 
ChatLib.command("warp dungeon_hub"); 
