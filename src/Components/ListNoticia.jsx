import React from 'react'
import Blog from "./Blog"

function ListNoticia({noticias}) {
  return (
    <div> <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {noticias.map(noticia => (
      <Blog key={noticia.id} noticia={noticia} />
    ))}
  </div></div>
  )
}

export default ListNoticia