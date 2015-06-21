var app = require('express')(),
    http = require('http').Server(app),
    io = require('socket.io')(http),
    Sonos = require('sonos').Sonos,
    sonos = new Sonos(process.env.SONOS_HOST || '192.168.2.19', process.env.SONOS_PORT || 1400);

io.on('connection', function(socket) {
  if (io.sockets.sockets.length == 1) {
    checkSonos();
  }
});

http.listen(3000, function() {
  console.log('listening on *:3000');
});

var checkSonos = function() {
  sonos.currentTrack(function (err, track) {
      io.emit('trackupdate', track);
      if (io.sockets.sockets.length > 0) {
        setTimeout(checkSonos, 700);
      }
  });
};
