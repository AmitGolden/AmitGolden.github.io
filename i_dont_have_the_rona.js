const formURL =
	"https://docs.google.com/forms/d/e/1FAIpQLSfKBRvSR0Y5WxDy5P6Bf2voSNAjvTYf65h64nuRZdC3vJyY_A/viewform";

const date = new Date();
const myName = "עמית גולדנברג";
const myId = "325741684";
const parentName = "דדי";
const parentId = "325741684";

const datamap = [
	/* "entry.1521851290=" +
		`${date.getFullYear()}-${date
			.getMonth()
			.toString()
			.padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`, */
	"entry.1633097918=" + myName,
	"entry.153952564=" + myId,
	"entry.1502527623=מאשר",
	"entry.2035760450=מאשר",
	"entry.829622481=מאשר",
	"entry.622664319=" + parentName,
	"entry.1895665904=" + parentId,
];

const prefillUrl = formURL + "?" + datamap.join("&");
console.log(prefillUrl);
