import Link from 'next/link';
import Image from 'next/image';

interface AuthProps {
  isLogin?: boolean;
}

export default function auth(props: Partial<AuthProps>) {
  const { isLogin } = props;

  if (isLogin) {
    return (
      <li className="nav-item my-auto dropdown d-flex">
        <div className="vertical-line d-lg-block d-none"> </div>
        <div>
          <a className="dropdown-toggle ms-lg-40" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            <Image src="/img/avatar-1.png" className="rounded-circle" width={40} height={40} />
          </a>

          <ul className="dropdown-menu border-0" aria-labelledby="dropdownMenuLink">
            <li>
              <Link href="/member"><a className="dropdown-item text-lg color-palette-2">My Profile</a></Link>
            </li>
            <li>
              <Link href="/wallet"><a className="dropdown-item text-lg color-palette-2">Wallet</a></Link>
            </li>
            <li>
              <Link href="/member/edit-profile"><a className="dropdown-item text-lg color-palette-2">Account Settings</a></Link>
            </li>
            <li>
              <Link href="/sign-in"><a className="dropdown-item text-lg color-palette-2">Log Out</a></Link>
            </li>
          </ul>
        </div>
      </li>
    );
  }

  return (
    <li className="nav-item my-auto">
      <Link href="/sign-in">
        <a className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill" href="/#" role="button">Sign In</a>
      </Link>
    </li>
  )
}