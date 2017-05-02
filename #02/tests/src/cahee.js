var cohee ={};

cohee.modifyOnScrollOver = function(element, position, classBefore, classAfter) {

    if(position >= element.height() && element.hasClass(classBefore)) {
        element.removeClass(classBefore);
        element.addClass(classAfter);
        console.log("1");
    } else if(position < element.height() && element.hasClass(classAfter)) {
        element.addClass(classBefore);
        element.removeClass(classAfter);
        console.log("2");
    }
};
