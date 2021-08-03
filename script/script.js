const images = document.querySelector('.carousel-inner');
const marker = document.createElement('img');
const listMateri = document.querySelector('.list-group');
const markerImages = document.querySelector('.carousel-inner');

let bahasa;

function changeLang() {
  const v = document.getElementById('langSelect');

  switch (v.value) {
    case daftarBahasa[0].namaBahasa:
      bahasa = daftarBahasa[0];
      break;
    case daftarBahasa[1].namaBahasa:
      bahasa = daftarBahasa[1];
      break;
  }
  changeMain();
}

function changeMain() {
  listMateri.innerHTML = '';

  const mat = bahasa.daftarMateri;

  for (let i = 0; i < mat.length; i++) {
    const aItem = document.createElement('a');
    aItem.setAttribute('href', '#');
    aItem.setAttribute('class', 'list-group-item list-group-item-action');
    aItem.innerText = mat[i].namaMateri;

    if (i === 0) {
      aItem.classList.add('active');
    }

    aItem.addEventListener('click', (event) => {
      markerImages.innerHTML = '';

      const activeItem = document.querySelector('a.active');
      activeItem.classList.remove('active');
      event.target.classList.add('active');

      const markers = mat[i].marker;

      console.log(markers);

      for (let img = 0; img < markers.length; img++) {
        const aItem = document.createElement('img');
        aItem.setAttribute('src', 'img/marker/' + markers[img]);
        aItem.setAttribute('class', 'd-block mx-auto');

        const aCorouselItem = document.createElement('div');
        aCorouselItem.setAttribute('class', 'carousel-item');

        if (img === 0) {
          aCorouselItem.classList.add('active');
        }

        aCorouselItem.append(aItem);
        markerImages.append(aCorouselItem);
      }
    });

    listMateri.append(aItem);
  }
}
