$(document).ready(function() {

    $.ajax({
        type: 'GET',
        url: "https://project.cmi.hr.nl/2016_2017/medialab_ns_t1/paper-trains/images/api/get.php",
        success: function(jsonData){
            ProcessData(jsonData);
        },
        error: function(jqxhr,textStatus,errorThrown) {
            console.log("Could not load image." + jqxhr + textStatus + errorThrown);
        }
    });
});

function ProcessData(data)
{
    var resultHtml = '';

    var array = jQuery.parseJSON(data);

    $.each(array, function(key,value){
        resultHtml+='<div class="polaroid-picture">';
        resultHtml+='<img class="image" src="' + value.path + '">';
        resultHtml+='<span class="image-text">' + value.message + '</span>';
        resultHtml+='</div>';
    });

    $("#province-noord-brabant").append(resultHtml);

    console.log(resultHtml);
}





