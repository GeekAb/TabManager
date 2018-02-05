;
(function () {
    'use strict';

    // save all tabs
    document.getElementById('save-all').addEventListener('click', function () {

        chrome.tabs.query({
            currentWindow: true
        }, function (tabsArr) {
            console.log(tabsArr);
            saveChanges();
            console.log(chrome.storage.sync.get())
            // chrome.runtime.sendMessage({
            //     action: 'save',
            //     tabsArr: tabsArr
            // }, function (res) {
            //     if (res === 'ok') {
            //         window.close();
            //     }
            // });
        });
    });

    // open background page to show all saved tabs
    document.getElementById('open-saved').addEventListener('click', function () {
        chrome.runtime.sendMessage({
            action: 'openbackgroundpage'
        }, function (res) {
            console.log(res);
            if (res === 'ok') {
                window.close();
            }
        });
    });

    function saveChanges() {
        // Get a value saved in a form.
        var theValue = 'test';
        // Check that there's some code there.
        if (!theValue) {
        console.log('Error: No value specified');
        return;
        }
        // Save it using the Chrome extension storage API.
        chrome.storage.sync.set({'value': theValue}, function() {
        // Notify that we saved.
        console.log('Settings saved');
        });
    }

}());
