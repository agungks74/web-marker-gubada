const markerAksara = ['marker-carakan.jpg','marker-murda.jpg','marker-rekan.jpg','marker-swara.jpg','marker-sandhanganswara.jpg','marker-sandhanganpwanda.jpg','marker-penandakonsonan.jpg']
const aButton = document.querySelectorAll('.list-group-item');
const images = document.querySelector('.carousel-inner');
const marker = document.createElement('img');
marker.setAttribute('class', 'd-block mx-auto')

for(let aItem of aButton){
    aItem.addEventListener('click', (event) => {
    const activeItem = document.querySelector('a.active')
    activeItem.classList.remove('active');
    event.target.classList.add('active');
    
    images.innerHTML = '';
    
    switch(+event.target.id){
        case 1:
            const cItem0 = document.createElement('div');
            cItem0.setAttribute('class', 'carousel-item active')

            const marker0 = document.createElement('img');
            marker0.setAttribute('src', 'img/marker/' + markerAksara[0]);
            marker0.setAttribute('class', 'd-block mx-auto')
            cItem0.appendChild(marker0);

            const cItem1 = document.createElement('div');
            cItem1.setAttribute('class', 'carousel-item')

            const marker1 = document.createElement('img');
            marker1.setAttribute('src', 'img/marker/' + markerAksara[1]);
            marker1.setAttribute('class', 'd-block mx-auto')
            cItem1.appendChild(marker1);


            const cItem2 = document.createElement('div');
            cItem2.setAttribute('class', 'carousel-item')

            const marker2 = document.createElement('img');
            marker2.setAttribute('src', 'img/marker/' + markerAksara[2]);
            marker2.setAttribute('class', 'd-block mx-auto')
            cItem2.appendChild(marker2);

            const cItem3 = document.createElement('div');
            cItem3.setAttribute('class', 'carousel-item')

            const marker3 = document.createElement('img');
            marker3.setAttribute('src', 'img/marker/' + markerAksara[3]);
            marker3.setAttribute('class', 'd-block mx-auto')
            cItem3.appendChild(marker3);

            const cItem4 = document.createElement('div');
            cItem4.setAttribute('class', 'carousel-item')

            const marker4 = document.createElement('img');
            marker4.setAttribute('src', 'img/marker/' + markerAksara[4]);
            marker4.setAttribute('class', 'd-block mx-auto')
            cItem4.appendChild(marker4);

            const cItem5 = document.createElement('div');
            cItem5.setAttribute('class', 'carousel-item')

            const marker5 = document.createElement('img');
            marker5.setAttribute('src', 'img/marker/' + markerAksara[5]);
            marker5.setAttribute('class', 'd-block mx-auto')
            cItem5.appendChild(marker5);

            const cItem6 = document.createElement('div');
            cItem6.setAttribute('class', 'carousel-item')

            const marker6 = document.createElement('img');
            marker6.setAttribute('src', 'img/marker/' + markerAksara[6]);
            marker6.setAttribute('class', 'd-block mx-auto')
            cItem6.appendChild(marker6);

            console.log(cItem0)
            images.append(cItem0,cItem1,cItem2,cItem3,cItem4,cItem5,cItem6);
            return;
        break;
        case 2:
            marker.setAttribute('src', 'img/marker/marker-kataganti.jpg');
        break;
        case 3:
        marker.setAttribute('src', 'img/marker/marker-katatanya.jpg');
         
        break;
        case 4:
        marker.setAttribute('src', 'img/marker/marker-bagiantubuh.jpg');
        break;
        case 5:
        marker.setAttribute('src', 'img/marker/marker-jeniswarna.jpg');
        break;
        case 6:
        marker.setAttribute('src', 'img/marker/marker-ungkapan.jpg');
        break;
        case 7:
        marker.setAttribute('src', 'img/marker/marker-katakerja.jpg');
        break;
        case 8:
        marker.setAttribute('src', 'img/marker/marker-katasifat.jpg');
        break;
         }
         images.appendChild(marker);

    })
}