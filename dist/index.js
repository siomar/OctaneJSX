import Octane from "./core.js";
function OctaneImg() {
    return (Octane.createElement("div", { class: "octane" },
        Octane.createElement("img", { src: "./assets/octane.png", width: "50%", alt: "Octane" })));
}
function Welcome({ title }) {
    return (Octane.createElement("div", { class: "box" },
        Octane.createElement("h1", { class: "box-title" }, title),
        Octane.createElement("p", { class: "box-subtitle" }, "Octane \u00E9 um projeto que demonstra o uso de JSX sem o uso de um framework ou library popular de mercado."),
        Octane.createElement(OctaneImg, null)));
}
Octane.render(Octane.createElement(Welcome, { title: "Octane JSX" }), document.getElementById("root"));
