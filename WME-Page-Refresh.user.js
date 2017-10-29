// ==UserScript==
// @name         WME Page Refresh
// @namespace    https://github.com/TheCre8r/WME-Page-Refresh
// @version      1.0.0.4
// @description  Allows Waze Editors to refresh the page without losing their spot.
// @author       The_Cre8r
// @include      /^https:\/\/(www|beta)\.waze\.com\/(?!user\/)(.{2,6}\/)?editor.*$/
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    // Update Pop Up
    function onStart() {
        var version = GM_info.script.version.toString();
        var versionChanges = '';
        var previousVersion;

        versionChanges += 'WME Page Refresh v' + version + ' changes:\n';
        versionChanges += ' - Updated to work with new WME layout\n - Added a secret setting to override F5';

        if (localStorage === void 0) {
            return;
        }

        previousVersion = localStorage.WMEPageRefreshVersion;

        if (version !== previousVersion) {
            alert(versionChanges);
            localStorage.WMEPageRefreshVersion = version;
        }
        if (localStorage.WMEPageRefreshKeyCode === undefined)
        {
            localStorage.setItem("WMEPageRefreshKeyCode", 116);
        }

    }
    $(document).ready(function() {
        console.log( "WME Page Refresh Intialized" );
        onStart();
    });
    //  Function
    function disableF5(e) {
        if ((e.which || e.keyCode) == localStorage.WMEPageRefreshKeyCode)
            e.preventDefault();
        if (event.defaultPrevented === true) {
            if (e.keyCode != localStorage.WMEPageRefreshKeyCode)
            {
            }
            else
            {
                var PERMALINK = document.getElementsByClassName("permalink")[0].href;
            //alert("Was preventDefault() called: " + event.defaultPrevented + PERMALINK);
            window.location.href = PERMALINK;
            e.preventDefault();
            }
        }
    }

    $(document).ready(function() {$(document).on("keydown", disableF5);});

})();
