import item from './item.js'
let items= []
let hideCheckedItems = false

function findById (id){
    let found = items.find(function(item){
        return item.id === id
    })
    return found
}

function addItem(name){
    try{
        item.validateName(name)
        this.items.push(item.create(name))
    }
    catch{
        console.log( `Cannot add item: ${error.message}`)
    }
}

function findAndToggleChecked (id){
    this.findById(id).checked = !this.findById(id).checked
}

function findAndUpdateName (id, newName){
    try{
        item.validateName(newName)
        this.findById(id).name = newName
    }
    catch{
        console.log(`Cannot update name: ${error.message}`)
    }
}

function findAndDelete(id){
    let index = this.items.findIndex(item => item.id === id)
    this.items.splice(index, 1)
}

function toggleCheckedFilter(){
    this.hideCheckedItems = !this.hideCheckedItems
}

export default {
    items,
    hideCheckedItems,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter,
}
  