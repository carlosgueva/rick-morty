import { useEffect, useState } from "react"

export const usePagination = (items, maxItemVisible = 5) => {
  const [page, setPage] = useState(1)

  useEffect(() => {
    setPage(1)
  }, [items])
  
  const prev = () => {
    setPage(page - 1)
  }
  
  const next = () => {
    setPage(page + 1)
  }
  
  const itemsPagination = items.slice((page - 1) * maxItemVisible, page * maxItemVisible)

  const totalPages = Math.ceil(items.length / maxItemVisible)

  return {
    prev,
    next,
    itemsPagination,
    totalPages,
    maxItemVisible,
    page
  }
}
