type Props = { size?: number; spessore?: number };

function Icona({ size, spessore, children }: Required<Props> & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={spessore}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function Freccia({ size = 18, spessore = 2.2 }: Props) {
  return (
    <Icona size={size} spessore={spessore}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </Icona>
  );
}

export function FrecciaGiu({ size = 16, spessore = 2.2 }: Props) {
  return (
    <Icona size={size} spessore={spessore}>
      <path d="M12 5v14" />
      <path d="M6 13l6 6 6-6" />
    </Icona>
  );
}

export function Spunta({ size = 20, spessore = 2.6 }: Props) {
  return (
    <Icona size={size} spessore={spessore}>
      <path d="M5 12l5 5 9-10" />
    </Icona>
  );
}

export function Busta({ size = 18, spessore = 2 }: Props) {
  return (
    <Icona size={size} spessore={spessore}>
      <path d="M4 6h16v12H4z" />
      <path d="M4 7l8 6 8-6" />
    </Icona>
  );
}
