$(function () {
    lode()
    //读取本地数据
    function getDate() {
        var date = localStorage.getItem('todolist')
        if (date !== null) {
            return JSON.parse(date)
        } else {
            return []
        }
    }
    //键盘事件
    $('#title').on('keyup', function (e) {
        if (e.keyCode == 13) {
            var local = getDate()
            //把local数组进行更新，把最新的数据添加给local数组
            local.push({ title: $(this).val(), done: false })
            //   把这个数组local储存给本地数据
            set(local)
        }
        lode()
       
    })
    //保存本地数据函数
    function set(date) {
        localStorage.setItem('todolist', JSON.stringify(date))
    }
    //渲染加载数据
    function lode() {
        //清空页面
        $('ol,ul').empty()
        //那数据
        var arr = getDate()
        // 循环数据
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].done == true) {
                //如果数据的done值为true，就添加到ul中
                $('ul').prepend(`<li><input type="checkbox" checked ><p>${arr[i].title}</p> <a href="javaScript:;" id=${i}></a> </li>`)
            } else {
                //把数据添加到页面
                $('ol').prepend(`<li><input type="checkbox" name="" id=""><p>${arr[i].title}</p> <a href="javaScript:;" id=${i}></a> </li>`)
            }
            

        }
        $("#todocount").text($('ol li').length)
            $("#donecount").text($('ul li').length)
    }
    //删除操作
    $('ol,ul').on('click', 'a', function () {
        //先获取本读存储
        var date = getDate()
        //删除操作
        var index = $(this).prop('id')
        //根据索引号删除本地数据，
        date.splice(index, 1)
        //重新获取数据
        set(date)
        //再次渲染到页面
        lode()
    })
    //todolist正在进行和已完成的操作
    $('ol,ul').on('click', 'input', function () {
        //获取最新的本地存储
        var date = getDate()
        //通过input的兄弟元素a，获取到a里面的自定义索引
        //修改数据
        var index = $(this).siblings('a').attr('id')
        //通过input的checked的属性修改date的done属性
        date[index].done = $(this).prop('checked')
        set(date)
        lode()
    })
})