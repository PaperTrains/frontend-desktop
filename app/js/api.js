var API = {
    baseUrl: "https://project.cmi.hr.nl/2016_2017/medialab_ns_t1/paper_trains/images/api/",
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