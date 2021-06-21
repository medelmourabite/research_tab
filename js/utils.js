const LocalStorage = {
    get: function (key, callback, json = false) {
        if (!chrome?.storage?.sync?.get) {
            data = localStorage.getItem(key);
            callback(json ? JSON.parse(data) : data);
            return;
        }
        chrome.storage.sync.get([key], function (result) {
            console.log('Localstorage:get ', result);
            callback(json ? JSON.parse(result[key]) : result[key]);
        });
    },
    set: function (key, value, json = false) {
        if (!chrome?.storage?.sync?.set) {
            data = localStorage.setItem(key, json ? JSON.stringify(value) : value);
            return;
        }
        chrome.storage.sync.set({ [key]: json ? JSON.stringify(value) : value }, function () {
            console.log('Localstorage:set ', { [key]: value });
        });
    }
}

const TranslationApi = {
    trans: function (q, cb, target = "fr", source = "en") {
        return fetch("https://libretranslate.com/translate", {
            method: "POST",
            body: JSON.stringify({
                q,
                source,
                target,
                api_key: ""
            }),
            headers: { "Content-Type": "application/json" }
        }).then(res => res.json()).then(cb);
    },
}

const Utils = {
    copy: function (str) {
        const el = document.createElement('textarea');
        el.value = str;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    },
}
