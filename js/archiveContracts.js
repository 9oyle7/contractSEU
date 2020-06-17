$(document).ready(function(){
    $("#exampleFormControlSelect1").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("class");
            if(optionValue){
                $(".box").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".box").hide();
            }
        });
    }).change();
});

$(document).ready(function(){
    $("#exampleFormControlSelect2").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("class");
            if(optionValue){
                $(".box").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".box").hide();
            }
        });
    }).change();
});

$(document).ready(function(){
    $("#exampleFormControlSelect3").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("class");
            if(optionValue){
                $(".box").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".box").hide();
            }
        });
    }).change();
});

$(document).ready(function(){
    $("#exampleFormControlSelect4").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("class");
            if(optionValue){
                $(".box").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".box").hide();
            }
        });
    }).change();
});
$(function () {
    $('#datetimepicker1').datetimepicker({
        format: 'DD-MM-YYYY'
    });
    $('#datetimepicker2').datetimepicker({
        format: 'DD-MM-YYYY'
    });
    $('#datetimepicker3').datetimepicker({
        format: 'DD-MM-YYYY'
    });
    $('#datetimepicker4').datetimepicker({
        format: 'DD-MM-YYYY'
    });
    $('#datetimepicker5').datetimepicker({
        format: 'DD-MM-YYYY'
    });
    $('#datetimepicker6').datetimepicker({
        format: 'DD-MM-YYYY'
    });
    $('#datetimepicker7').datetimepicker({
        format: 'DD-MM-YYYY'
    });
    $('#datetimepicker8').datetimepicker({
        format: 'DD-MM-YYYY'
    });
});