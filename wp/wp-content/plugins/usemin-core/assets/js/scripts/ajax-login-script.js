jQuery(document).ready(function($) {


    // Perform AJAX login on form submit
    $('form#login').on('submit', function(e){
        $('form#login p.status').show().text(ajax_login_object.loadingmessage);
        var pageURL = $(location).attr("href") + '#code_block-44-273';
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_login_object.ajaxurl,
            data: { 
                'action': 'ajaxlogin', //calls wp_ajax_nopriv_ajaxlogin
                'username': $('form#login #username').val(), 
                'password': $('form#login #password').val(), 
                'security': $('form#login #security').val() },
            success: function(data){
                $('form#login p.status').text(data.message);
                //console.log(data);
                if (data.loggedin == true){
                    location.reload();
                    //$('td span').addClass('visible');
                    $('.edit_posts a').css('display', 'none');
                    //document.location.href = pageURL;
                    //alert('success');
                }
            }
        });
        e.preventDefault();
    });


    // Perform AJAX login on form submit
    $('form#login2').on('submit', function(e){
        $('form#login2 p.status').show().text(ajax_login_object.loadingmessage);
        var pageURL = $(location).attr("href") + '#code_block-44-273';
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_login_object.ajaxurl,
            data: { 
                'action': 'ajaxlogin', //calls wp_ajax_nopriv_ajaxlogin
                'username': $('form#login2 #username2').val(), 
                'password': $('form#login2 #password2').val(), 
                'security': $('form#login2 #security2').val() },
            success: function(data){
                $('form#login2 p.status').text(data.message);
                //console.log(data);
                if (data.loggedin == true){
                    location.reload();
                    //$('td span').addClass('visible');
                    //alert('success');
                }
            }
        });
        e.preventDefault();
    });

    // Perform AJAX login on form submit
    $('form#login3').on('submit', function(e){
        $('form#login3 p.status').show().text(ajax_login_object.loadingmessage);
        var pageURL = $(location).attr("href") + '#code_block-44-273';
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_login_object.ajaxurl,
            data: { 
                'action': 'ajaxlogin', //calls wp_ajax_nopriv_ajaxlogin
                'username': $('form#login3 #username2').val(), 
                'password': $('form#login3 #password2').val(), 
                'security': $('form#login3 #security2').val() },
            success: function(data){
                $('form#login2 p.status').text(data.message);
                //console.log(data);
                if (data.loggedin == true){
                    location.reload();
                    //$('td span').addClass('visible');
                    //alert('success');
                }
            }
        });
        e.preventDefault();
    });


});