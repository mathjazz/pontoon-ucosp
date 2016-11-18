findValuesHelper function(obj, list) {
  if (obj){
	  if (obj instanceof Array) {
		for (var i in obj) {
			list = list.concat(findValuesHelper(obj[i], []));
		}
		return list;
	  }
	  if (obj["name"]) {
		  var object = {};
		  object.name = obj["name"];
		  object.id = obj["id"];
		  list.push(object;)
	  }

	  if (obj["children"]){
		  list = list.concat(findValuesHelper(obj["children"], []));
	  }
  }
}

var mqm = json.parse("./data/mqm.json");
var source = [];
source = findValuesHelper(mqm, source);