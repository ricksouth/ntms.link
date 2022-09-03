document.addEventListener('DOMContentLoaded', function() {
	var url = document.URL + "";
	url = url.replaceAll("?p=/", "");

	loadJSON('/urls/shortened_urls.json',
		function(data) {
			var from = url.split("link/")[1]

			if (from in data) {
				var to = data[from];

				window.location.replace(to);
			}
		},
		function(xhr) { }
	);
}, false);

function loadJSON(path, success, error) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState === XMLHttpRequest.DONE) {
			if (xhr.status === 200) {
				if (success)
					success(JSON.parse(xhr.responseText));
			} else {
				if (error)
					error(xhr);
			}
		}
	};
	xhr.open("GET", path, true);
	xhr.send();
}