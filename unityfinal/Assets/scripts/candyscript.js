#pragma strict

private var target: GameObject;
var myPosition;
var candycount;


function Start () {

//candycount = GameObject.Find("CandyCountShow.js").GetComponent("candycontainer");
var candy : GameObject;
candy = GameObject.Find("candy");
}

function Update () {
//Unity will constantly check the position of the GameObject.
    //Creates a variable to check the objects position.
    myPosition = transform.position;
    //Prints the position to the Console.
    Debug.Log(myPosition);


var player : GameObject;
player = GameObject.Find("Character");
var playerTransform : Transform; 
playerTransform = player.transform;
// get player position
var position : Vector3; 
position = playerTransform.position;

    Debug.Log(position);
    
var distance = Vector3.Distance(myPosition, position);

if(distance < 1){
	Destroy (gameObject);
	//candycount += 1;
	
	//candycount.candycontainer=candycount.candycontainer+1;
}


}


function OnCollisionEnter ( collision : Collision) {
 
//if (collision.collider.name == "Character"){

//var banana = Vector3.Distance( transform.position, noki.transform.position);
 
 //if(banana < 5){

 
//Destroy (Sphere);




}