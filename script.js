let arr = [document.getElementById('Xavier'), document.getElementById('Hernandez')];

function nextFunction() 
{
  for (let i = 0; i < arr.length; i++) 
  {
    if (getComputedStyle(arr[i]).display === 'flex' && i !== (arr.length - 1)) 
    {
      arr[i].style.display = 'none';
      arr[i + 1].style.display = 'flex';
      break;
    }
    if (getComputedStyle(arr[i]).display === 'flex' && i === (arr.length - 1)) 
    {
      arr[i].style.display = 'none';
      arr[0].style.display = 'flex';
      break;
    }
  }
}

function backFunction() 
{
  for (let i = 0; i < arr.length; i++) 
  {
    if (getComputedStyle(arr[i]).display === 'flex' && i !== 0) 
    {
      arr[i].style.display = 'none';
      arr[i - 1].style.display = 'flex';
      break;
    }
    if (getComputedStyle(arr[i]).display === 'flex' && i === 0) 
    {
      arr[i].style.display = 'none';
      arr[arr.length - 1].style.display = 'flex';
      break;
    }
  }
}

////////////////////////////////////////////////////////////


const container = document.getElementById('PartnerLogos');
    const images = container.querySelectorAll('img');
    let currentPosition = 0;

    function moveImages() {
      // Calculate the total width of displayed images
      const totalWidth = Array.from(images).reduce((sum, image) => sum + image.offsetWidth + 20, 0);

      currentPosition -= images[0].offsetWidth + 20; // Move to the left by one image width + margin

      images.forEach(image => {
        image.style.transform = `translateX(${currentPosition}px)`;
      });

      // Check if the first image has moved out of view
      if (currentPosition < -totalWidth) {
        currentPosition += images[0].offsetWidth + 20; // Move to the right by one image width + margin
        container.appendChild(container.firstElementChild); // Move the first image to the end
      }
    }

    // Adjust the interval based on the desired speed
    const interval = setInterval(moveImages, 2000); // Adjust the interval as needed

    // Optionally, you can stop the animation after a certain duration
    setTimeout(() => {
      clearInterval(interval);
    }, 30000); // Stop after 30 seconds (adjust as needed)