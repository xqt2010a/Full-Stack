(function($){
    $("#sub_button").click(function(){
        var name = $("#name").val();
        var pwd = $("#inpassword").val();
        $.ajax({
            url:'/login',
            type:'post',
            data:{name:name, pwd:pwd},
            success: function(data, status){
                alert("success:\r\ndata:"+data+"\r\n"+"status:"+status);
                location.href = 'center';
            },
            error: function(data, status){
                alert("error:\r\ndata:"+data+"\r\n"+"status:"+status);
                location.href = 'login';
            }
            
        });
        // $.post("/login", 
        // {
            // name:name,
            // pwd:pwd
        // },
        // function(data, status){
            // alert(data + "--" + status);
            // if(data === 'ok'){
                // alert("hello");
                // $.get("/center",
                // function(data_doc,status){
                    // alert(data_doc+"--"+status);
                    // document.write(data_doc);
                // })
            // }
        // })
    });
    
})(jQuery);