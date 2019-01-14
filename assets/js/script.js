$(document).ready(function () {
    $('.full').on('click', function (e) {
        $('html, body').animate({
            scrollTop: $(".item").offset().top
        }, 2000);
    });
    $('.selectID').each(function () {
        $('[data-product-id="' + $(this).data('for-product-id') + '"]').attr('data-price', $(this).find(":selected").text());
    });

    $('.selectID').on('change', function () {
        $('[data-product-id="' + $(this).data('for-product-id') + '"]').attr('data-price', $(this).find(":selected").text());
    });
});