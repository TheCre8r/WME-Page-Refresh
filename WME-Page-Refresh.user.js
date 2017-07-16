// ==UserScript==
// @name         WME Page Refresh
// @namespace    https://github.com/TheCre8r/WME-Page-Refresh
// @version      1.0.0.1
// @description  Allows Waze Editors to refresh the page without losing their spot.
// @author       The_Cre8r
// @include      /^https:\/\/(www|beta)\.waze\.com\/(?!user\/)(.{2,6}\/)?editor\/.*$/
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    function disableF5(e) {
        if ((e.which || e.keyCode) == 116)
            e.preventDefault();
        if (event.defaultPrevented === true) {
            var PERMALINK = document.getElementsByClassName("fa fa-link permalink")[0].href;
            //alert("Was preventDefault() called: " + event.defaultPrevented + PERMALINK);
            window.location.href = PERMALINK;
            e.preventDefault();
        }
    }

    $(document).ready(function() {
        $(document).on("keydown", disableF5);
        $(document).on("keydown", disableF5);
    });


})();
