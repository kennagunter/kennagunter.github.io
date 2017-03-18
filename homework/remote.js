// Current Location Scripts
$(function () {

    var status = $('#status');

    (function getGeoLocation() {
        status.text('Getting Location...');
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude;
                var long = position.coords.longitude;

                // Call the getData function, send the lat and long
                getData(lat, long);

            });
        } else {
            status.text("Your browser doesn't support Geolocation or it is not enabled!");
        }

    })();

    // Get the data from the wunderground API
    function getData(lat, long) {
        $.ajax({
            url: "http://api.wunderground.com/api/3489dffa70c1ada5/conditions/q/" + lat + "," + long + ".json",
            dataType: "jsonp",
            success: function (data) {
                console.log(data);
                //                    var location = parsed_json['location']['city'];
                //                    var temp_f = parsed_json['current_observation']['temp_f'];
                //                    alert("Current temperature in " + location + " is: " + temp_f);
                

//                
//                cityDisplay
                $("#cityDisplay").text(data.current_observation.display_location.full);
                
//                currentTemp
                $("#currentTemp").text(data.current_observation.temp_f)
                
//                summary
                $("#summary").text(data.current_observation.weather);
//                
//                add1
                $("#add1").text(data.current_observation.wind_string);
//                
//                add2
                $("#add2").text(data.current_observation.feelslike_string);
                
//                
//                add3
                $("#add3").text(data.current_observation.relative_humidity);
                
                








                $("#cover").fadeOut(250);
            }
        });

    }

    // A function for changing a string to TitleCase
    function toTitleCase(str) {
        return str.replace(/\w+/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
});