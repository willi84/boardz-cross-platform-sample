(function ($, jQuery, window, document) {
    "use strict";

    /**
     * @param {PlatformInformation} platformInformation
     * @constructor
     */
    function NativeMenu(platformInformation, $log) {
        this.init = function() {
            if (platformInformation.isNwjs()) {
                var gui = require('nw.gui');

                var nativeMenuBar = new gui.Menu({ type: 'menubar' });

                if (process.platform === 'darwin') {
                    nativeMenuBar.createMacBuiltin('BoardZ!');
                }

                var window = gui.Window.get();
                window.menu = nativeMenuBar;
            }
        }
    }

    app.module.service('nativeMenu', NativeMenu);
})();