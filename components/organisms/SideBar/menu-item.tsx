import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

interface MenuItemProps {
  svg: 'overview' | 'transaction' | 'messages' | 'card' | 'rewards' | 'settings' | 'logout';
  href?: string;
  title: string;
  active?: boolean;
}

export default function MenuItem(props: Partial<MenuItemProps>) {
  const {
    svg, href = false, title, active = false,
  } = props;

  const classExtend = cx({
    item: true,
    'mb-30': true,
    active,
  });

  return (
    <div className={classExtend}>
      <div className="icon me-3">
        <Image src={`/icon/ic-menu-${svg}.svg`} width={25} height={25} />
      </div>
      <p className="item-title m-0">
        <Link href={`/member${href}`}>
          <a className="text-lg text-decoration-none">{title}</a>
        </Link>
      </p>
    </div>
  )
}
