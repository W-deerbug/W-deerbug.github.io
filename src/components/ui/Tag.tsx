import "./Tag.css";

interface Props {
  label: string;
}

export default function Tag({ label }: Props) {
  return <span className="tag">{label}</span>;
}
