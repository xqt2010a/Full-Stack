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
        }
        )
        $.get("/center",
        function(data,status){
            alert(data+"--"+status);
            document.write(data);
        }
        )
    })
    
})(jQuery);