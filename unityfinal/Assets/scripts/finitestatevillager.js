#pragma strict
var searcher;
var myPosition;
var villagerstate;
var Character : GameObject;

function Start () {
villagerstate = 0;

}

function Update () {

	searcher = CandyCountShow.candycontainer;	//gets the candyCount
    myPosition = transform.position;  //gets my own position
	var player : GameObject;		  //variable stores player data
	player = GameObject.Find("Character");		//finds that player
	var playerTransform : Transform; 			//new variable thats just a transform
	playerTransform = player.transform;			//sets that transform to that of the 3rs person charachter
	var position : Vector3; 					//variable to store position in
	position = playerTransform.position;		//stores position of player
	var distance = Vector3.Distance(myPosition, position); //calculates the distance in the distance variable
	
if(villagerstate == 0) {  //LOOK FOR AND GET CANDY
	if(distance < 3) {	//if distance is close
	if(CandyCountShow.candycontainer > 0){  //if player has candy
	 if (Input.GetKey (KeyCode.Space)){
	CandyCountShow.candycontainer = CandyCountShow.candycontainer - 1; //takes its candy
	//MagicBoulder.supercount = MagicBoulder.supercount +1;
	villagerstate = 1;
	}
	}
  }
} 
if(villagerstate == 1) {  //Run snippy comment for getting candy
//ToggleVisibility(); //togglesvisibility of text baloon 1

//function ToggleVisibility() {
  //   toggles the visibility of this gameobject and all it's children
    //var renderers = gameObject.GetComponentsInChildren.()
uninannerbabblescript.showme = true;

}
else { //continue to say snippy things if player is near





}
}

//gamestate = 0;
//if(playerHasCandy === true && ){
//GET ITS CANDY
//Player.candy --;
//set the supercount to open up gates
//set villagers state to cheese.
//gamestate = 1;
//if (gamestate === 1){
//final state
//say things.
//
//}
//else{
//continue to look for candy
//}
//}