let url = window.location.href;
// console.log(url);
let url_segment = url.split('?');
console.log(url_segment[1]);


let date = new Date();
let main_date = date.getDate();
// console.log((main_date))


Array.from(document.getElementsByClassName('date_point')).forEach((el) => {
    if (el.innerText == main_date) {
        el.classList.add('h6_active')
    }
})

let pvr = [
    {
        pvr: 'PVR Vegus',
        movie: 'Avengers',
        loc: 'Dwarka Sector 14 , New Delhi',
        audi: 1,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: 6,
        img: 'image/a1.jpg',
        background: 'image/a1.jpg',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'Joker',
        loc: 'Dwarka Sector 14 , New Delhi',
        audi: 2,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [3, 8, 21, 22, 9, 13, 16, 18, 20, 12, 15],
        h: [5, 6, 8, 19, 24, 8, 13, 19, 21, 12, 11],
        f: [1, 3, 13, 15, 22],
        e: [3, 9, 10, 20, 24],
        d: [7, 12, 9, 21, 20],
        c: [6, 8, 11, 12, 19],
        b: [8, 5, 12, 13, 14],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: 6,
        img: 'image/j1.jpg',
        background: 'image/j3.jpg',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'Toy',
        loc: 'Dwarka Sector 14 , New Delhi',
        audi: 1,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [18, 10],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: 6,
        img: 'image/t1.jpg',
        background: 'image/t2.jpg',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'Simba',
        loc: 'Dwarka Sector 14 , New Delhi',
        audi: 1,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [18, 10],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: 6,
        img: 'image/l1.jpeg',
        background: 'image/l2.jpg',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'Jagun',
        loc: 'Dwarka Sector 14 , New Delhi',
        audi: 1,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [18, 10],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: 6,
        img: 'image/jagun1.jpg',
        background: 'image/jagun3.jpg',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'Merry',
        loc: 'Dwarka Sector 14 , New Delhi',
        audi: 1,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [18, 10],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: 6,
        img: 'image/m2.jpg',
        background: 'image/m2.jpg',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'Scream',
        loc: 'Dwarka Sector 14 , New Delhi',
        audi: 1,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [18, 10],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: 6,
        img: 'image/s2.jpg',
        background: 'image/s2.jpg',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'Pearl',
        loc: 'Dwarka Sector 14 , New Delhi',
        audi: 1,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [18, 10],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: 6,
        img: 'image/p1.jpg',
        background: 'image/p1.jpg',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'Dune',
        loc: 'Dwarka Sector 14 , New Delhi',
        audi: 1,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [18, 10],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: 6,
        img: 'image/d2.jpg',
        background: 'image/d2.jpg',
    }
]






let addSeats = (arr) => {
    // console.log(arr)
    arr.forEach((el, i) => {
        const { series, row_section, seat, price, a, b, c, d, e, f, h, j } = el;

        // Create Row
        for (let index = 0; index < series.length; index++) {
            // console.log(series[index]);
            let row = document.createElement('div');
            row.className = 'row';

            let booked_seats = [];
            booked_seats = [...eval(series[index].toLocaleLowerCase())];
            // console.log(booked_seats);


            // Create Seats

            for (let seats = 0; seats < seat; seats++) {

                if (seats === 0) {
                    let span = document.createElement('span');
                    span.innerText = series[index];
                    row.appendChild(span);
                }

                let li = document.createElement('li');
                let filter = booked_seats.filter(el => {
                    return el === seats;
                })
                // console.log(filter);

                if (filter.length > 0) {
                    li.className = "seat booked";
                } else {
                    li.className = "seat";
                }

                li.id = series[index] + seats;
                li.setAttribute('book', seats);
                li.setAttribute('sr', series[index]);
                li.innerText = price[index];


                li.onclick = () => {
                    if (li.className === 'seat booked') {
                        li.classList.remove('selected');
                    } else {
                        li.classList.toggle('selected');
                    }
                    let len = Array.from(document.getElementsByClassName('selected')).length;
                    if (len > 0) {
                        document.getElementById('book_ticket').style.display = 'unset';
                    } else {
                        document.getElementById('book_ticket').style.display = 'none';
                    }
                }


                row.appendChild(li);

                if (seats === seat - 1) {
                    let span = document.createElement('span');
                    span.innerText = series[index];
                    row.appendChild(span);
                }
            }

            document.getElementById('chair').appendChild(row);
        }


    })
}



let data = pvr.filter(obj => obj.date == main_date && obj.movie == url_segment[1]);
// console.log(data);

