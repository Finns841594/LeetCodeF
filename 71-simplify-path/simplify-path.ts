function simplifyPath(path: string): string {
    const regex = /\/[a-zA-Z._0-9]+/g
    const paths = path.match(regex)
    if (!paths) return '/'
    console.log(paths)
    let stack = []
    for (let i = 0; i < paths.length; i++) {
        if (paths[i] === '/..') {
            stack.pop()
        } else if (paths[i] != '/.') {
            stack.push(paths[i])
        }
    }
    return stack.length > 0 ? stack.join('') : '/'
};