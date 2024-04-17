var user = {
    firstName : 'Shivaraj',
    lastName : 'Shetty',
    role: 'admin',
    loginCount : 32,
    facebookLoggedIn : true,
    courseList : [],

    buyCourse: function(courseName){
        this.courseList.push(courseName);
    },

    getCourseCount : function(){
        return `${this.firstName} enrolled in total of ${this.courseList.length} courses`;
    }
};

console.log(user.firstName);
console.log(user.loginCount);
user.loginCount = 44;
console.log(user.loginCount);

console.log(user);
console.table(user);

console.log(user.getCourseCount());
user.buyCourse('Javascript');
console.log(user.getCourseCount());



