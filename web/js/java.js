/**
 * Created with IntelliJ IDEA.
 * User: Student
 * Date: 11/20/13
 * Time: 9:35 PM
 * To change this template use File | Settings | File Templates.
 */







$(document).ready(function () {
    $(".question").hide();
    $(".hint").hide();
});




function startFunction(){
    console.log("hi");
    $( "#hq1" ).show();
    $( "#pq1" ).show();
    $( "#buttonq1" ).toggle();
}



function showHint(){
    $( "#hq1hint" ).show();
    $( "#pq1hint" ).show();
    $ ( "#buttonq1").hide();
}


