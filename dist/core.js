const Octane = {
    createElement(tag, attrs, ...children) {
        if (typeof tag === "function") {
            return tag(attrs);
        }
        let attributes = attrs || {};
        let element = document.createElement(tag);
        Object.keys(attributes).forEach((key) => {
            element.setAttribute(key, attributes[key]);
        });
        for (let child of children) {
            if (child instanceof HTMLElement)
                element.appendChild(child);
            else if (typeof child === "string")
                element.appendChild(document.createTextNode(child));
        }
        return element;
    },
    render(tag, selector) {
        selector.appendChild(tag);
    },
};
export default Octane;
