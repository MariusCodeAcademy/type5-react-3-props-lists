function Button({ type, color = 'inherit', name }) {
  let typeClass = type === 'sm' ? 'btn-sm' : '';

  return (
    <button style={{ color: color }} className={`btn ${typeClass}`}>
      {name}
    </button>
  );
}
export default Button;
