module.exports = function(event, eventkey) {
    switch (event.toLowerCase()) {
        case 'click':
            switch (eventkey) {
                case 'menu1':
                    reContent = 'menu1 clicked.';
                    break;
                case 'menu2':
                    reContent = 'menu2 clicked.';
                    break;
                default:
                    reContent = '...'
            }
            break;
        default:
            reContent = event;
            break;
    }
    return reContent;

}
