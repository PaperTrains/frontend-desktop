$(document).ready(function() {
    
    var images = $('#provinceImage');
    var data = new Array();
    console.log(data);
    data.attr(images, 'src');


    $.ajax({
        type: 'GET',
        url: "https://project.cmi.hr.nl/2016_2017/medialab_ns_t1/paper_trains/images/api/get.php",
        success: function(jsonData){
            var jsonArray = jsonData;
            // after uploading, process the photo
            console.log(jsonData);
        },
        error: function(jqxhr,textStatus,errorThrown) {
            console.log("Fout: Uploaden mislukt." + jqxhr + textStatus + errorThrown);
        }
    });
});






