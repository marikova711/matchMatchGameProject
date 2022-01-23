export function addRecord(record) {
    return {
        type: 'ADD_RECORD',
        payload: record
    }
}

export function sortRecord() {
    return {
        type: 'SORT_RECORD'
    }
}