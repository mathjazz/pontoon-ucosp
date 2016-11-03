"use strict";
// Definition file to load the MQM selection dynamically via Javascript

var selectedMQMItems = [];

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

function toggleIssueTag(issueName) {
    var issueTags = document.getElementById('issue-tag-list');
    var issueParent = issueTags.parentNode;
    var issueID = issueName.toLowerCase().replace(' ', '-') + '-tag';

    var issueSpan = document.getElementById(issueID);

    if (issueSpan) {
        issueSpan.remove();
        // No point of displaying the issue title when there's no issues, removing it
        if (issueTags.children.length == 0) {
            issueParent.style.visibility = 'hidden';
        }
        selectedMQMItems.pop(issueName);
    } else {
        var issue = document.createElement('span');
        issue.setAttribute('class', 'issue-bubbles');
        issue.setAttribute('id', issueID);
        issue.textContent = issueName;
        issueTags.appendChild(issue);
        issueParent.style.visibility = 'visible';
        selectedMQMItems.push(issueName);
    }

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
        label.setAttribute('class', 'noselect');
        label.textContent = treeItem['name'];

        var checkbox = document.createElement('input');
        checkbox.textContent = treeItem['name'];
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('id', idName);

        // Check if the MQM issue is already selected when redrawing the tree
        // Mark the checkbox as checked if it has been previously selected
        if (selectedMQMItems.indexOf(treeItem['name']) >= 0) {
            checkbox.setAttribute('checked', 'true');
        }

        // Show/hide the issue-tag when the checkbox is selected
        checkbox.addEventListener('change', function () {
            toggleIssueTag(treeItem['name']);
        }, treeItem['name']);

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

function searchStringInTree(tree, queryString, results) {
    for (var item in tree) {
        var name = tree[item].name.toLowerCase();
        if (name.indexOf(queryString.toLowerCase()) != -1) {
            results.push(tree[item]);
        }
        searchStringInTree(tree[item].children, queryString, results);
    }
}

function generateListTree(tree) {
    var listRoot = document.createElement('ul');
    for (var item in tree) {
        var topLevelCategory = document.createElement('li');
        addToTree(topLevelCategory, tree[item]);
        listRoot.appendChild(topLevelCategory);
    }
    return listRoot;
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
    var listRoot = generateListTree(mqm);
    issueTree.appendChild(listRoot);

    //Add functionality to issue search box
    var issueSearch = document.getElementById('issue-search');
    issueSearch.addEventListener("input", function() {
        console.log(issueSearch.value);
        var mqmResult = [];
        searchStringInTree(mqm, issueSearch.value, mqmResult);

        if (issueSearch.value.length == 0) {
            listRoot.remove();
            listRoot = generateListTree(mqm);
            issueTree.appendChild(listRoot);
        } else if (mqmResult.length != 0) {
            listRoot.remove();
            listRoot = generateListTree(mqmResult);
            issueTree.appendChild(listRoot);
        }
    });
});
