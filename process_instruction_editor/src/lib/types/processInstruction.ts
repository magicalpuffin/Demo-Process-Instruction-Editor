export type instruction = {
    id: string,
    name: string,
    steps: step[]
}

export type step = {
    id: string,
    name: string,
    instructions: string,
    dataCollectionSet: dataCollectionSet
}

export type dataCollectionSet = {
    id: string,
    name: string,
    dataCollections: dataCollection[]
}

export type dataCollection = {
    id: string,
    name: string,
    type: string,
}