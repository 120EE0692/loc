function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(sendLocation);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  
  function sendLocation(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const locationElement = document.getElementById("location");
    locationElement.innerHTML = "Latitude: " + latitude + "<br>Longitude: " + longitude;
  
    const emailSubject = "User Location";
    const emailBody = "Latitude: " + latitude + "\nLongitude: " + longitude;
    const emailRecipient = "ashishpradhan2345@gmail.com";
  
    const mailtoLink = "mailto:" + emailRecipient +
      "?subject=" + encodeURIComponent(emailSubject) +
      "&body=" + encodeURIComponent(emailBody);
  
    // Open the user's default email client with the pre-populated email
    window.location.href = mailtoLink;
  
    alert("Location sent successfully.");
  }
  