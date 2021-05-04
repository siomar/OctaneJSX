import Octane from "./core.js";

function OctaneImg(): HTMLElement {
  return (
    <div class="octane">
      <img src="./assets/octane.png" width="50%" alt="Octane" />
    </div>
  );
}

function Welcome({ title }: any): HTMLElement {
  return (
    <div class="box">
      <h1 class="box-title">{title}</h1>
      <p class="box-subtitle">
        Octane é um projeto que demonstra o uso de JSX sem o uso de um framework
        ou library popular de mercado.
      </p>
      <OctaneImg />
    </div>
  );
}

Octane.render(<Welcome title="Octane JSX" />, document.getElementById("root"));
