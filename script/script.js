const images = document.querySelector('.carousel-inner');
const marker = document.createElement('img');
const listMateri = document.querySelector('.list-group');
const markerImages = document.querySelector('.carousel-inner');
const cor = document.querySelector('.carousel');

let bahasa;
const nextPrevDiv = document.createElement('div');

nextPrevDiv.innerHTML = `
<button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>`;

function changeLang() {
  const v = document.getElementById('langSelect');

  bahasa = daftarBahasa.find((lang) => lang.namaBahasa === v.value);

  changeMain();
  changeImageMarkers(bahasa.daftarMateri[0].marker);
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
      const activeItem = document.querySelector('a.active');
      activeItem.classList.remove('active');
      event.target.classList.add('active');

      changeImageMarkers(mat[i].marker);
    });

    listMateri.append(aItem);
  }
}

function changeImageMarkers(images) {
  markerImages.innerHTML = '';

  const markers = images;
  for (let img = 0; img < markers.length; img++) {
    const aItem = document.createElement('img');
    aItem.setAttribute('src', 'img/marker/' + markers[img]);
    aItem.setAttribute('class', 'd-block mx-auto');

    const aCorouselItem = document.createElement('div');
    aCorouselItem.setAttribute('class', 'carousel-item');

    if (img === 0) {
      aCorouselItem.classList.add('active');
    }

    if (img === markers.length - 1) {
      cor.append(nextPrevDiv);
    }

    aCorouselItem.append(aItem);
    markerImages.append(aCorouselItem);
  }
}
