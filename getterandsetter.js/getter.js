class user{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }
    get password(){
        return `${this._password}abhishek`;
        
    }
    set password(value){
        this._password=value;


    }
}
const abhishek=new user("abhishek@1334","abc")
console.log(abhishek.password);