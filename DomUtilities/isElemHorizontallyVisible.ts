function isElemHorizontallyVisible(elem: Element) {
    const rect = elem.getBoundingClientRect();
    const elemRightTop = { x: rect.left + rect.width, y: rect.top }
    if (elemRightTop.x < 0) return false;
    const isVisible = elemRightTop.x <= (document.documentElement.clientWidth || window.innerWidth);
    return { isVisible, width: rect.width };
}
// https://stackoverflow.com/a/41698614/7730888
