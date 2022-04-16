export default function Loader ({ show }: {
  show: Boolean
}): JSX.Element {
  return show ? <div className='loader' /> : null
}
