#pragma strict

var BubblePrefab : GameObject;
private var nextGenTime : float;
var DelayUpper : float;
var DelayLower : float;
var LeftBoundary : float = -10;
var RightBoundary : float = 10;


function Start () {

}

function Update () {
  if(Time.time > nextGenTime) {
	   Instantiate(BubblePrefab, transform.position, Quaternion.identity);
     var randomDelay : float = Random.Range(DelayLower, DelayUpper);
     nextGenTime = Time.time + randomDelay;

     var randomX : float = Random.Range(LeftBoundary, RightBoundary);
     var newPosition : Vector3 = new Vector3(randomX, transform.position.y, transform.position.z);
     transform.position = newPosition;
  }
}
