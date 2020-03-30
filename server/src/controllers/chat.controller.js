const { BadRequestError } = require('../utils/errors');
const Chat = require('../models/Chat');
const User = require('./../models/User.js');


module.exports.createChat = async(req,res, next)=>{
  try {

    const {
      headers: {
        authorization: userId,
      },
      body,
    } = req;

    const chat = await  Chat.create({
                                     ...body,
                                     owner: userId,
                                   });
    if (chat) {
      return res.status(201).send(chat);
    }

  } catch (e) {
    res.status(400).send(e);
  }
};



 module.exports.joinToChat = async (req, res , next)=>{
   try {
     const {
       headers: {
         authorization: userId,
       },
       chat,
     } = req;
     chat.users.push(userId);
     const savedChat = await chat.save();
     if (savedChat) {
       const chatWithOwner = await Chat.findOne(chat).populate('owner').populate('users')
       return res.send(chatWithOwner);
     }
     res.status(400).send('Bad request');
   } catch (e) {
     res.status(400).send(e);
   }
 }


 module.exports.createMessages = async (req , res, next) =>{
   try{

     const {headers:{authorization:authorId} , chat} = req

     chat.messages.push(req.body);

     const savedMessages = await chat.save();
     if (savedMessages) {
       const chatWithOwner = await Chat.findOne(chat).populate('body')
       return res.send(chatWithOwner);
     }
     res.status(400).send('Bad request');
   } catch (e) {
     res.status(400).send(e);
   }
 }