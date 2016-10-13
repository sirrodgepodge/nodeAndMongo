import mongoose from 'mongoose';


export default function (app) {
  // pull message model off mongoose, works because Node uses singletons for imports/requires!!!
  const Message = mongoose.model('Message');

  app.get('/message/:id', (req, res, next) =>
    Message.findById(req.params.id)
      .then(allPosts => res.json(allPosts))
      .catch(next)
  );

  app.get('/message', (req, res, next) =>
    Message.find({}, null, { sort: '-createdDate' })
      .then(allPosts => res.json(allPosts))
      .catch(next)
  );

  app.post('/saveMessage/:messageString', (req, res, next) => {
    const newMessage = new Message(req.params.messageString);
    newMessage.save()
      .then(savedPost => res.json(savedPost))
      .catch(next);
  });

  app.put('/message/:id/:newMessageString', (req, res, next) =>
    // new option here says return the updated object to the following promise
    Message.findByIdAndUpdate(req.params.id, {
      content: req.params.newMessageString,
    }, { new: true })
      .then(updatedPost => res.status(200).json(updatedPost))
      .catch(next)
  );

  app.delete('/message/:id', (req, res, next) =>
    Message.findByIdAndRemove(req.params.id)
      .then(deletedPost => res.status(200).json(deletedPost))
      .catch(next)
  );
}
