const messeger: string = `phi quang vinh`; // messeger : tên biến, string : kiểu dữ liệu
console.log(messeger);
const hoTen: string = ` "vinhphis" `;
console.log(hoTen.toUpperCase());

let cars = ['honda', 'toyota', 'huyndai', 29];
cars.push('wave');
console.log(cars);

// cách khai báo kiểu object
let myObject: {
    // khai báo kiểu dữ liệu cho từng thuộc tính của object
    name: string,
    age: number
} = {
    name: "vinh",
    age: 20
}

// myObject.address = "Hà nội"; // error vì trong myObject không có thuộc tính address(tránh ghi đè thêm vào trong object)

// cách khởi tạo array
let myArr: (string | number)[] = ['vinh', 28]; // kiểu dữ liệu trong array có 2 kiểu number và string
myArr.push('Hn');

console.log(myArr);

// cách để khởi tạo tuple: định nghĩa kiểu dữ liệu của từng phần tử, giới hạn số lượng giá trị truyền vào
// tham số optional : có thể bỏ trống các tham số truyền vào(chỉ được đặt ở cuối mảng)
let myArr2: [string, number?];

myArr2 = ['vinh'];

// cách khởi tạo enum

enum API_STATUS {
    Pending = "Pending",
    Fulfilled = "Fulfilled",
    Rejected = "Rejected"
}

let a1 = API_STATUS.Pending; // sẽ trả về index ở trong mảng khi bạn không gán giá trị cho nó

console.log("Result a1= ", a1);

// cách khởi tạo và sử dụng Any
// any có thể tự do gán kiểu dữ liệu cho biến
let typeAny: any = "vinh";

typeAny = 20;

// cách khởi tạo và sử dụng void
// void không trả về giá trị nào 

let tyoeVoid = (msg: string): void => {
    console.log(`chúc ${msg} may mắn lần sau!!!`);

}
tyoeVoid('vinh');

// cách khởi tạo và sử dụng union
// union : khi báo lỗi khi compile
function checkType(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
        return console.log('2 tham số a, b là số');
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return console.log('2 tham số a, b là chuỗi');
    }
    throw new Error("tham số a, b không thuộc kiểu string hoặc number");

}

checkType('vinh', '20');

// cách khởi tạo và cách sử dụng aliases
// sử dụng khi muốn có nhiều kiểu dữ liệu ở trong 1 tham số hoặc 1 biến
type typeA = number | string;
type typeB = number | string;
function checkType2(a: typeA, b: typeB) {
    if (typeof a === 'number' && typeof b === 'number') {
        return console.log('2 tham số a, b là số');
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return console.log('2 tham số a, b là chuỗi');
    }
    throw new Error("tham số a, b không thuộc kiểu string hoặc number");

}

checkType2('vinh', '20');

let mixedType: typeA = "vinh";

// cách khai báo và sử dụng function và type function 

function sumAB(a: number, b: number): number {
    return a + b;
}

console.log(sumAB(1, 2));

// cách khai báo và sử dụng optional param
function sum(a: number, b?: number): number {
    if (b) return a + b;
    return a;
}

console.log("Tổng của hàm trên = ", sum(4), " và ", sum(5, 5));

// cách khai báo và sử dụng rest(sử dụng ở cuối )
function displayName(...name: string[]) {
    return name.forEach((N) => console.log("Tên của bạn là là", N));
}
displayName('vinh', 'quang', 'phi');

function displaySum(x: number, ...orther: number[]) {
    return orther.map((y) => x * y);
}
let myNumber = displaySum(1, 2, 3, 4, 5);
console.log(myNumber);


// cách sử dụng class & access modifiers

class Person {
    protected fullName: string;
    protected phone: number;
    protected address: string;

    // hàm khởi tạo
    constructor(fullName: string, phone: number, address: string) {
        this.fullName = fullName;
        this.phone = phone;
        this.address = address;
    }
    getName(name: string): string {
        return `Tên của bạn là ${name}`;
    }
}

let abc = new Person("quang vinh", 1786479, "Hn");
// console.log(abc.fullName);

class childPerson extends Person {
    email: string

    constructor(fullName: string, phone: number, address: string, email: string) {
        super(fullName, phone, address);
        this.email = email;
    }
    getAddress(): string {
        return `Địa chỉ ủa bạn là ${this.address}`;
    }
}

let child = new childPerson("vinh", 999, "Hn", "vinh@gmail.com");
console.log(child.getAddress());
// readonly : sử dụng như các modifiers ở trên
// tác dụng là không thể ghi đè được giá trị

// khởi tạo và sử dụng setter và getter trong class

class Person2 {
    private _fullNames: string;
    private _phone: number;
    private _address: string;

    // hàm khởi tạo
    constructor(fullName: string, phone: number, address: string) {
        this._fullNames = fullName;
        this._phone = phone;
        this._address = address;
    }
    // get fullName
    get fullName() {
        return this._fullNames;
    }

    set fullNames(fullName: string) {
        this._fullNames = fullName;
    }

    get phone() {
        return this._phone;
    }

    set phone(phone: number) {
        this._phone = phone;
    }
}

let Persons = new Person2("vinh", 9999, "Hà Nội");

Persons.phone = 11111111111; // set
console.log("số điện thoại của bạn: ", Persons.phone); // get

// kế thừa và ghi đè trong class
class Person3 {
    protected fullName: string;
    protected phone: number;
    protected address: string;

    // hàm khởi tạo
    constructor(fullName: string, phone: number, address: string) {
        this.fullName = fullName;
        this.phone = phone;
        this.address = address;
    }
    getName(name: string): string {
        return `Tên của bạn là ${name}`;
    }
}

class childPerson1 extends Person3 {
    email: string

    constructor(fullName: string, phone: number, address: string, email: string) {
        super(fullName, phone, address);
        this.email = email;
    }
    getName(name: string): string {
        return `${super.getName(name)} Chào bạn ${name}`;
        // cách lấy ra hàm của class đó kế thừa
    }
    getAddress(): string {
        return `Địa chỉ ủa bạn là ${this.address}`;
    }
}
const child1 = new childPerson1('vinh', 888, 'Hn', 'vinh@gmail.com');
console.log(child1.getName('hehe'));

// static trong class
class demoStatic {
    static _x: number;

    static sum(x: number) {
        return `Bình phương của ${x} là ${x * x} `;
    }
}
// static không cần khởi tạo class
console.log(demoStatic.sum(10));

// static khi khởi tạo class thì sẽ không thể truy cập được
let demo = new demoStatic();
// demo.sum(10); // error


// interface : định nghĩa cấu trúc dữ liệu
interface IContact {
    fullName: string;
    phone: number;
}

const contacts: IContact[] = [];
const newContacts1: IContact = {
    fullName: "quang vinh",
    phone: 8888
}

contacts.push(newContacts1);
console.log(contacts);

// abstract : định nghĩa khung
abstract class abstractDemo {
    fullName: string;
    phone: number;
    abstract getFullName(): string;
    getPhone(): number {
        return this.phone;
    }
}