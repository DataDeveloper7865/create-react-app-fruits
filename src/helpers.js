

function choice(items) {
    return items[Math.floor(Math.random() * items.length)]
}

function remove(items, item) {
    let indexToBeRemoved = items.indexOf(item)
    if (indexToBeRemoved === -1) {
        return undefined
    } else {
        return items.splice(indexToBeRemoved, 1)
    }
}

export {choice, remove};