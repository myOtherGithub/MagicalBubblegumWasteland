#pragma strict
static var supercount = 0;
function Start () {

}

function Update () {

	
	if(supercount == 1){  //if player has candy
		Destroy(this.gameObject);
		renderer.enabled = !renderer.enabled;
	}
}