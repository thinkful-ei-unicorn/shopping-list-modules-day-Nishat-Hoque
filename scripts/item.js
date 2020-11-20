function validateName (name){
    if (name.length === 0)
        throw new Error ("Name must not be blank")
}

//factory function
function create (name){
    return { id:cuid(), name: name, checked:false }
}

export default {
    validateName,
    create,
  }