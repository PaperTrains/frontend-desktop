var API = {
    baseUrl: "https://project.cmi.hr.nl/2016_2017/medialab_ns_t1/paper_trains/images/api/get.php",
    endPoints: {
        get: "get.php",
    },

    apiRequest: function(method = "GET", endpoint, data = {} ) {
        var result = null;
        $.ajax({
            type: method,
            url: this.baseUrl + endpoint,
            dataType: 'json',
            data: data,
            async: false,
            success: function(jsonData) {
                result = jsonData;
            },
            error: function() {
                alert("Foute boel");
                result = false;
            }
        });

        return result;
    }
}

$(document).ready(function() {

});

var functions = {
    
    getImageData : function() {
        var apiRequest = API.apiRequest ("GET", API.endPoints.get);
        console.log(API);
        console.log(apiRequest);
        return apiRequest;
    }
}




