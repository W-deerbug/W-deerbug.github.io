import "./SectionTitle.css";

interface Props {
  title: string;
  icon?: string;
  iconSize?: number;
  iconColor?: "text" | "light" | "muted" | "accent";
}

export default function SectionTitle({ title, icon, iconSize, iconColor }: Props) {
  return (
    <div className="section-title">
      <h2>
        {icon && (
          <span className={[
            "material-symbols-outlined",
            "section-title-icon",
            iconSize ? `icon-size-${iconSize}` : "",
            iconColor ? `icon-color-${iconColor}` : "",
          ].filter(Boolean).join(" ")}>
            {icon}
          </span>
        )}
        {title}
      </h2>
      <hr />
    </div>
  );
}
