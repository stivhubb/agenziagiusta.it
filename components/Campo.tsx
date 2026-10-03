// Campo di un modulo: etichetta e casella. Con "righe" diventa un'area di testo.
export function Campo({
  id,
  etichetta,
  tipo = "text",
  righe,
}: {
  id: string;
  etichetta: string;
  tipo?: string;
  righe?: number;
}) {
  return (
    <div className="campo">
      <label htmlFor={id}>{etichetta}</label>
      {righe ? <textarea id={id} rows={righe} /> : <input id={id} type={tipo} />}
    </div>
  );
}
