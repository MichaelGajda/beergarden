var fps = 2,
    players = {};

var Module = this.Module = function(){
};

Module.prototype.onData = function(data, connection) {
  var person = JSON.parse(data);
  
  if (person.id){
    connection.person_id = person.id;

    players[person.id] = { color: person.color, x: person.x, y: person.y };
    
    this.interval = setInterval(function(){
      connection.send(JSON.stringify(players));
    }, 1000/fps);
  }  
};

Module.prototype.onDisconnect = function(connection) {
  delete players[connection.person_id];
};