document.getElementById('title').innerText = data[0].movie;
document.getElementById('poster').src = data[0].img;


var styleElem = document.head.appendChild(document.createElement("style"));

styleElem.innerHTML = `.book .right:before {background: url(${data[0].background})no-repeat center -30px/cover}`;


addSeats(data)



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
            main_date = +el.innerText;
            document.getElementById('chair').innerHTML = '';
            let data = pvr.filter(obj => obj.date == main_date && obj.movie == url_segment[1]);
            // console.log(data);
            addSeats(data)
        }
    })
})




document.getElementById('book_ticket').addEventListener('click', () => {
    Array.from(document.getElementsByClassName('selected')).forEach(el => {
        let seat_no = el.getAttribute('book');
        let seat_sr = el.getAttribute('sr').toLocaleLowerCase();
        let seat_price = el.innerText;

        let obj = {
            movie: url_segment[1],
            date: main_date
        }

        let getData = pvr.map((obj) => {
            if (
                obj.movie === url_segment[1] && obj.date === main_date
            ) {
                obj[seat_sr].push(+seat_no);
            }
            return obj;
        });

        // console.log(getData);


        // PREVENTS USERS FROM RE-BOOKING SEATS THAT HAVE BEING BOOKED
        // IT FILTERS THE DATE AND MOVIE NAME TO THE addSeats function
        document.getElementById('chair').innerHTML = '';
        let data = getData.filter(obj => obj.date === main_date && obj.movie === url_segment[1]);
        addSeats(data);

        // REMOVE SCREEN FROM THE TICKET SECTION
        document.getElementById('screen').style.display = 'none';

        // REMOVE CHAIR FROM THE TICKET SECTION
        document.getElementById('chair').style.display = 'none';

        // REMOVE DETAILS FROM THE TICKET SECTION
        document.getElementById('det').style.display = 'none';


        document.getElementById('book_ticket').style.display = 'none';

        // DISPLAY THE BACK BUTTON
        document.getElementById('back_ticket').style.display = 'unset';

        // TO DISPLAY THE TICKET
        document.getElementById('ticket').style.display = 'block';


        let tic = document.createElement('div');
        tic.className = 'tic';
        tic.innerHTML = `
                    <div class="barcode">
                        <div class="card">
                            <h6>ROW ${seat_sr.toLocaleUpperCase()}</h6>
                            <h6>${main_date} November 2023</h6>
                        </div>
                        <div class="card">
                            <h6>Seat ${seat_no}</h6>
                            <h6>12:00</h6>
                        </div>

                        <svg id="${seat_sr}${seat_no}barcode"></svg>
                        <h5>IMAX CINEMA</h5>
                    </div>
                    <div class="tic_details" style=" background: url(${data[0].background})no-repeat center -35px /cover">
                        <div class="type">4DX</div>
                        <h5 class="pvr"><span>Imax</span> Cinema</h5>
                        <h1>${url_segment[1]}</h1>
                        <div class="seat_det">
                            <div class="seat_cr">
                                <h6>ROW</h6>
                                <h6>${seat_sr.toLocaleUpperCase()}</h6>
                            </div>
                            <div class="seat_cr">
                                <h6>SEAT</h6>
                                <h6>${seat_no}</h6>
                            </div>
                            <div class="seat_cr">
                                <h6>DATE</h6>
                                <h6>${main_date} <sub>nov</sub></h6>
                            </div>
                            <div class="seat_cr">
                                <h6>TIME</h6>
                                <h6>12:30 <sub>pm</sub></h6>
                            </div>
                            <div class="seat_cr">
                                <h6>PRICE</h6>
                                <h6>10$</h6>
                            </div>
                        </div>
                    </div>
        `
        document.getElementById('ticket').appendChild(tic);

        JsBarcode(`#${seat_sr}${seat_no}barcode`,
            `${seat_sr.toLocaleUpperCase()}${seat_no}${seat_price}${main_date}92023`);
    })
})


document.getElementById('back_ticket').addEventListener('click', () => {

    // TO DISPLAY THE SCREEN AFTER THE USER PRESSES THE BACK ARROW 
    document.getElementById('screen').style.display = 'inline-block';

    document.getElementById('chair').style.display = 'block';
    document.getElementById('det').style.display = 'flex';
    document.getElementById('book_ticket').style.display = 'unset';
    document.getElementById('back_ticket').style.display = 'none';
    document.getElementById('ticket').style.display = 'none';
})


