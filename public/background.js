// On extension install
// Creating a folder called PutAway in 'Other Bookmarks' Folder (if it doesn't exist)

chrome.runtime.onInstalled.addListener(function () {
    const putAwayFolderName = 'PutAway';

    chrome.bookmarks.getTree(function (tree) {
        var otherBookmarksFolderId = tree[0].children[1].id;
        chrome.bookmarks.getChildren(otherBookmarksFolderId, function (children) {
            var putawayfolder = children.find((e) => e.title == putAwayFolderName);

            if (!putawayfolder) {
                // Folder doesn't exist, so we create one
                chrome.bookmarks.create({
                    'parentId': otherBookmarksFolderId,
                    'title': putAwayFolderName,
                }, function (newFolder) {
                    console.log("created folder: " + newFolder.title);
                });
            } else {
                console.log("PutAway already found");
            }
        });
    });
});