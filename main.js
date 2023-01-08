const nigthMode = document.getElementById('nigth_mode');

const body = document.getElementsByTagName("body")[0];


const changeColor = ()=>{
    body.classList.toggle("change-body");
}

nigthMode.addEventListener('click',changeColor);