describe("Tested function manipulates sites DOM", function () {

    beforeEach(function () {
        loadFixtures("cahee.html");
    });

    it("should be able to find elements of DOM", function () {
        expect($('#js-header')).toBeInDOM();
    });

    it("should change class on scroll over of element", function () {
        var header = $('#js-header');
        expect(header).toHaveClass('header--extended');
        expect(header).not.toHaveClass('header--fixed');

        window.scrollTop = 500;
        $(window).scroll(cohee.modifyOnScrollOver(header, window.scrollTop, 'header--extended', 'header--fixed'));

        expect(header).toHaveClass('header--fixed');
        expect(header).not.toHaveClass('header--extended');
    });
});
