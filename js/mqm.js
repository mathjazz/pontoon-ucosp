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
		clear_levels(2,3,4);;
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
	})
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

//Based on Gordon's code
//Create or remove issue tags when selected from MQM table
toggle_issue_tag = function(item) {
		var issueTags = document.getElementById('issue-tag-list');
		var issueParent = issueTags.parentNode;
		var issueName = $(item).text();
		var issueID = issueName.toLowerCase().replace(' ', '-') + '-tag';

		var issueSpan = document.getElementById(issueID);

		if (issueSpan) { 
			issueSpan.remove();
			//Remove issue label if no issues
			if (issueTags.children.length == 0) {
				issueParent.style.visibility = 'hidden';
			}
		} 
		else {
			var issue = document.createElement('span');
			issue.setAttribute('class', 'issue-bubbles');
			issue.setAttribute('id', issueID);
			issue.setAttribute('title', item.attr('title'));
			issue.textContent = issueName;
			
			issueTags.appendChild(issue);
			issueParent.style.visibility = 'visible';
		}
}

// Select a specific menu item from the mqm tree
select_item = function(item) {
	var childs_name = sprintf("#mqm_{0}_childs", $(item).attr('id').split('_')[1]);
	// If the item has no children select it as a tag
	if ($(childs_name).length < 1) {
		$(item).toggleClass("mqm_selected");
		//Add associated issue tag
		toggle_issue_tag($(item));
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
		$(sprintf('<li class="mqm_item l1" id="mqm_{0}" title="{1}">{2}</li>', 
			l1_item["id"], l1_item["definition"],
			l1_item["name"])).appendTo($level_1);
		// If the item has no children move on
		if (!l1_item.hasOwnProperty("children")) {continue;}
		// Create a sub menu for the children of this top level item 
		var $l2_list = $(sprintf('<ul id="mqm_{0}_childs" class="mqm_l2_list mqm_hidden">', l1_item["id"]));
		for (l2_iterator = 0; l2_iterator < l1_item["children"].length; l2_iterator++) {
			var l2_item = l1_item["children"][l2_iterator];
			// Create a list item for this mqm rule
			$(sprintf('<li class="mqm_item l2" id="mqm_{0}" title="{1}">{2}</li>',
				l2_item["id"], l2_item["definition"],
				l2_item["name"])).appendTo($l2_list);
			// If this item has no children move on
			if (!l2_item.hasOwnProperty("children")) {continue;}
			// Create a sub menu for the children of this second level item
			var $l3_list = $(sprintf('<ul id="mqm_{0}_childs" class="mqm_l3_list mqm_hidden"></ul>', l2_item["id"]));
			for (l3_iterator = 0; l3_iterator < l2_item["children"].length; l3_iterator++) {
				var l3_item = l2_item["children"][l3_iterator];
				// Create list item for this mqm rule
				$(sprintf('<li class="mqm_item l3" id="mqm_{0}" title="{1}">{2}</li>',
					l3_item["id"], l3_item["definition"],
					l3_item["name"])).appendTo($l3_list);
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

window.addEventListener('load', function () {
	//MQM Searchbar functionality
    var options = {
	url: "./data/mqm.json",
	
	getValue: function(element) {
			return element.name;
		},

	list: {
		match: {
			enabled: true
		},
		
		onClickEvent: function() {
			var value = $("#issue-search").getSelectedItemData().id;
			document.getElementById('mqm_' + value).click();
		}	
	}
};

	$("#issue-search").easyAutocomplete(options);
});
