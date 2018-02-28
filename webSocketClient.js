

// const ws = new WebSocket("ws://localhost:8500");
const ws = new WebSocket('ws://localhost:8500');
//每个浏览器几乎都有webSocket 对象  "ws://localhost:8500"协议

//client  客户端 监听服务端事件   


//连接服务器
ws.onopen = function(){
    ws.send("大家好")
}


//监听  服务端发来的数据
ws.onmessage = function(e){
    var chatroom = document.getElementById("chatroom");
    chatroom.innerHTML += e.data;
}


//监听服务器 server error  H5写法
// 如果服务器有错误 我们直接关闭

ws.onerror = function(err){
    alert("err" + err);
}


//监听服务器关闭
ws.onclose = function(){
    alert("server is close");
}

