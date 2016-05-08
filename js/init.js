$(document).ready(function() {
    var element = document.getElementsByClassName('div-a')[0].getElementsByTagName('a');
    for (var i = 0; i < element.length; i++) {
        element[i].addEventListener("click", function () {
            $(".visited").removeClass("visited");
            this.setAttribute("class", "visited");
        });
    }
});

$(document).ready(function() {
    var element = $(".zlight-submenu").find("a");
    for (var i = 0; i < element.length; i++) {
        element[i].addEventListener("click", function () {
            $(".selected").removeClass("selected");
            this.setAttribute("class", "selected");
            $("#menu-text").text(this.text);
            buttonClick();
        });
    }
});
$(document).ready(function(){
    $('#zlight-nav').zlightMenu();
    $("#row").hide();
});