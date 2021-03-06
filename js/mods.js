function createMod(title, author, description, image, download, infoLink, tags) {
	var mod = {
		title: title,
		author:author,
		description:description,
		image:image,
		download:download,
		infoLink:infoLink,
		tags:tags
	};
	return mod;
}

// Add mods to this list
// Type createMod(),
// Then between the parenthesis in quotes type your mod in this order: title, author, description, image, download, infoLink, tags
// Download, and image should be a link
// Put new mods at the bottom.

// F.A.Q
// No info link? Just put a #
// Quotes inside a description?
// If you use double quotes "" inside of your description or anywhere then surround your code with single quotes instead ''
// Do I seperate with comas? - Yes, but do not put a coma after the last value which is tags.
// And include a coma after the last parenthesis like this createMod(),

var modList = [

// Example mod
createMod(
	"Mod Example Title",
	"Example Author",
	// Use single quotes if you have double quotes inside your text like this
	'This is just an "example" inside the mods file so people can see how to add their own mod',
	"http://images.akamai.steamusercontent.com/ugc/278478748956617574/8C2F832290DBE94C3EFF2FF6FB1068C8589BEA60/",
	"https://www.youtube.com/watch?v=32UGD0fV45g",
	"https://www.google.com/",
	"example"
	),

createMod(
	"Businessman",
	"Legolas",
	"Become a ruler of the galaxy through money. Buy trade routes, stocks, set up shops and entertainment centers, buy planets, hire a mercenary army, hunt down people who didn't pay back their loans....and more..Also includes an optional alternate pirate start, and additons to make piracy much more viable and fun.",
	"img/businessman.png",
	"https://drive.google.com/open?id=0B9ljHWQDV1lIa3h0NFAyV3B3M2M",
	"http://steamcommunity.com/sharedfiles/filedetails/?id=690480787",
	"business, economy, strategy, merchant"
	),

createMod(
	"Enigma Corp",
	"Derpy Horse",
	"Enigma Corp is an ever expanding mod that takes you through the adventures of the Enigma Corporation, a strange and greedy corporation that has only just recently surfaced onto the open market and is already doing big things. Both an outfit development and ship creation company, the Corporation has taken the market by storm, introducing new and exciting things to the general public that have never been seen before.",
	"https://avatars0.githubusercontent.com/u/11450262?v=3&s=400",
	"https://github.com/Amazinite/Enigma-Corp/releases",
	"http://steamcommunity.com/app/404410/tradingforum/365172547939442297/",
	"wip, rel, sexy"
	),

createMod(
	"Ship Generator",
	"Legolas",
	"Ever wanted to easily create ships? (as if it's not already easy) Well, now you can! I created a simple tool that will generate the code for a ship.",
	"http://images.akamai.steamusercontent.com/ugc/259337442164610302/4B72FEBE60A2E1A95D7F9A3422EE4179270D0181/",
	"https://evan153.github.io/Endless-Sky-Ship-Generator/",
	"http://steamcommunity.com/sharedfiles/filedetails/?id=718279752",
	"tool, ship, code, modding"
	),

createMod(
	"S-Kestrel Super",
	"mdsmestad",
	"The S-Kestrel Super is a cheaty ship, and more of a work of art and testing tool than a ship that's actually meant for the game. I use it in mod for testing mostly, sometimes I Just look at it for a while and admire it. Please enjoy hours of make little pirates go BOOM! ",
	"http://i.imgur.com/VglrdGr.jpg",
	"https://drive.google.com/open?id=0BwfUPLPyuB65U1poRW5RcGgySVU",
	"#",
	"cheat, ship, testing, art"
	),




];