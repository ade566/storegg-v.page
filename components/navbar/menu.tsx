import Link from 'next/link';
import cx from 'classnames';

interface MenuProps {
  title: string;
  href: string;
  active?: boolean;
}

export default function Menu(props: Partial<MenuProps>) {
  const { title, href = '/', active = false } = props;
  const classTitle = cx({
    'nav-link': true,
    active,
  });

  return (
    <li className="nav-item my-auto">
      <Link href={href} className={classTitle} aria-current="page">
        {title}
      </Link>
    </li>
  )
}
