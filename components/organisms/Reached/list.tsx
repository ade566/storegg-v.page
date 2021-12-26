interface ListProps {
  p1: string;
  p2: string;
  divClass?: string;
}

export default function List(props: Partial<ListProps>) {
  const { p1, p2, divClass = false } = props;

  return (
    <div className={`me-lg-35${divClass}`}>
      <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">{p1}</p>
      <p className="text-lg text-lg-start text-center color-palette-2 m-0">{p2}</p>
    </div>
  )
}
