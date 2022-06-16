// Reading the content of data.json
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
            console.log(data[i].day)
            let ele = document.getElementById(data[i].day);
            ele.style.height = (data[i].amount / max) * 100 + "%";
        }
        console.log(max);
    });