function addNote(info, tab) {
    console.log("Word " + info.selectionText + " was clicked.");
    chrome.storage.sync.get(["notes"], function (result) {
        console.log('BG:Localstorage:get ', result);
        const notes = JSON.parse(result.notes);
        chrome.storage.sync.set({ ["notes"]: JSON.stringify([...notes, { _id: notes.length, text: info.selectionText }]) }, function () {
            console.log('BG:Localstorage:set ', { [key]: value });
        });
    });
}
chrome.contextMenus.create({
    title: "Add note",
    contexts: ["selection"],
    onclick: addNote
});