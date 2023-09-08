

const Square = (props) => {
  return (
    <div onClick={()=> props.handelClick(props.idx)}>
        <h4>{props.value}</h4>
    </div>
  )
}

export default Square