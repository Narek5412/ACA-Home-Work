function customArrayFrom(obj) {
    obj[Symbol.iterator]=function() {
        return {
            from: this.from,
            to: this.to,
            next() {
                if(this.from <= this.to) {
                    return {
                        value: this.from++,
                        done: false
                    }
                }
                return{
                    done: true
                }

            }
        }
    }
    let arr = []
    if (obj.hasOwnProperty(Symbol.iterator)) {
        const iterator = obj[Symbol.iterator]();
        let result = iterator.next();
        while (!result.done) {
            arr.push(result.value);
            result = iterator.next();
        }
        }

     else{
            for(let i = 0; i < obj.length;i++){
            arr.push(obj[i]);
        }
    }return arr
}console.log(customArrayFrom(obj = {
    0: 1,
    1: 2,
    from: 1,
    to: 10,
    length:2,
}))
