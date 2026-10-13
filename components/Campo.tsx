// Campo di un modulo: etichetta e casella. Con "righe" diventa un'area di testo.
export function Campo({
  id,
  nome,
  etichetta,
  tipo = "text",
  righe,
  obbligatorio,
}: {
  id: string;
  nome?: string;
  etichetta: string;
  tipo?: string;
  righe?: number;
  obbligatorio?: boolean;
}) {
  return (
    <div className="campo">
      <label htmlFor={id}>{etichetta}</label>
      {righe ? (
        <textarea id={id} name={nome} rows={righe} required={obbligatorio} />
      ) : (
        <input id={id} name={nome} type={tipo} required={obbligatorio} />
      )}
    </div>
  );
}
