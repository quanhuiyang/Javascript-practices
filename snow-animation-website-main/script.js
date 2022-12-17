/*下雪區域*/
let snowContainer = document.querySelector(".snow-container");

/*下雪特效製作*/
const createSnow = () => {
    let snow = document.createElement("span");
    snow.className = "snow";
    minSize = 5;
    maxSize = 10;
    /*雪隨機生成大小*/
    let snowSize = Math.random() * (maxSize - minSize) + minSize;

    snow.style.width = snowSize + "px";
    snow.style.height = snowSize + "px";

    /*雪隨機生成降下位置*/
    snow.style.left = Math.random() * 100 + "%";

    snowContainer.appendChild(snow);

    /*十秒後雪特效消失*/
    setTimeout(() => {
        snow.remove();
    }, 10000);
};

/*呼叫下雪特效*/
setInterval(createSnow, 100);