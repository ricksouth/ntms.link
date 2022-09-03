## https://ntms.link/
### A basic URL shortener.

It gets the URLS to shorten from a JSON file:
https://github.com/ricksouth/ntms.link/blob/main/urls/shortened_urls.json

```
{
	"github" : "https://github.com/ricksouth",
	"curseforge" : "https://curseforge.com/members/serilum/projects",
	"modrinth" : "https://modrinth.com/user/serilum"
}
```
&nbsp;\
Which a basic JavaScript turns into a new URL:
https://github.com/ricksouth/ntms.link/blob/main/assets/js/script.js
```
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
```
&nbsp;\
These URLS are now shortened via Github Pages:
 - https://ntms.link/github -> https://github.com/ricksouth
 - https://ntms.link/curseforge -> https://curseforge.com/members/serilum/projects
 - https://ntms.link/modrinth -> https://modrinth.com/user/serilum

### That's it! 🤷
