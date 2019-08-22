


$(document).ready(function(){
  $("form #test").submit(function(event){
  event.stopPropagation();
    });


    $("#B").click(function() {
    $("#bike").show();
    });

    $("#Password").click(function() {
    });
    $("p").hide();


    $(document).ready(function(){
      $("form#transportation_survey").submit(function(event){


        $("#work-responses").show();
        $("input:checkbox[name=work-transportation]:checked").each(function(){
          var workTransportationMode = $(this).val();
          $('#work-responses').append(workTransportationMode + "<br>");
        });
        $('#transportation_survey').hide();
      });
    });
