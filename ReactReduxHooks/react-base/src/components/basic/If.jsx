const condictionJs = (props) => {
  if(props.test) {
    return props.children
  } else {
    return false
  }
}

export default condictionJs;