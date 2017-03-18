 jQuery(document).ready(function($){
     
     function aJaxFromLocalJson(){
         

    $.ajax({
     url: "..homework/weather.json",
        dataType: "json",
        success: function (data) {
        console.log(data);
         var location=data[locationToGrab]['city'];
         var state=data[locationToGrab]['state'];
         var temp_f = data[locationToGrab]['High'];
                            
        console.log("Current temperature in" + location + "is:" +temp_f);
                        
            var cur_location= $("#location");
            var temp =$("#temp");
            var message = $("#message");
                        
             cur_location.text(location +','+ state);
             temp.text(temp_f);
             message.text("current temperature in" + location +  "is:" + temp_f);
                        
         }
     });
     }
     
     function ajaxFromApi (){
           $.ajax({
                url : "http://api.wunderground.com/api/3489dffa70c1ada5/geolookup/conditions/q/ID/Rexburg.json",
                dataType : "jsonp",
               success : function(parsed_json) {
                var location = parsed_json['location']['city'];
                var temp_f = parsed_json['current_observation']['temp_f'];
                alert("Current temperature in " + location + " is: " + temp_f);
                
            }
        });
     }
     aJaxFromLocalJson ("Franklin");
     ajaxFromApi();
 });
 