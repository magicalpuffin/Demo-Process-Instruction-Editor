export type instruction = {
    id: string,
    name: string,
    steps: step[]
}

export type step = {
    id: string,
    name: string,
    instructions: string,
    dataCollection: dataCollection[]
}

export type dataCollection = {
    id: string,
    name: string,
    type: string,
}