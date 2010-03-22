var Module = this.Module = function(data, connection){
  connection.send('Ohai');
};

// Module.prototype.onData = function(data, connection) {
//  connection.send(data);
// };