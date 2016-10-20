"use strict";
// Definition file to load the MQM selection dynamically via Javascript

function createTitle(titleName, titleIDFormat) {
    var titleNode = document.createElement('div');
    titleNode.setAttribute('id', titleIDFormat + '-title');
    titleNode.setAttribute('class', 'issue-node');

    var chevron = document.createElement('i');
    chevron.setAttribute('class', 'arrow fa fa-chevron-down fa-lg');
    titleNode.appendChild(chevron);

    var title = document.createElement('span');
    title.setAttribute('class', 'title noselect');
    title.textContent = titleName;
    titleNode.appendChild(title);
    return titleNode;
}

function createSubItems(childrenList, titleIDFormat) {
    var subNodes = document.createElement('ul');
    subNodes.setAttribute('id', titleIDFormat + '-sub');

    for (var item in childrenList) {
        var child = document.createElement('li');
        addToTree(child, childrenList[item]);
        subNodes.appendChild(child);
    }
    return subNodes;
}

function addToTree(parent, treeItem) {
    // Using the lowercase snake form of MQM categories as an identifier
    var idName = treeItem['name'].toLowerCase().replace(' ', '-');

    // Add a label if this isn't a leaf node, a checkbox otherwise
    if (treeItem.hasOwnProperty('children')) {

        var titleNode = createTitle(treeItem['name'], idName);
        var subNodes = createSubItems(treeItem['children'], idName);

        titleNode.addEventListener('click', function() {
            if (subNodes.classList.contains('visible')) {
                subNodes.classList.remove('visible');
            } else {
                subNodes.classList.add('visible');
            }
        });

        parent.appendChild(titleNode);
        parent.appendChild(subNodes);
    } else {
        var label = document.createElement('label');
        label.setAttribute('for', idName);
        label.textContent = treeItem['name'];

        var checkbox = document.createElement('input');
        checkbox.textContent = treeItem['name'];
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('id', idName);

        if (parent.tagName == 'LI') {
            parent.setAttribute('class', 'issue-selection');
            parent.appendChild(checkbox);
            parent.appendChild(label);
        } else {
            var selectionDiv = document.createElement('li');
            selectionDiv.setAttribute('class', 'issue-selection');
            selectionDiv.appendChild(checkbox);
            selectionDiv.appendChild(label);
            parent.appendChild(selectionDiv);
        }

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

    var issueTree = document.getElementById('issue-tree');
    var listRoot = document.createElement('ul');
    for (var item in mqm) {
        var topLevelCategory = document.createElement('li');
        addToTree(topLevelCategory, mqm[item]);
        listRoot.appendChild(topLevelCategory);
    }
    issueTree.appendChild(listRoot);

});
