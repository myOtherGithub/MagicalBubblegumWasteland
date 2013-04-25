var targetPosition :Transform; // we have to add in the Inspector our target
//var target : Transform;
var damp: float = .5; // we can change the slerp velocity here
 
function Update ()
{
    if ( targetPosition ) // we get sure the target is here
    {
       var rotationAngle = Quaternion.LookRotation ( targetPosition.position - transform.position); // we get the angle has to be rotated
       transform.rotation = Quaternion.Slerp ( transform.rotation, rotationAngle, Time.deltaTime * damp); // we rotate the rotationAngle 

		//transform.LookAt(targetPosition, transform.right);
    
    }
}