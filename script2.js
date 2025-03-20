function loadStationDetails() {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name");
    const photo = params.get("photo");

    document.getElementById("stationName").textContent = name;
    document.getElementById("stationImage").src = photo || "placeholder.jpg";
}

window.onload = loadStationDetails;