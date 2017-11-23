$("#menu-1-btn").hover(function(){
    $("#menu-1").css("display", "block");
    $("#menu-2").css("display", "none");
    $("#menu-3").css("display", "none");
});

$("#menu-2-btn").hover(function(){
    $("#menu-1").css("display", "none")
    $("#menu-2").css("display", "block");
    $("#menu-3").css("display", "none");
    });

$("#menu-3-btn").hover(function(){
    $("#menu-1").css("display", "none");
    $("#menu-2").css("display", "none");
    $("#menu-3").css("display", "block");
});


