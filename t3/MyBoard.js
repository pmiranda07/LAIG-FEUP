/**
 * MyBoard
 * @param gl {WebGLRenderingContext}
 * @constructor
 */


function MyBoard(scene) {
	CGFobject.call(this,scene);
  this.scene=scene;
  var args=[0,1,1,0];
  this.rectangle = new MyRectangle(scene,args);
  this.circles=[];
  for(let i=0; i <41;i++){
    this.circles.push(new Circle(scene,6));
  }

  this.boardAp=new CGFappearance(scene);
	this.boardAp.loadTexture("scenes/images/board.png");
};


MyBoard.prototype = Object.create(CGFobject.prototype);
MyBoard.prototype.constructor=MyBoard;


MyBoard.prototype.display = function() {

  this.scene.pushMatrix();
  this.scene.scale(100, 100, 1);
  this.scene.rotate(1,1,1,90 * Math.PI /180);
  this.boardAp.apply();
  this.rectangle.display();
  this.scene.popMatrix();



}
