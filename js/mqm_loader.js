"use strict";
// Definition file to load the MQM selection dynamically via Javascript

function addToTree(parent, treeItem) {
    var list = document.createElement('ul');
    var text = document.createElement('p');
    text.textContent =  treeItem['name'];
    list.appendChild(text);
    for (var item in treeItem['children']) {
        var child = document.createElement('li');
        addToTree(child, treeItem['children'][item]);
        list.appendChild(child);
    }
    parent.appendChild(list);
}

window.addEventListener('load', function () {
    /* Instead of fetching, will use the mqm variable living in global scope
    $.getJSON('data/mqm.json', function (data) {
        var issueTreeRoot = document.getElementById('issue-tree');
        for (var item in data) {
            addToTree(issueTreeRoot, data[item]);
        }
    });
    */

    var issueTreeRoot = document.getElementById('issue-tree');
        for (var item in mqm) {
            addToTree(issueTreeRoot, mqm[item]);
        }
});
