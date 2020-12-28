$(document).ready(function () {
    let position = 0;
    const slideToShow = 4;
    const slideToScroll = 2;
    const container = $('.slider-container');
    const track = $('.slider-track');
    const item = $('.slider-item');
    const btnPrev = $('.btn-prev');
    const btnNext = $('.btn-next');
    const itemsCount = item.length;
    const itemWidth = container.width() / slideToShow;
    const movePosition = slideToScroll * itemWidth;
    item.each(function (index, item) {
        $(item).css({
            minWidth: itemWidth,
        });
    });

    btnPrev.click(function () {
        const itemsLeft
        position += movePosition
        setPosition();
        checkBtns();
    });

    btnNext.click(function () {
        const itemsLeft = Math.abs(position) + slideToShow * itemWidth
        position -= movePosition
        setPosition();
        checkBtns();
    });

    const setPosition = () => {
        track.css({
            transform: `translateX(${position}px)`
        });
    };

    const checkBtns = () => {
        btnPrev.prop('disabled', position === 0);
        btnNext.prop('disabled', position <= -(itemsCount - slideToShow) * itemWidth);
    };

    checkBtns();
});