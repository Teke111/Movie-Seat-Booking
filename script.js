const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const price = document.getElementById('price');

const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value;

const populateUI = () => {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    const selectedMoviePrice = localStorage.getItem('selectedMoviePrice');

    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }

    if (selectedMoviePrice !== null) {
        count.innerText = selectedSeats.length;
        price.innerText = selectedSeats.length * +selectedMoviePrice;
    }
};

populateUI();

selectedMovie = (movieIndex, moviePrice) => {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
};

const updateSelectedSeatsCount = () => {
    const selectedSeats = document.querySelectorAll('.row .selected');

    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    price.innerText = selectedSeatsCount * ticketPrice;
};

// Seat select event
container.addEventListener('click', e => {
    if (
        e.target.classList.contains('seat') &&
        !e.target.classList.contains('occupied')

    ) {
        e.target.classList.toggle('selected');

        updateSelectedSeatsCount();
    }
});

// Movie select event
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    console.log(ticketPrice)
    selectedMovie(e.target.selectedIndex, e.target.value);

    updateSelectedSeatsCount();
});



// DATE


let date = new Date();
let main_date = date.getDate();
// console.log((main_date))

Array.from(document.getElementsByClassName('date_point')).forEach((el) => {
    if (el.innerText == main_date) {
        el.classList.add('h6_active')
    }
})


let offDate = () => {
    Array.from(document.getElementsByClassName('date_point')).forEach(el => {
        el.classList.remove('h6_active');
    })
}

Array.from(document.getElementsByClassName('date_point')).forEach(el => {
    el.addEventListener('click', () => {
        if (el.innerText > date.getDate() - 1) {
            offDate();
            el.classList.add('h6_active');
            // main_date = +el.innerText;
            // document.getElementById('chair').innerHTML = '';
            // let data = pvr.filter(obj => obj.date == main_date && obj.movie == url_segment[1]);
            // console.log(data);
            // addSeats(data)
        }
    })
})


const first = document.getElementById('first').textContent;

document.getElementById("book_ticket_right").addEventListener("click", () => {
    console.log(first)
})