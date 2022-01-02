interface TDinfoProps {
  title: string;
  desc: string;
  colorClass?: string;
}

export default function TDinfo(props: Partial<TDinfoProps>) {
  const { title, desc, colorClass = '' } = props;

  return (
    <p className="text-lg color-palette-1 mb-20">
      {title}
      <span className={`purchase-details ${colorClass}`}>{desc}</span>
    </p>
  )
}
