module.exports = function(data) {
    var msgType = data.msgtype;
    var reContent;

    switch (msgType) {
        case 'text':
            reContent = require('./text-parser.js')(data.content);
        break;
        case 'voice':
            reContent = require('./voice-parser.js')(data.recognition);
        break;
        case 'video':
        break;
        case 'location':
        break;
        case 'shortvideo':
        break;


        default:
            reContent = 'I have no idea.';
        break

    }

    //var data = req.body.xml;
    //var reContent = data.content;
    //var reContent;
    //reContent = JSON.stringify(data);
    return reContent;
}
