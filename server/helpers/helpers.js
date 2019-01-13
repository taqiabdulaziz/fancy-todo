var bcrypt = require(`bcryptjs`)

module.exports = {
    hashPassword: function (password) {
        let salt = bcrypt.genSaltSync(10)
        let hash = bcrypt.hashSync(password, salt)
        return hash
    },
    compare: (input, password) => {
        return bcrypt.compareSync(input, password)
    }
};
