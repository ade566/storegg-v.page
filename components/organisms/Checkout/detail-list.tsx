interface ContentProps {
  p1: string;
  p2: string;
}

export default function CheckoutDetailList(props: ContentProps) {
  const { p1, p2 } = props;

  return (
    <p className="text-lg color-palette-1 mb-20">
      {p1}
      <span className="purchase-details">{p2}</span>
    </p>
  )
}
