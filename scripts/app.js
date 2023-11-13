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


let involved_grid = document.querySelector('.involved_grid');

info.forEach((data)=>{
    involved_grid.innerHTML += `

    <div class="involved_main">
        <h1 class="titled">${data.titled}</h1>
        <p class="texted">${data.texted}</p>
    </div>
    
    `
})


let stake_grid = document.querySelector('.stake_grid');

team.forEach((data)=>{
    stake_grid.innerHTML += `

    <div class="stake_card_main">
        <div class="stake_card_img">
            <img src="${data.picture}">
                </div>
                    
                <div class="stake_card_text">
                    <h3>${data.name}</h3>
                    <small>${data.role}</small>
                </div>
        </div>
    </div>
    
    `
})

let global_grid = document.querySelector('.global_grid');

farmer.forEach((data)=> {
    global_grid.innerHTML += `

    <div class="global_main">
        <div class="global_image">
            <img src="${data.image}" alt="">
        </div>
            <small>${data.small}</small>
    </div>

    `
})