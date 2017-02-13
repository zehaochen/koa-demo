
$(function(){
        $.ajax({
            url:'/feedbacklist',
            dataType:'json',
            type:'get'
        }).done(function(data){
            var $html='';
            for(var i=0;i<data.rows.length;i++){
                $html+='<li data-id="'+data.rows[i].id+'"><input class="list-info" type="text" value="'+data.rows[i].description+'"><a href="#" class="update-btn">修改</a><a href="#" class="del-btn">删除</a></li>'
            }
            $('#feedback-wrap').html($html);
        });
    $(document).on('click','.del-btn',function(){
        var $dom=$(this).parent(),
            $id=$dom.attr('data-id');

        $.ajax({
            url:'/delFeedBack',
            data:{
                'id':$id
            },
            dataType:'json',
            type:'post'
        }).done(function(data){
            console.log(data);
            if(data===1){
                console.log('test');
                $dom.remove();
            }
        })
    });
    $(document).on('click','.update-btn',function(){
        var $dom=$(this),
            $id=$dom.parent().attr('data-id'),
            $feedback=$dom.parent().find('.list-info').val();
            $.ajax({
                url:'/updateFeedBack',
                data:{
                    'id':$id,
                    'description':$feedback
                },
                dataType:'json',
                type:'post'
            }).done(function(data){
                if(data===1){

                }
            })


    });

});
