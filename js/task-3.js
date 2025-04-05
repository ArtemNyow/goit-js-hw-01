console.log("Task 3");
function getElementWidth(content, padding, border) {
    function parsePx(value) {
        return parseFloat(value);
    }
    let contentWidth = parsePx(content);
    let paddingWidth = parsePx(padding)*2;
    let borderWidth = parsePx(border)*2;
    return console.log(contentWidth + paddingWidth + borderWidth);
};
getElementWidth("50px", "8px", "4px");
getElementWidth("60px", "12px", "8.5px");
getElementWidth("200px", "0px", "0px");

