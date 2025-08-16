exports.submitOrder = (req, res) => {
  const io = req.app.get('socketio');
  const order = req.body;
  io.emit('newOrder', order);
  res.status(200).json({ message: 'Order received', order });
};


exports.submitOrder2 = (req, res) => {
  const io = req.app.get('socketio');
  const order = req.body;
  io.emit('KD', order);

  // it line below is not necessary, but can be used to send a response back to the client
  // res.status(200).json({ message: 'Order received', order }); 
};



