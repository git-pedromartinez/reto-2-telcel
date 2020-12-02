const uniqid = require('uniqid')
class Id {
    Id() {
        this.arg;
    }
    Id(arg) {
        this.arg = arg;
    }
    nuevo() {
        return uniqid()
    }
    nuevo(x, y) {
        return uniqid(x, y)
    }
}
module.exports = Id;