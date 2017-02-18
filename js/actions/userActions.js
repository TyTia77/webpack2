export function fetchUser() {
    return {
        type: 'received users',
        payload: {
            name: 'will',
            age: 33
        }
    }
}

export function testUser() {
    return {
        type: 'whatever',
        payload: {
            name: 'gg',
            age: 55
        }
    }
}
