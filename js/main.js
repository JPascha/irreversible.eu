// // // ===== CUSTOM SCRIPTS ===== \\ \\ \\


// == BACKGROUND CHANGER == \\
var a = self.setInterval('roastBeef()', 10000);
var b = 0;
var c = [
        '/wp-content/uploads/2016/02/background1.jpg'
        , '/wp-content/uploads/2016/02/background2.jpg'
		, '/wp-content/uploads/2016/02/background4.jpg'
		, '/wp-content/uploads/2016/02/background5.jpg'
    ];

function roastBeef() {
	b = (b + 1) % c.length;
	return $('.background').css('background', 'url("' + c[b] + '") no-repeat center center');
}

// == GUILD INFO API KEY AUTHENTICATION == \\
var popOut = document.getElementsByClassName("popOutInfo")[0];

function getKey() {
	if (document.getElementById("inputInfo").value == "") {
		popOut.innerHTML = "No API-key found. <a onClick='apiInfo()' style='cursor:pointer;text-decoration: underline;'>E:01</a>";
		popOut.classList.add("red");
		popOut.classList.remove("green");
	} else {
		var apiKey = document.getElementById("inputInfo").value;
		if (apiKey.length < 72) {
			popOut.innerHTML = "Incorrect API-key. <a onClick='apiInfo()' style='cursor:pointer;text-decoration: underline;'>E:02</a>";
			popOut.classList.add("red");
			popOut.classList.remove("green");
		} else if (apiKey.length > 72) {
			popOut.innerHTML = "Incorrect API-key. <a onClick='apiInfo()' style='cursor:pointer;text-decoration: underline;'>E:03</a>";
			popOut.classList.add("red");
			popOut.classList.remove("green");
		} else {
			var HttpClient = function () {
				this.get = function (aUrl, aCallback) {
					var anHttpRequest = new XMLHttpRequest();
					anHttpRequest.onreadystatechange = function () {
						if (anHttpRequest.readyState === 4 && anHttpRequest.status === 200)
							aCallback(anHttpRequest.responseText);
					};

					anHttpRequest.open("GET", aUrl, true);
					anHttpRequest.send(null);
				};
			};
			aClient = new HttpClient();
			aClient.get('https://api.guildwars2.com/v2/account?access_token=' + apiKey, function (response) {
					guildMember = response.search("4CA49F58-EB63-4F9D-8899-CAF4B38D032A") ;
					if (guildMember === -1) {
						popOut.innerHTML = "You're not a member. <a onClick='apiInfo()' style='cursor:pointer;text-decoration: underline;'>E:04</a>";
						popOut.classList.add("red");
					} else {
						document.getElementsByClassName('steamInfo')[0].id = "key";
						document.getElementsByClassName('discordInfo')[0].id = "key";
						document.getElementsByClassName("steamInfo")[0].innerHTML = "<a href='http://steamcommunity.com/groups/irreversiblegw2'>Irreversible Steam group</a>";
						document.getElementsByClassName("discordInfo")[0].innerHTML = "<a href='https://discord.gg/0TAl0WnhpQLa0u8J'>Irreversible Discord server</a>";
						popOut.innerHTML = "Verified!";
						popOut.classList.add("green");
						popOut.classList.remove("red");
						document.getElementsByClassName('infoExpl')[0].classList.remove("open");
					}
				});
			}
		}
	}
function apiInfo() {
	document.getElementsByClassName('infoExpl')[0].classList.add("open");
}
function apiInfoClose() {
	document.getElementsByClassName('infoExpl')[0].classList.remove("open");
}
