
    let position = 0;
    const slideToShow = 5;
    const slideToScroll = 2;
    const container = document.querySelector('.slider-container');
    const track = document.querySelector('.slider-track');
    // const item = document.querySelector('.slider-item');
    const btnPrev = document.querySelector('.btn-prev');
    const btnNext = document.querySelector('.btn-next');
    const items = document.querySelectorAll('.slider-item');
    const itemsCount = items.length;
    const itemWidth = container.clientWidth / slideToShow;
    const movePosition = slideToScroll * itemWidth;

    items.forEach((item) => {
        item.style.minWidth = `${itemWidth}px`;
    });


    btnPrev.addEventListener('click', () => {
        const itemsLeft = Math.abs(position) / itemWidth;
        position += itemsLeft >= slideToScroll ?  movePosition : itemsLeft * itemWidth;
        setPosition();
        checkBtns();
    });

    btnNext.addEventListener('click', () => {
        const itemsLeft = itemsCount - (Math.abs(position) + slideToShow * itemWidth) / itemWidth;
        position -= itemsLeft >= slideToScroll ?  movePosition : itemsLeft * itemWidth;
        setPosition();
        checkBtns();
    });

    const setPosition = () => {
        track.style.transform = `translateX(${position}px)`;
    };

    const checkBtns = () => {
        btnPrev.disabled = position === 0;
        btnNext.disabled = position <= -(itemsCount - slideToShow) * itemWidth;
    };

    checkBtns();