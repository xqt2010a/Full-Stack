(function($){
    $("#sub_button").click(function(){
        var name = $("#name").val();
        var pwd = $("#inpassword").val();
        $.post("/login", 
        {
            name:name,
            pwd:pwd
        },
        function(data, status){
            alert(data + "--" + status);
            if(data === 'ok'){
                $.get("/center",
                function(data_doc,status){
                    alert(data_doc+"--"+status);
                    document.write(data_doc);
                })
            }
        })
    })
    
})(jQuery);