
const themeLight = document.querySelector('.theme-light');
const themeDark = document.querySelector('.theme-dark');
const body = document.querySelector('body');
const themeModeIcon = document.querySelector('.theme-icon-active-type');
const statusLight = document.querySelector('.statusLight');
const statusDark = document.querySelector('.statusDark');
const navbarToggler = document.querySelector('.navbar-toggler');
const btnRoundeds = document.querySelectorAll('.btn-rounded'); // all the btn-rounded element
const cards = document.querySelectorAll('.card'); // all the card element
// project filtering
const allBtn = document.querySelector('#all');
const frontendBtn = document.querySelector('#frontend');
const backendBtn = document.querySelector('#backend');
const fullstackBtn = document.querySelector('#fullstack');
const fullstack = document.querySelectorAll('.fullstack');
const frontend = document.querySelectorAll('.frontend');
const backend = document.querySelectorAll('.backend');

// change to dark
themeDark.addEventListener('click', ()=>{
    body.classList.replace('light', 'dark');
    themeModeIcon.setAttribute('href', '#moon-stars-fill');
    statusLight.classList.add('d-none');
    statusDark.classList.remove('d-none');
    navbarToggler.setAttribute('data-bs-theme', "dark");
    setCardThemeDark();
    setButtonThemeDark();

})

// change to light
themeLight.addEventListener('click', ()=>{
    body.classList.replace('dark', 'light');
    themeModeIcon.setAttribute('href', '#sun-fill');
    statusLight.classList.remove('d-none');
    statusDark.classList.add('d-none');
    navbarToggler.setAttribute('data-bs-theme', "light");
    setCardThemeLight();
    setButtonThemeLight();
})

// get fullstack projects
fullstackBtn.addEventListener('click', ()=>{
    setBtn(fullstackBtn);
    setBtnOutline(frontendBtn);
    setBtnOutline(backendBtn);
    setBtnOutline(allBtn);

    // remove d-none from all fullstack projects
    removeDisplayNone(fullstack);
    // add d-none to the rest of projects
    setDisplayNone(frontend);
    setDisplayNone(backend);

});

// get frontend projects
frontendBtn.addEventListener('click', ()=>{
    setBtn(frontendBtn);
    setBtnOutline(fullstackBtn);
    setBtnOutline(backendBtn);
    setBtnOutline(allBtn);

    // remove d-none from all frontend projects
    removeDisplayNone(frontend);
    // add d-none to the rest of projects
    setDisplayNone(fullstack);
    setDisplayNone(backend);

});

// get backend projects
backendBtn.addEventListener('click', ()=>{
    setBtn(backendBtn);
    setBtnOutline(fullstackBtn);
    setBtnOutline(frontendBtn);
    setBtnOutline(allBtn);

    // remove d-none from all backend projects
    removeDisplayNone(backend);
    // add d-none to the rest of projects
    setDisplayNone(fullstack);
    setDisplayNone(frontend);

});

// get all projects
allBtn.addEventListener('click', ()=>{
    setBtn(allBtn);
    setBtnOutline(fullstackBtn);
    setBtnOutline(frontendBtn);
    setBtnOutline(backendBtn);

    // remove d-none from all projects
    removeDisplayNone(backend);
    removeDisplayNone(fullstack);
    removeDisplayNone(frontend);

});


const setButtonThemeDark = ()=>{
    btnRoundeds.forEach((btn)=>{
        btn.classList.replace('btn-rounded-default-light', 'btn-rounded-default-dark');
    });
}

const setButtonThemeLight = ()=>{
    btnRoundeds.forEach((btn)=>{
        btn.classList.replace('btn-rounded-default-dark', 'btn-rounded-default-light');
    })
}


const setCardThemeLight = ()=>{
    cards.forEach((card)=>{
        card.classList.replace('card-theme-dark', 'card-theme-light');
        card.classList.replace('card-secondary-dark', 'card-secondary-light');
    })
}

const setCardThemeDark = ()=>{
    cards.forEach((card)=>{
        card.classList.replace('card-theme-light', 'card-theme-dark');
        card.classList.replace('card-secondary-light', 'card-secondary-dark');
    })
}

// set the btn to btn-outline-primary
const setBtnOutline = (btn)=>{
    let x = btn.classList.contains('btn-primary');
    if (x){
        btn.classList.replace('btn-primary', 'btn-outline-primary')
    }
}

// set the btn to btn-primary
const setBtn = (btn)=>{
    let x = btn.classList.contains('btn-outline-primary');
    if (x){
        btn.classList.replace('btn-outline-primary', 'btn-primary')
    }
}

// set display none
const setDisplayNone = (elts) =>{
    elts.forEach((elt)=>{
        elt.classList.add('d-none');
    })
}

// remove display none
const removeDisplayNone = (elts) =>{
    elts.forEach((elt)=>{
        elt.classList.remove('d-none');
        elt.classList.add('d-flex');
    })
}