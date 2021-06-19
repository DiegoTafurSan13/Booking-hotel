const localization = require('../components/localization/network');
const user = require('../components/user/network');
const coinPurse = require('../components/coin-purse/network');
const hotel = require('../components/hotel/network');

function router (server){
    server.use('/localization',localization);
    server.use('/user',user);
    server.use('/coinPurse',coinPurse);
    server.use('/hotel',hotel);
}

module.exports = router;