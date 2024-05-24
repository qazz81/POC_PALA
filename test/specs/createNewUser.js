const HelpNavigation = require("../helpers/helpNavigation");
const helpNavigation = new HelpNavigation();

describe('User menu: show balance.', () => {
    it(' Showed balance on lobby page',  async () => {
await helpNavigation.navigateToLobbyUserLoggedIn()
    })
})