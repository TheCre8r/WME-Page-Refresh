// ==UserScript==
// @name         WME Page Refresh
// @namespace    https://github.com/TheCre8r/WME-Page-Refresh
// @version      1.0.0.3
// @description  Allows Waze Editors to refresh the page without losing their spot.
// @author       The_Cre8r
// @include      /^https:\/\/(www|beta)\.waze\.com\/(?!user\/)(.{2,6}\/)?editor.*$/
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    // Update Pop Up
    function updateAlert() {
        var version = GM_info.script.version.toString();
        var versionChanges = '';
        var previousVersion;

        versionChanges += 'WME Page Refresh v' + version + ' changes:\n';
        versionChanges += ' - Updated to allow for new Waze URL \n - Fixed issue related to other keypresses forcing script to start\n - Added this marvelous pop-up!';

        if (localStorage === void 0) {
            return;
        }

        previousVersion = localStorage.WMEPageRefreshVersion;

        if (version !== previousVersion) {
            alert(versionChanges);
            localStorage.WMEPageRefreshVersion = version;
        }
    }
    $(document).ready(function() {
        console.log( "WME Page Refresh Intialized" );
        updateAlert();
    });
    //  Function
    function disableF5(e) {
        if ((e.which || e.keyCode) == 116)
            e.preventDefault();
        if (event.defaultPrevented === true) {
            if (e.keyCode != 116)
            {
            }
            else
            {
                var PERMALINK = document.getElementsByClassName("fa fa-link permalink")[0].href;
            //alert("Was preventDefault() called: " + event.defaultPrevented + PERMALINK);
            window.location.href = PERMALINK;
            e.preventDefault();
            }
        }
    }

    $(document).ready(function() {$(document).on("keydown", disableF5);});

})();
