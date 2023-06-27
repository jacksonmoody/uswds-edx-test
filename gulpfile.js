const uswds = require("@uswds/compile");

uswds.settings.version = 3;

uswds.paths.dist.css = "./assets/css";
uswds.paths.dist.theme = "./sass/uswds";
uswds.paths.dist.img = "./assets/img";
uswds.paths.dist.fonts = "./assets/fonts";

exports.compile = uswds.compile;
exports.watch = uswds.watch;
exports.init = uswds.init;
exports.update = uswds.updateUswds;
exports.default = uswds.watch;
