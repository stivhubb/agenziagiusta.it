"use client";

// Apre la finestra di stampa del browser: da lì si stampa o si salva in PDF.
export function PulsanteStampa() {
  return (
    <button
      type="button"
      className="pulsante pulsante--contorno pulsante--medio"
      onClick={() => window.print()}
    >
      Stampa o salva in PDF
    </button>
  );
}
