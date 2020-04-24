function sum(a) {
    return function(b) {
        return function(c) {
            return function(d) {
                return function(e) {
                    const total = a + b + c + d + e;

                    return function(callback) {
                        callback(total)
                    }
                }
            }
        }
    }
}

sum(1)(2)(3)(4)(5)(result => console.log('result', result))