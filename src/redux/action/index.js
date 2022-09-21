// Tambahkan item ke Cart
export const addCart = (product) => {
  return {
    type : "ADDITEM",
    payload : product
  }
}

// Menghapus item dari Cart
export const delCart = (product) => {
  return {
    type : "DELITEM",
    payload : product
  }
}

