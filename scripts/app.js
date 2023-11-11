const navigate = document.getElementById('navigate');

navigate.addEventListener('click', () => {
    window.location.href = 'donation_form.html';
})

const next_page = document.getElementById('next_page');

next_page.addEventListener('click', () => {
    window.location.href = 'donation_form.html';
});



let card_grid = document.querySelector('.vision_card_container');

datas.forEach((data)=>{
    card_grid.innerHTML += `

    <div class="card_main">
        <div class="card_img">
            <img src="${data.img}" alt="">
        </div>
        <div class="card_text">
            <h3 class="title">${data.title}</h3>
            <p class="para">${data.para}</p>
        </div>
    </div>
    
    `

})