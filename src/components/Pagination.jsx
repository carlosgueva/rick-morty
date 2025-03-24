import "./Pagination.css"

function Pagination({page, totalPages, prev, next}) {
  return (
    <div className="pagination">
      <button onClick={prev} disabled={page === 1}>Prev</button>
      <span>{page} of {totalPages}</span>
      <button onClick={next} disabled={page === totalPages}>Next</button>
    </div>
  )
}

export default Pagination