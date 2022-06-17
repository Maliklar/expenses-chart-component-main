// Reading the content of data.json
let currentDay = new Date().getDay();

console.log(currentDay);
fetch("./data.json")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        let max = 0;
        for (let i = 0; i < data.length; i++) {
            if (max < data[i].amount) {
                max = data[i].amount;
            }
        }
        for (let i = 0; i < data.length; i++) {
            const ele = document.getElementById(data[i].day);
            ele.style.height = (data[i].amount / max) * 100 + "%";
            ele.dataset.value = data[i].amount;
            if (i == currentDay - 1)
                setDayBar(ele);
        }
    });


function setDayBar(ele) {
    ele.style.backgroundColor = "var(--cyan)";
    ele.onmouseover = () => ele.style.backgroundColor = "#b4dfe5";
    ele.onmouseleave = () => ele.style.backgroundColor = "var(--cyan)";


}