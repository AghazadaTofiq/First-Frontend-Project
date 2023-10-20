function ChangeSlide()
{
  if(document.getElementsByClassName("Xavier")[0].style.opacity==0)
  {
    document.getElementsByClassName("Hernandez")[0].style.opacity==0;
    document.getElementsByClassName("Xavier")[0].style.opacity==1;
  }
  else
  {
    document.getElementsByClassName("Hernandez")[0].style.opacity==1;
    document.getElementsByClassName("Xavier")[0].style.opacity==0;
  }
}
function myFunction()
{
  document.getElementById("myModal").style.display=block;
}