// Date is added using moment to html id
var today = moment().format('LL');
$("#currentDay").text(today);

$(document).ready(function(){

    $(".saveBtn").on("click", function(){
        
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        
        localStorage.setItem(time, text);
//saving entries into local storage
$("#time9.description").val(localStorage.getItem('time9'));
$("#time10.description").val(localStorage.getItem('time10'));
$("#time11.description").val(localStorage.getItem('time11'));
$("#time12.description").val(localStorage.getItem('time12'));
$("#time13.description").val(localStorage.getItem('time13'));
$("#time14.description").val(localStorage.getItem('time14'));
$("#time15.description").val(localStorage.getItem('time15'));
$("#time16.description").val(localStorage.getItem('time16'));
$("#time17.description").val(localStorage.getItem('time17'));

})

function timeKeeper(){
    var timeNow = moment().hour();
    $(".time-block").each(function(){
        //parse time-block to convert number after "time" into a number for time - had some help from a friend
        var blockTime = parseInt($(this).attr("id").split("time")[1])
        //css applying based on time - NEEDED TO USE 24 HR TIME - Otherwise did not fully apply
        if(blockTime < timeNow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } 
        else if (blockTime === timeNow) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        } 
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}

timeKeeper();
})