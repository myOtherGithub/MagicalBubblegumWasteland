#pragma strict

var myPosition;
var Character : GameObject;

function Start () {
var candy : GameObject;
candy = GameObject.Find("candy");
}

function Update () {
//Unity will constantly check the position of the GameObject.
//Creates a variable to check the objects position.
    myPosition = transform.position;
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
	CandyCountShow.candycontainer = CandyCountShow.candycontainer + 1;
	bouldergoaway.supercount = bouldergoaway.supercount + 1;
	}
}