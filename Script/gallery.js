$(document).ready(() => {
    let image = $('<img>');
    let span1 = $('<span>&times<span>');
    
    let left = $('<span id="left"><<span>');
    let activeImage

    let right = $('<span id="right">><span>');

    
    let duzina = 9;
    // let duzina = $('.gallery').length;

    function goLeft(i) {
        if (!activeImage) activeImage = i
        if (activeImage > 1) {
            activeImage--
            image.attr('src', `Gallery/${activeImage}.jpg`);
        } else {
            activeImage = 9
            image.attr('src', `Gallery/${activeImage}.jpg`);
        }
    }

    function goRight(i) {
        if (!activeImage) activeImage = i
        if (activeImage < 9) {
            activeImage++
            image.attr('src', `Gallery/${activeImage}.jpg`);
        } else {
            activeImage = 1
            image.attr('src', `Gallery/${activeImage}.jpg`);
        }
    }

    function funkcija1() {
        $('#slika').empty();
        $('#slicice').hide();
        $('#slika').show();
    };

    function funkcija2(i) {
        $('#slika').append(image);
        span1.attr('id', 'zatvori');
        span1.css({
            'color': 'white',
            'position': 'absolute',
            'top': '0',
            'right': '10px',
            'font-size': '40px',
            'cursor': 'pointer'
        })
        left.css({
            'color': 'white',
            'position': 'absolute',
            'top': '50%',
            'left': '50px',
            'font-size': '40px',
            'cursor': 'pointer'
        })
        right.css({
            'color': 'white',
            'position': 'absolute',
            'top': '50%',
            'right': '50px',
            'font-size': '40px',
            'cursor': 'pointer'
        })

        $('#slika').append(span1);
        $('#slika').append(left);

        $('#slika').append(right);

        $('#left').click(() => {
            goLeft(i)
        })
    
        $('#right').click(() => {
            goRight(i)
        })



    }



    for (let i = 1; i <= duzina; i++) {
        $(`#slicica${i}`).click(() => {
            funkcija1();
            image.attr('src', `Gallery/${i}.jpg`);
            funkcija2(i);
        });
    }


    $('#slika').on('click', '#zatvori', () => {
        $('#slika').hide();
        $('#slicice').show();
    })
})