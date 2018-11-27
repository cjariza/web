var backend = this;
backend.conexionEnvio = function (datos,callback){
	if ("WebSocket" in window){
		var ws = new WebSocket("wss://carlosbackend.herokuapp.com");
		//var ws = new WebSocket("ws://localhost:3000");
		ws.onopen = function(){
			ws.send(datos);
		};
		ws.onmessage = function (evt) { 
		  ws.close();
		  return callback(evt.data);
		};
		ws.onerror = function (evt) { 
		  $("#conexion").html("Error en conexión websocket");
		};
		window.onbeforeunload = function(event) {
		  ws.close();
		};
	}else{
	   return callback(JSON.stringify({"e":true,"m":"WebSocket NOT supported by your Browser"}));
	}
}
