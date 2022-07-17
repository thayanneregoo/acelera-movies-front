
export const ToDoComponent = ({ name, description, data }) => {
  return (
    <>
      <span>{name}</span>
      <p>{description}</p>
      <p>{data}</p>
    </>
  )
}
