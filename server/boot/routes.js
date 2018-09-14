'use strict';

module.exports = function(app) {
  // Install a "/ping" route that returns "pong"
  app.get('/images/:name', function(req, res) {
    const photoId = req.params.name;
    res.sendFile(`/home/antoine/Desktop/${photoId}`);
  });
};
