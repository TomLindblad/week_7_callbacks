const list = [
    "My name is Tom.", 
    "My age is something like 36 I think.", 
    "I was raised in Klippan, now I live in Helsingborg.", 
    "My hobbies includes reading, playing computergames/boardgames/music and like... building things I guess."
];

/*
print(list[0], () => {
    print(list[1], function () {
        print(list[2], function () {
            print(list[3], function () {console.log("done")});
        });
    });
});

function print(str, cb){
    setTimeout(() => {
        console.log(str);
        cb();
    }, 1000);
}
*/

first(() => {
    second(function () {
        third(function () {
            fourth();
        });
    });
});

function first(cb){
    setTimeout(() => {
        console.log(list[0]);
        cb();
    }, 1000);
}

function second(cb){
    setTimeout(() => {
        console.log(list[1]);
        cb()
    }, 1000);
}

function third(cb){
    setTimeout(() => {
        console.log(list[2]);
        cb();
    }, 1000);
}

function fourth(){
    setTimeout(() => {
        console.log(list[3]);
    }, 1000);
}