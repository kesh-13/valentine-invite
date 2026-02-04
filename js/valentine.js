const p = new URLSearchParams(location.search);
const from = p.get("from") || "Someone";
const to = p.get("to") || "Someone";

document.getElementById("from").textContent = from;
document.getElementById("to").textContent = to;
document.getElementById("text").textContent =
	`Hey ${to} 💕 Will you be my Valentine?`;

const yes = document.getElementById("yes");
const no = document.getElementById("no");
const toggle = document.getElementById("themeToggle");

const saved = localStorage.getItem("theme") || "light";
document.body.classList.toggle("dark", saved === "dark");
toggle.textContent = saved === "dark" ? "☀️" : "🌙";

toggle.onclick = () => {
	const isDark = document.body.classList.toggle("dark");
	localStorage.setItem("theme", isDark ? "dark" : "light");
	toggle.textContent = isDark ? "☀️" : "🌙";
	navigator.vibrate?.(20);
};

let scale = 1;

no.onclick = () => {
	scale += 0.22;
	yes.style.transform = `scale(${scale})`;
	navigator.vibrate?.([10, 30]);
};

yes.onclick = () => {
	navigator.vibrate?.([30, 40, 30]);
	document.querySelector(".container").innerHTML =
		`<h1>WOOHOOOO ${to.toUpperCase()}!</h1>
	<img src="https://media.giphy.com/media/tBg7ZLKO56E4reaSX4/giphy.gif" width="260">`;
};

const bg = document.querySelector(".bg-hearts");
setInterval(() => {
	const h = document.createElement("span");
	h.textContent = "💖";
	h.style.left = Math.random() * 100 + "vw";
	h.style.animationDuration = 6 + Math.random() * 6 + "s";
	bg.appendChild(h);
	setTimeout(() => h.remove(), 12000);
}, 450);
