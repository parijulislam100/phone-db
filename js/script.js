const main = document.getElementById('main')
const dataLoad = () =>{
    const input = document.getElementById('input-field');
    const inputValue = input.value;
    console.log(inputValue);
    if(inputValue >= 0){
        const p = document.getElementById('err');
        p.innerText='give me a string';
        input.value = '';
        console.log(p)
    }
    else if(inputValue < 0){
        const p = document.getElementById('err');
        p.innerText='give me a string';
        input.value = '';
    }
    else{
       fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
       .then(res => res.json())
       .then(data => showData(data.data))
    }
     
    
   
};
const showData = (phones) =>{
    // console.log(phones);
    for(const phone of phones){
        console.log(phone)
        let div = document.createElement('div');
        div.classList.add('col-lg-4');
        div.classList.add('mb-4')
        div.innerHTML=`
            <div class="card" style="width: 18rem;">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${phone.phone_name} </h5>
                    <p class="card-text">${phone.brand} </p>
                <a onclick="singlePhoneLoad('${phone.slug}')" href="#" class="btn btn-primary">explore</a>
                </div>
            </div>
        
        `
        main.appendChild(div)
    }
};
const singlePhoneLoad = (id) =>{
    console.log(id);
    url=`
    https://openapi.programming-hero.com/api/phone/${id}
    `
    fetch(url)
    .then(res => res.json())
    .then(data => showSinglePhone(data.data));
};
const showSinglePhone = (info) => {
    console.log(info);
    div = document.createElement('div');
    console.log(div);
    document.getElementById('details').innerHTML =`
        <div class="card" style="width: 18rem;">
        <img src="${info.image}" class="card-img-top" alt="...">
        <div class="card-body">
                <h5 class="card-title">${info.name} </h5>
                <p class="card-text">${info.brand} </p>
                <p class="card-text">${info.mainFeatures.chipSet
                } </p>
                <p class="card-text">${info.mainFeatures.storage
                } </p>
                <p class="card-text">${info.mainFeatures.displaySize
                } </p>
                <p class="card-text">${info.mainFeatures.memory
                } </p>
        </div>
    </div> 
    `
    main.innerHTML = '';
}
