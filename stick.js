const STICK_ORIGIN = Vector2(970,11);

function Stick(position){
  this.position = position;
}

Stick.prototype.update = function(){

  //TEST
  // this.position = Mouse.position;
  //
  // if(Mouse.left.pressed){
  //   console.log("Pressed left");
  // }
}

Stick.prototype.draw = function(){
  Canvas.drawImage(sprites.stick, this.position, STICK_ORIGIN);
}
