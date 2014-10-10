function User(name){
    this.name = name;
    this.interests = [];
}

User.prototype.hasInterests = function(interests){
    this.interests = interests;
};

module.exports = User;