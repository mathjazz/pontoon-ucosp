"use strict";


function addComment() {
    var li = document.createElement('li');

    var header = document.createElement('header');
    header.setAttribute('class', 'clearfix translator');
    var info = document.createElement('div');

    info.setAttribute('class', 'info');
    var name = document.createElement('a');

    name.setAttribute('href', '');
    name.textContent = 'Boaty McBoatface';
    var time = document.createElement('time');

    time.setAttribute('datetime', new Date().toLocaleString());
    time.setAttribute('class', 'stress');
    time.textContent = 'Just now';
    info.appendChild(name);

    info.appendChild(time);
    header.appendChild(info);
    li.appendChild(header);

    var commentText = document.createElement('p');

    var commentTextbox = document.getElementById('add-comment-text');
    commentText.textContent = commentTextbox.value;
    li.appendChild(commentText);

    var commentList = document.getElementById('comment-view');
    commentList.appendChild(li);

    var commentCount = document.getElementById('comment-count');
    commentCount.textContent = commentList.children.length;
}

window.addEventListener('load', function () {
    var commentTextbox = document.getElementById('add-comment-text');
    commentTextbox.addEventListener('keydown', function(event) {
        if (event.keyCode == 13 && commentTextbox.value.length > 0) {
            addComment();
            commentTextbox.value = "";
        }
    });

    var button = document.getElementById('add-comment-button');
    button.addEventListener('click', function() {
        if (commentTextbox.value.lenth > 0) {
            addComment();
            commentTextbox.value = "";
        }
    });


});