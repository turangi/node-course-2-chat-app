let socket = io();

socket.on('connect', function () {
  console.log('Connected to sever');

  socket.emit('createMessage', {
    from: 'Andrew',
    text: 'Yep, works for me'
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function(message){
  console.log('newMessage', message);
});
