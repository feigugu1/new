$(function(){
    //封装读取本地数据的函数
    function getDate(){
        var date=localStorage.getItem('todolist')
        if(date!==null){
            return JSON.parse(date) //为什么不是返回这个 ['todolist',JSON.parse(date)]
        }else{
            return []
        }
    }
    //封装保存本地数据函数
    function set(){
        
        localStorage.setItem('todolist',JSON.stringify(date))
    }
    // 键盘事件
    $('#title').on('keyup',function(e){
        if(e.keyCode==13){
             var sum=getDate()
             sum.push()//({ title: $(this).val(), done: false })这边的格式是什么意思呢
        }
    })
})