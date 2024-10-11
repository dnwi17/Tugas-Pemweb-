function showDetails(destination) {
    const detailsContent = {
        destination1: {
            title: 'Sawarna',
            description: 'Sawarna adalah desa pesisir yang indah yang terletak di Banten, Indonesia. Desa ini terkenal dengan pantai - pantainya yang memukau , seperti Pantai Sawarna, yang menarik pengunjung dengan airnya yang biru jernih , tebing-tebing yang dramatis , dan pemandangan alam yang tenang . Desa ini merupakan tempat liburan yang sempurna bagi para pecinta alam dan mereka yang mencari ketenangan jauh dari hiruk pikuk kota.'
        },
        destination2: {
            title: 'Karang Bolong',
            description: 'Karang Bolong, yang berarti " karang berlubang , " mengacu pada formasi batuan unik di sepanjang pantai Anyer , Banten . Lengkungan alami ini diukir oleh ombak , menciptakan pemandangan laut yang menakjubkan melalui lubang di batu . Ini adalah tempat yang populer untuk fotografi dan menikmati pemandangan laut yang indah.'
        }
    };

    document.querySelector('main').classList.add('hidden');
    document.getElementById('details').classList.remove('hidden');
    document.getElementById('details-content').innerHTML = `
        <h2>${detailsContent[destination].title}</h2>
        <p>${detailsContent[destination].description}</p>
    `;
}

function hideDetails() {
    document.querySelector('main').classList.remove('hidden');
    document.getElementById('details').classList.add('hidden');
}
