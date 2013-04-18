#pragma strict

static var showme = false;
var stateoftheunion = 0;

function Start () {

}

function Update() {

if(stateoftheunion == 0){
if(showme === true){
        renderer.enabled = !renderer.enabled;
        stateoftheunion = 1;
    	}
	}
    if (stateoftheunion == 1){
    }
}