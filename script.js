document.getElementById("alertButton").addEventListener("click", function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(sendAlert, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
});

function sendAlert(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let locationUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
    
    alert("Emergency Alert Sent! Location: " + locationUrl);
    
    document.getElementById("locationStatus").innerHTML = 
        `Your Location: <a href="${locationUrl}" target="_blank">View on Map</a>`;
}

function showError(error) {
    alert("Unable to retrieve location.");
}

document.getElementById("soundAlarm").addEventListener("click", function () {
    let alarm = document.getElementById("alarmSound");
    alarm.play();
});


