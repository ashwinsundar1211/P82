var mouseEvent;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "turquoise";
width = 10;
radius = 20;

canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown(e)
{
  color = document.getElementById("color").value;
  width = document.getElementById("Width_Of_The_Line").value;
  radius = document.getElementById("radius").value;
  MouseEvent = "mousedown";
}

canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp(e)
{
  MouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave(e)
{
  MouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", myMouseMove);
canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e)
{
  currentmousex = e.clientX - canvas.offsetLeft;
  currentmousey = e.clientY - canvas.offsetTop;

  if (MouseEvent == "mousedown")
  {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.arc(currentmousex, currentmousey, radius, 0, 2*Math.PI);
    ctx.moveTo(LastX, LastY);
    ctx.lineTo(currentmousex, currentmousey);
    ctx.stroke();
  }
  LastX = currentmousex;
  LastY = currentmousey;
} 