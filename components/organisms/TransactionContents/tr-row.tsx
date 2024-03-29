import Link from 'next/link'
import cx from 'classnames';
import Image from 'next/image';

interface TrRowProps {
  dataCategory: String;
  img: String;
  title: String;
  category: String;
  gold: String;
  nominal: String;
  status: 'Pending' | 'Failed' | 'Success';
}

export default function TrRow(props: TrRowProps) {
  const {
    dataCategory, img, title, category, gold, nominal, status,
  } = props;
  const statusClass = cx({
    'float-start icon-status': true,
    pending: status === 'Pending',
    failed: status === 'Failed',
    success: status === 'Success',
  });

  return (
    <tr data-category={dataCategory} className="align-middle">
      <th scope="row">
        <Image className="float-start me-3 mb-lg-0 mb-3" src={`/img/${img}`} width={80} height={60} alt="" />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">{title}</p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">{category}</p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">
          {gold}
          Gold
        </p>
      </td>
      <td>
        <p className="fw-medium color-palette-1 m-0">
          Rp
          {nominal}
        </p>
      </td>
      <td>
        <div>
          <span className={statusClass}> </span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}
          </p>
        </div>
      </td>
      <td>
        <Link href="/member/transactions/detail" className="btn btn-status rounded-pill text-sm">
          Details
        </Link>
      </td>
    </tr>
  )
}
