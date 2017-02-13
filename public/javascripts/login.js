/**
 * Created by iqianjin-zhangshanshan on 16/12/29.
 */

$(function(){
    $('#btn-submit').on('click',function(){
        var userName=$('#userName').val(),
            password=$('#passWord').val();
        console.log(userName);
        console.log(password);
        $.ajax({
            url:'/toLogin',
            data:{
                'userName':userName,
                'password':password
            },
            dataType:'json',
            type:'post'
        }).done(function(data){
            console.log(data);

        })
    })

});
