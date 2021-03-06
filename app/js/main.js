$(document).ready(function() {
    GetData();
    setInterval(GetData, 10000);
});

function ProcessData(data)
{
    var resultHtml = '';

    var array = jQuery.parseJSON(data);

    $.each(array, function(key,value){
        var randomX = getRandomInt(-50, 350);
        var randomY = getRandomInt(-400, -650)

        resultHtml+='<div style="' + 'top:' + randomY +  'px; left:' + randomX +  'px;" class="polaroid-picture">';
        resultHtml+='<img class="image" src="' + value.path + '">';
        resultHtml+='<span class="image-text">' + value.message + '</span>';
        resultHtml+='</div>';
    });

    $("#province-noord-brabant-pictures").empty();
    $("#province-noord-brabant-pictures").append(resultHtml);


}

function GetData()
{
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
}

/**
 * Get a random integer between `min` and `max`.
 *
 * @param {number} min - min number
 * @param {number} max - max number
 * @return {int} a random integer
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min     + 1) + min);
}




