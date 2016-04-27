var TelegramBot = require('node-telegram-bot-api');
var schedule = require('node-schedule');

var token = '209014548:AAFWMmV0Z7-xOnJucfG_ATboL7pZUb6bbG0';
// Setup polling way
var bot = new TelegramBot(token, {polling: true});

// Matches /echo [whatever]
bot.onText(/\/echo (.+)/, function (msg, match) {
  var fromId = msg.from.id;
  var resp = match[1];

  bot.sendMessage(fromId, resp);
});

// Any kind of message
bot.on('message', function (dados) {
  var chatId = dados.chat.id;
  // photo can be: a file path, a stream or a Telegram file_id
//   var photo = 'cats.png';
    console.log(dados);
   //telegramBot.sendMessage(chatId, text, [options]) ⇒ Promise
   
//    var options = {
//   reply_markup: JSON.stringify({
//     keyboard: [
//       [{ text: '1', callback_data: 'teste 1' }],
//       [{ text: '2', callback_data: 'teste 2' }]
     
//     ]
//   })
// };
// bot.sendMessage(chatId, 'Some text giving three inline buttons', options).then(function (sended) {
//   // `sended` is the sent message.
// });



});

var jobId = schedule.scheduleJob(" */1 * * * *", function(){ //This will call this function every 2 minutes 
//    bot.sendMessage(60433523,"teste");
});