const html = document.getElementsByTagName('html');

setInterval(() => {
	const numberOfProjectsColor = '#' + (((1 << 24) * Math.random()) | 0).toString(16);
	const happyClientsColor = '#' + (((1 << 24) * Math.random()) | 0).toString(16);
	const yearsOfExperienceColor = '#' + (((1 << 24) * Math.random()) | 0).toString(16);
	document.documentElement.style.setProperty('--numberOfProjectsColor', numberOfProjectsColor);
	document.documentElement.style.setProperty('--happyClientsColor', happyClientsColor);
	document.documentElement.style.setProperty('--yearsOfExperienceColor', yearsOfExperienceColor);
}, 1000);

window.onbeforeunload = function () {
	window.scrollTo(0, 0);
  }