
// Trade off between query performance vs consistency

// Using References (Normalization) -> CONSISTENCY
let author = {
    name: 'Chang Xiong'
}

let course = {
    author: 'id'
}

// Using Embedded Documents (Denormalization) -> PERFORMANCE
let course = {
    author: {
        name: 'Chang'
    }
}


// Hybrid
let author = {
    name: 'Chang'
    // 50 other properties
}

let course = {
    author: {
        id: 'ref',
        name: 'Chang'
    }
}