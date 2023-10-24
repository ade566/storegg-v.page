/* eslint-disable react/no-array-index-key */
import Link from 'next/link';

interface MenuProps {
  title: string;
  listMenu: Array<any>;
}

export default function Menu(props: MenuProps) {
  const { title, listMenu } = props;

  return (
    <div className="col-md-4 col-6 mb-lg-0 mb-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
      <ul className="list-unstyled">
        {listMenu.map((data, i) => (
          <li className="mb-6" key={`footer-${i}`}>
            <Link href={data[0]} className="text-lg color-palette-1 text-decoration-none">
              {data[1]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
