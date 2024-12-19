function User(email,password){
    this._email=email;
    this._password=password;
    Object.defineProperty(this,"email",{
        get: function(){
            return this._email.toUpperCase();

        },
        set: function(value){
            this._email=value;
        }
    })

}
const abhishek =new User("abhishek@1122","chai")
console.log(abhishek.email);