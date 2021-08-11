$('#my_form_email').submit(function(){
    $.post(
        'send.php', // адрес обработчика
         $("#my_form_email").serialize(), // отправляемые данные          
  
        function(msg) { // получен ответ сервера  
            $('#my_form_email').hide('slow');
            $('#my_message_email').html(msg);
        }
    );
    
    return false;
});

