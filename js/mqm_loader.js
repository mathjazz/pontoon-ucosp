"use strict";
// Definition file to load the MQM selection dynamically via Javascript

function addToTree(parent, treeItem) {

    // Add a label if this isn't a leaf node, a checkbox otherwise
    if (treeItem.hasOwnProperty('children')) {
        var list = document.createElement('ul');
        var title = document.createElement('p');
        title.textContent = treeItem['name'];
        list.appendChild(title);

        for (var item in treeItem['children']) {
            var child = document.createElement('li');
            addToTree(child, treeItem['children'][item]);
            list.appendChild(child);
        }
        parent.appendChild(list);
    } else {
        var idName = treeItem['name'].toLowerCase().replace(' ', '-');

        var label = document.createElement('label');
        label.setAttribute('for', idName);
        label.textContent = treeItem['name'];

        var checkbox = document.createElement('input');
        checkbox.textContent = treeItem['name'];
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('id', idName);

        parent.setAttribute('class', 'issue-selection');
        parent.appendChild(label);
        parent.appendChild(checkbox);
    }    
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
