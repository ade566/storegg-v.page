import Link from 'next/link';
import Image from 'next/image';

interface AuthProps {
  isLogin?: boolean;
}

export default function Auth(props: Partial<AuthProps>) {
  const { isLogin } = props;

  if (isLogin) {
    return (
      <li className="nav-item my-auto dropdown d-flex">
        <div className="vertical-line d-lg-block d-none"> </div>
        <div>
          <a className="dropdown-toggle ms-lg-40" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            <Image src="/img/avatar-1.png" className="rounded-circle" width={40} height={40} alt="" />
          </a>

          <ul className="dropdown-menu border-0" aria-labelledby="dropdownMenuLink">
            <li>
              <Link href="/member" className="dropdown-item text-lg color-palette-2">
                My Profile
              </Link>
            </li>
            <li>
              <Link href="/wallet" className="dropdown-item text-lg color-palette-2">
                Wallet
              </Link>
            </li>
            <li>
              <Link href="/member/edit-profile" className="dropdown-item text-lg color-palette-2">
                Account Settings
              </Link>
            </li>
            <li>
              <Link href="/sign-in" className="dropdown-item text-lg color-palette-2">
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      </li>
    );
  }

  return (
    <li className="nav-item my-auto">
      <Link href="/sign-in" className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill" role="button">
        Sign In
      </Link>
    </li>
  )
}
