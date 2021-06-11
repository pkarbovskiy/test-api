// require the package
const Fortnite = require("fortnite-api");

let fortniteAPI = new Fortnite(
    [
        "EMAIL_ACCOUNT",
        "PASSWORD",
        //"CLIENT LAUNCHER TOKEN",
        //"FORTNITE CLIENT TOKEN"
        "MzQ0NmNkNzI2OTRjNGE0NDg1ZDgxYjc3YWRiYjIxNDE6OTIwOWQ0YTVlMjVhNDU3ZmI5YjA3NDg5ZDMxM2I0MWE=",
        "ZWM2ODRiOGM2ODdmNDc5ZmFkZWEzY2IyYWQ4M2Y1YzY6ZTFmMzFjMjExZjI4NDEzMTg2MjYyZDM3YTEzZmM4NGQ=",
    ]
);

fortniteAPI.login().then(() => {
    fortniteAPI
        .checkPlayer("Mirardes", "pc")
        .then(stats => {
            console.log(stats);
        })
        .catch(err => {
            console.log(err);
        });
}).catch(err => console.log(err));