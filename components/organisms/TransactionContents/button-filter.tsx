import cx from 'classnames'

interface ButtonProps {
  title: String;
  active?: Boolean;
}

export default function BtnFilterTransactions(props: Partial<ButtonProps>) {
  const { title, active = false } = props;

  const btnClass = cx({
    'btn btn-status rounded-pill text-sm me-3': true,
    'btn-active': active,
  });

  return (
    <a data-filter="*" href="/#" className={btnClass}>{title}</a>
  )
}
