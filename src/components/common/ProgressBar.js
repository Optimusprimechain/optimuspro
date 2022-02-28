import PropTypes from 'prop-types'
import style from '@/styles/Course.module.css'


export default function ProgressBar({ value, max }) {
  return (
    <div className={style.progress}>
      <progress value={value} max={max} />
      <small className={style.span}>{(value / max) * 100}% Complete</small>
    </div>
  )
}


ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
}

ProgressBar.defaultProps = {
  max: 100,
}
