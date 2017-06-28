$(document).ready(function() {
    functions.getImageData();

    var functions = {
        
        getImageData : function() {
            var apiRequest = API.apiRequest ("GET", API.endPoints.get);
            console.log(API);
            console.log(apiRequest);
            return apiRequest;
        }
    }

    function listImages(images) {
        console.log(images.image);
        if(images) {
            $("#provinceImage").attr("src", images.image);
            console.log(images);
        }
    }
});






