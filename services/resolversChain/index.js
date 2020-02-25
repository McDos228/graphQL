module.exports.combineResolvers = (...funcs) => (...args) =>
    funcs.reduce(
        (prevPromise, resolver) =>
            prevPromise.then(prev => 
                (prev === undefined ? resolver(...args) : prev)
            ),
        Promise.resolve()
    )