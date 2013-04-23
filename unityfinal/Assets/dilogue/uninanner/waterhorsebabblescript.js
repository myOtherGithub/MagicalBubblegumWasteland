#pragma strict

static var showme = false;
var stateoftheunion = 0;
var scaleCount = 0;


function Start () {
    transform.localScale += Vector3(-.29,-.29,-.29);
}

function Update() {

if(stateoftheunion == 0){
	if(showme === true){
        renderer.enabled = !renderer.enabled;

        stateoftheunion = 1;
    	}
	}
if (stateoftheunion == 1){


	
	
        
        transform.localScale += Vector3(.04,.0,.04);
        scaleCount++;
        if (scaleCount > 7) {
           stateoftheunion = 3;
           }

    }
}