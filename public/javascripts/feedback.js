/**
 * Created by iqianjin-zhangshanshan on 16/12/22.
 * https://github.com/ded/reqwest
 */
$(function(){
    $('#btn-submit').on('click',function(){
        var backText=$('#back-text').val();
        $.ajax({
            url:'/toFeedBack',
            data:{
                'backText':backText
            },
            dataType:'json',
            type:'post'
        }).done(function(data){
            console.log(data);
            //if(data.code===1){
                location.href='/userfeedback';
            //}
        })
    })

});

