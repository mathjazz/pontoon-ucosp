
<<<<<<< HEAD
var issues = [];

var addIssuesToDom = function(issue) {
    issues.push(issue);
    renderIssues();
}

var removeIssueFromDomById = function(id) {
    console.log("id: ", id)
    for (var i = 0; i < issues.length ; i++) {
        if (issues[i][0].id = id) {
            console.log("ID: ",issues[i][0].id,  id)
            issues.splice(i,1);
        }
    }
    renderIssues();

}

var renderIssues = function() {
    var issuesDiv = document.getElementById("issues");
    var newInnerHTML = '';
    for(var i = 0; i < issues.length ; i++) {
         newInnerHTML += "<span id='"+ issues[i][0].id +"' class='issue-bubbles' title='" +
         issues[i][0].title + "' onclick='removeIssueFromDomById("+ issues[i][0] +")'>" + issues[i][0].textContent + "</span>";
    }
    issuesDiv.innerHTML = newInnerHTML;
}

var mqm_parents = {}

// Formatted string function
// Pulled from some yahoo utility library
sprintf = function() {
  var num = arguments.length;
  var oStr = arguments[0];
  for (var i = 1; i < num; i++) {
    var pattern = "\\{" + (i-1) + "\\}";
    var re = new RegExp(pattern, "g");
    oStr = oStr.replace(re, arguments[i]);
  }
  return oStr;
}

// Pulls the json data from the file and creates the table from the specified data
create_table = function(selector) {
	$.getJSON('./data/mqm.json', function(data) {
        table_helper(data, selector);
    });
	set_bindings(selector);
}

// Sets the event bindings
set_bindings = function(selector) {
	// Event: User selects top-level mqm item
	$(selector).on("click", ".mqm_item.l1", function () {
		clean_levels(1,2,3);
		clear_levels(2,3,4);
		select_item($(this));
	});
	// Event: User selects second-level mqm item
	$(selector).on("click", ".mqm_item.l2", function () {
		clean_levels(2,3);
		clear_levels(3,4);
		select_item($(this));
	});
	// Event: User selects third-level mqm item
	$(selector).on("click", ".mqm_item.l3", function() {
		clean_levels(3);
		clear_levels(4);
		select_item($(this));
	});
	// Event: User selects fourth-level mqm item
	$(selector).on("click", ".mqm_item.l4", function () {
		select_item($(this));
	});
}

// Event: User selects a tag for an active issue
$(document).on("click", ".issue-bubbles", function() {
	expand_mqm_element($(this).attr('id').split('_')[2]);
});

// Expand the tree to reveil a specific element
expand_mqm_element = function (element) {
	// Find the path in the tree to the specified element
	var mqm_path = [];
	current_parent = mqm_parents[element];
	while (current_parent != null) {
		mqm_path.unshift(current_parent);
		current_parent = mqm_parents[current_parent];
	}
	// Clear the current tree
	clean_levels(1,2,3);
	clear_levels(2,3,4);
	for (var element_iterator = 0; element_iterator < mqm_path.length; element_iterator++) {
		// Expand the tree based on the specified element
		select_item($(sprintf("#mqm_{0}", mqm_path[element_iterator])));
	}
}

// Sets the currently active issues to the specified list of issues
// This would be called when a new translation is selected, and it already has issues tagged
set_active = function(items) {
	for (var item_iterator = 0; item_iterator < items.length; item_iterator++) {
		select_item($(sprintf("mqm_{0}", item)));
	}
}

// Adds an emelent to the list of active issues
toggle_bubble = function(item) {
	var bubble_id = sprintf("#mqm_bubble_{0}", $(item).attr('id').split('_')[1]);
	// Check if the bubble is already active for this tag
	if ($(document.getElementById(bubble_id)).length) {
		$(document.getElementById(bubble_id)).remove();
		return;
	}
	var new_bubble = $(sprintf("<span id='{0}' class='issue-bubbles' title='{1}'>{2}</span>", bubble_id, $(item).attr('title'), $(item).html()));
	$("#issues").children(":first").append(new_bubble);
}


// Recoubts and changes the current number of active issues
recount_active = function() {
	// Re-count the current number of issues
	var num_issues = document.getElementsByClassName("issue-bubbles").length;
	// Find all elements that count the issues for the current translation
	var issue_counters = document.getElementsByClassName('current_issue_count');
	// Change the number for each counter location to the current number of issues
	for (var element_iterator = 0; element_iterator < issue_counters.length; element_iterator++) {
		$(issue_counters[element_iterator]).html(num_issues);
	}
}

// Remove sub-menu selections from the specified levels
clean_levels = function() {
	for (arg_iterator = 0; arg_iterator < arguments.length; arg_iterator++) {
		$(sprintf('.mqm_item.l{0}.mqm_active_sub', arguments[arg_iterator])).each(function (index) {
			$(this).removeClass("mqm_active_sub");
		});
	}
}

// Clear any active sub-menu tags from the specified levels
clear_levels = function() {
	for (arg_iterator = 0; arg_iterator < arguments.length; arg_iterator++) {
		$(sprintf(".mqm_l{0}_list", arguments[arg_iterator])).each(function (index) {
			$(this).addClass("mqm_hidden");
		});
	}
}

