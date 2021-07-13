var today = moment().format('LLLL');
$("#currentDay").text(today);

function timeKeeper(){
    var timeNow = moment().hour();
    $(".time-block").each(function(){
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);

        if(blockTime < timeNow) {
            $(this).removeClass("present");
            $(this).removeClass("future");
            $(this).addClass("past");
        } else if (blockTime === timeNow) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        } else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}

$(document).ready(function(){
    $(".saveBtn").on("click", function(){
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        
        localStorage.setItem(time, text);
    })
});



$("#nine.description").val(localStorage.getItem('nine'));
$("#ten.description").val(localStorage.getItem('ten'));
$("#eleven.description").val(localStorage.getItem('eleven'));
$("#twelve.description").val(localStorage.getItem('twelve'));
$("#one.description").val(localStorage.getItem('one'));
$("#two.description").val(localStorage.getItem('two'));
$("#three.description").val(localStorage.getItem('three'));
$("#four.description").val(localStorage.getItem('four'));
$("#five.description").val(localStorage.getItem('five'));

timeKeeper();