# WME-Page-Refresh
Allows Waze Editors to refresh the page without losing their spot.


# Currently only works by using F5*
* You can rebind the key by going to http://keycode.info/ and get the keycode for the key you would like to use.
Then in WME open the console by pressing Ctrl+I
Copy and paste the following info into the console and replacing 116 with the number from the previous page.
localStorage.setItem("WMEPageRefreshKeyCode", 116)

If done correctly it will say undefined. After completion, refresh WME and it will work with the newly bound key.

