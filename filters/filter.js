var image = null;
var picresest = null;
var pic1 = null;
var pic2 = null;
var pic3 = null;
var pic4 = null;
function upload()
{
    var canvasimg = document.getElementById("canvas1");
    var finput = document.getElementById("file");
    image = new SimpleImage(finput);
    picreset = new SimpleImage(finput);
    pic1 = new SimpleImage(finput);
    pic2 = new SimpleImage(finput);
    pic3 = new SimpleImage(finput);
    pic4 = new SimpleImage(finput);
    image.drawTo(canvasimg);
}
function makegray()
{
    for(var pixel of pic1.values())
    {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
    var canvasimg = document.getElementById("canvas1");
    pic1.drawTo(canvasimg);
}
function makeblur()
{
    var imgcanvas = document.getElementById("canvas1");
    imgcanvas.className="img";
    image.drawTo(imgcanvas);
}
function makered()
{
    for(var pixel of pic2.values())
    {
        var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
        if(avg<128)
        {
         pixel.setRed(2*avg);
         pixel.setGreen(0);
         pixel.setBlue(0);
        }
        else{
            pixel.setRed(255);
            pixel.setGreen((2*avg)-255);
            pixel.setBlue((2*avg)-255);  
        }
    }
    var canvasimg = document.getElementById("canvas1");
    pic2.drawTo(canvasimg);
}
function makeblue()
{
    for(var pixel of pic3.values())
    {
        pixel.setBlue(255);
    }
    var canvasimg = document.getElementById("canvas1");
    pic3.drawTo(canvasimg);
}
function makeborder()
{
    var w = pic4.getWidth();
    var h = pic4.getHeight();
   for(var pixel of pic4.values())
{
    var x = pixel.getX();
    var y = pixel.getY();
    if(x<50 || x>(w-51) || y<50 || y>(h-51))
    {
        pixel.setRed(128);
         pixel.setGreen(0);
         pixel.setBlue(128);
    }
}
    var canvasimg = document.getElementById("canvas1");
    pic4.drawTo(canvasimg);   
}
function reset()
{
  var canvasimg = document.getElementById("canvas1");
  canvasimg.className = "removeblur";
  picreset.drawTo(canvasimg);
}