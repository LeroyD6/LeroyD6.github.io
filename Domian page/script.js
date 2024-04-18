document.addEventListener("DOMContentLoaded", function () {
	const progressBar = document.querySelector(".progress-bar");
	let progress = 0;
	const interval = setInterval(function () {
		progress += 20;
		progressBar.style.width = `${progress}%`;
		progressBar.setAttribute("aria-valuenow", progress);
		if (progress >= 100) {
			clearInterval(interval);
			progressBar.style.width = "100%";
		}
	}, 1000);
});
