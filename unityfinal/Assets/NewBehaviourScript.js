// The camera bounds

var mapMinX : int;

var mapMinZ : int;

var mapMaxX : int;

var mapMaxZ : int;

 

// Zoom limits for the camera

var mapMaxY : int = 9.5;

var mapMinY : int = 4;

 

var scrollArea = 7; // Defines the distance from the edge of the window that mouse scrolling starts

var scrollSpeed = 22; // Defines how fast the window scrolls

function InBounds (vector : Vector3) : boolean {

    var answer : boolean = true;

    

    if ((transform.position.x + vector.x) < mapMinX) {

        transform.position.x = mapMinX;

        answer = false;

    }

    if ((transform.position.z + vector.z) < mapMinZ) {

        transform.position.z = mapMinZ;

        answer = false;

    }

    if ((transform.position.x + vector.x) > mapMaxX) {

        transform.position.x = mapMaxX;

        answer = false;

    }

    if ((transform.position.z + vector.z) > mapMaxZ) {

        transform.position.z = mapMaxZ;

        answer = false;

    }

    if ((transform.position.y + vector.y) > mapMaxY) {

        transform.position.y = mapMaxY;

        answer = false;

    }

    

    if ((transform.position.y + vector.y) < mapMinY) {

        transform.position.y = mapMinY;

        answer = false;

    }

    

    return answer;

}