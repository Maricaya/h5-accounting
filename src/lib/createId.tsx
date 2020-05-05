let id = 0

const createId = ():number => {
  id += 1
  return id
}

export {createId}