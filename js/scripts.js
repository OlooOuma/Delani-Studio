 $(document).ready(function(){
       $(".col").click(function(){
      $(this).children('.clickable').toggle(1200);
      $(this).children('.hidden').toggle(1200);
    });
});
$('.btn').click(function(){
       var me = $('#input1').val();
       alert(name + " Your message has been received. Thank you for reaching out to us");
   });
