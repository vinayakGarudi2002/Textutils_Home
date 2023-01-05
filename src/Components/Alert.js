import React from 'react'

const Alert = (props) => {
  return (
  props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show role="alert" position-absolute alertStyle`}>
  <strong>{props.alert.type.charAt(0).toUpperCase()+props.alert.type.slice(1)}</strong> {props.alert.msg}
  {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
</div>
  )
}

export default Alert