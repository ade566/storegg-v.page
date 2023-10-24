import cx from 'classnames';
import Image from 'next/image';

interface TrRowProps {
  image: string;
  title: string;
  category: string;
  gold: string;
  price: string;
  status: 'Pending' | 'Failed' | 'Success';
}

export default function TrRow(props: TrRowProps) {
  const {
    image, title, category, gold, price, status,
  } = props;

  const classExtend = cx({
    'float-start icon-status': true,
    pending: status === 'Pending',
    success: status === 'Success',
    failed: status === 'Failed',
  });

  return (
    <tr className="align-middle">
      <th scope="row">
        <Image className="float-start me-3 mb-lg-0 mb-3" src={`/img/${image}`} width={80} height={60} alt="" />
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
        <p className="fw-medium text-start color-palette-1 m-0">{price}</p>
      </td>
      <td>
        <div>
          <span className={classExtend}> </span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}
          </p>
        </div>
      </td>
    </tr>
  )
}