// Select a specific menu item from the mqm tree
select_item = function(item) {
	var childs_name = sprintf("#mqm_{0}_childs", $(item).attr('id').split('_')[1]);
	// If the item has no children select it as a tag
	if ($(childs_name).length < 1) {

        if ($(item).hasClass("mqm_selected")) {
            $(item).removeClass("mqm_selected");
            console.log("ITEM: ", item)
            removeIssueFromDomById(item[0].id);
        } else {
            addIssuesToDom(item);
            $(item).addClass("mqm_selected");
        }
		// $(item).toggleClass("mqm_selected");
		// toggle_bubble(item);
		// recount_active();
	} else {
		// Show the sub menu for the selected item
		$(item).addClass("mqm_active_sub");
		$(childs_name).removeClass("mqm_hidden");
	}
}

// Helps generate the table
table_helper = function(data, selector) {
	// Create the lists for the different levels in the mqm tree
	var $level_1 = $('<ul class="mqm_column" id="mqm_level1"></ul>');
	var $level_2 = $('<div class="mqm_column" id="mqm_level2"></div>');
	var $level_3 = $('<div class="mqm_column" id="mqm_level3"></div>');
	var $level_4 = $('<div class="mqm_column" id="mqm_level4"></div>');

	// Hit the top level items
	for (l1_iterator = 0; l1_iterator < data.length; l1_iterator++) {
		var l1_item = data[l1_iterator];

        // If the item has no children move on
        var l1_HTML_string = l1_item.hasOwnProperty("children") ?
            '<li class="mqm_item l1 has_children" id="mqm_{0}" title="{1}">{2}<span class="fa fa-chevron-right "/></li>' :
            '<li class="mqm_item l1" id="mqm_{0}" title="{1}">{2}</li>';
		$(sprintf(l1_HTML_string,
			l1_item["id"], l1_item["definition"],
			l1_item["name"])).appendTo($level_1);
            if (!l1_item.hasOwnProperty("children")) {continue;}



		// Keep track of this item's parent
		// mqm_parents[l1_item["id"]] = null;
		// If the item has no children move on
		if (!l1_item.hasOwnProperty("children")) {continue;}
		// Create a sub menu for the children of this top level item
		var $l2_list = $(sprintf('<ul id="mqm_{0}_childs" class="mqm_l2_list mqm_hidden">', l1_item["id"]));
		for (l2_iterator = 0; l2_iterator < l1_item["children"].length; l2_iterator++) {
			var l2_item = l1_item["children"][l2_iterator];
			// Create a list item for this mqm rule

            var l2_HTML_string = l2_item.hasOwnProperty("children") ?
                '<li class="mqm_item l2 has_children" id="mqm_{0}" title="{1}">{2}<span class="fa fa-chevron-right "/></li>' :
                '<li class="mqm_item l2" id="mqm_{0}" title="{1}">{2}</li>';

			$(sprintf(l2_HTML_string,
				l2_item["id"], l2_item["definition"],
				l2_item["name"])).appendTo($l2_list);

			// Keep track of this item's parent
			// mqm_parents[l2_item["id"]] = l1_item["id"];
			// If this item has no children move on
			if (!l2_item.hasOwnProperty("children")) {continue;}



			// Create a sub menu for the children of this second level item
			var $l3_list = $(sprintf('<ul id="mqm_{0}_childs" class="mqm_l3_list mqm_hidden"></ul>', l2_item["id"]));
			for (l3_iterator = 0; l3_iterator < l2_item["children"].length; l3_iterator++) {
				var l3_item = l2_item["children"][l3_iterator];
				// Create list item for this mqm rule

                var l3_HTML_string = l3_item.hasOwnProperty("children") ?
                    '<li class="mqm_item l3 has_children" id="mqm_{0}" title="{1}">{2}<span class="fa fa-chevron-right "/></li>' :
                    '<li class="mqm_item l3" id="mqm_{0}" title="{1}">{2}</li>';

    			$(sprintf(l3_HTML_string,
					l3_item["id"], l3_item["definition"],
					l3_item["name"])).appendTo($l3_list);
				// Keep track of this item's parent
				mqm_parents[l3_item["id"]] = l2_item["id"];
				// If this item has no children move on
				if (!l3_item.hasOwnProperty("children")) {continue;}
				// Create a sub menu for children of this fourth level item
				var $l4_list = $(sprintf('<ul id="mqm_{0}_childs" class="mqm_l4_list mqm_hidden"></ul>', l3_item["id"]));
				for (l4_iterator = 0; l4_iterator < l3_item["children"].length; l4_iterator++) {
					var l4_item = l3_item["children"][l4_iterator];
					// Create list item for this mqm rule
					$(sprintf('<li class="mqm_item l4" id="mqm_{0}" title="{1}">{2}</li>',
						l4_item["id"], l4_item["definition"],
						l4_item["name"])).appendTo($l4_list);
					// Keep track of this item's parent
					mqm_parents[l4_item["id"]] = l3_item["id"];
				}
				$l4_list.appendTo($level_4);
			}
			$l3_list.appendTo($level_3);
		}
		// Add this list to the collection of second level mqm items
		$l2_list.appendTo($level_2);
	}
	// Append the different levels to the DOM
	$(selector).append($level_1, $level_2, $level_3, $level_4);
}
