$(".input-group__txtb input").on("focus",function(){
    $(this).addClass("focus");
  });

  $(".input-group__txtb input").on("blur",function(){
    if($(this).val() == "")
    $(this).removeClass("focus");
  });