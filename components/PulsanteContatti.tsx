import Link from "next/link";
import { percorsi } from "@/content/sito";
import { Busta } from "./Icone";

// Pulsante fisso che segue lo scorrimento: in tutte le pagine tranne Contatti.

export function PulsanteContatti() {
  return (
    <Link
      href={percorsi.contatti}
      className="pulsante pulsante--nero pulsante--piccolo pulsante-contatti"
    >
      <Busta />
      Contatti
    </Link>
  );
}
