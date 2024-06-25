// 3. . Գտնել տրված իրական թվերի հաջորդականության փոքրագույն անդամը և
// տեղերով փոխել վերջին տարրի հետ:

// 4. Տրված է ամբողջ թվերի հաջորդականություն: Արտածել այդ հաջորդականության
// ա) առաջին միանիշ տարրը,
// բ) 5-ին պատիկ վերջին տարրը,
// գ) վերջին երկնիշ տարրը և դրան հաջորդող կենտ տարրերի քանակը,
// դ) առաջին զույգ տարրը և դրան նախորդող տարրերի գումարը,
//  ե) 7-ից մեծ վերջին տարրը և դրան նախորդող զույգ տարրերի արտադրյալը,
// զ) մինչև առաջին բացասական տարրը եղած այն տարրերի քանակը, որոնք պատկանում են [0,20] միջակայքին,
// է) [5,24] միջակայքում գտնվող առաջին տարրը և դրան հաջորդող տարրերի միջին թվաբանականը,
//  ը) առաջին 0-ին հաջորդող 1-ով սկսվող թվերի գումարը (եթե հաջորդականությունը 0 չի պարունակում՝ արտածել -1):



// գ) վերջին երկնիշ տարրը և դրան հաջորդող կենտ տարրերի քանակը,

// let arr = [2,3,44,3,22,76,3,5,7,9,2]
// let count = 0;

// let index = arr.length - 1;
// for(let i = arr.length - 1; i >= 0; i--){
//     if(arr[i] >= 10 && arr[i] <= 99){
//         console.log(arr[i])
//         index = i;
//         break;
//     }
// }

// for(let i = index + 1; i < arr.length; i++){
//     if(arr[i] % 2 === 1){
//         count++
//     }
// }
// console.log(count)



// է) [5,24] միջակայքում գտնվող առաջին տարրը և դրան հաջորդող տարրերի միջին թվաբանականը,


// let arr = [2,-5,12,4,5,6,7,8];

// let index = 0;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] >= 5 && arr[i] <= 24){
//         console.log(arr[i]);
//         index = i;
//         break;
//     }
// }
// let sum = 0;
// for(let i = index + 1; i < arr.length; i++){
//     sum = sum + arr[i] // sum+=arr[i]
// }

// let mijin = sum/(arr.length - index - 1)

// console.log(mijin)



//  ը) առաջին 0-ին հաջորդող 1-ով սկսվող թվերի գումարը (եթե հաջորդականությունը 0 չի պարունակում՝ արտածել -1):


function f(num){
    let arr = []
    while(num > 0){
        let c = num % 10
        arr.push(c)
        num = (num - c)/10
    }

    if(arr[arr.length - 1] === 1){
        return true
    }
    return false
}

let arr = [2,3,4,12,100,23]


function f1(arr){
    if(arr[arr.length - 1] == 0){
        return -2
    }

    if(arr.includes(0) === false){
        return - 1
    }else {
        let index = 0
        for(let i = 0; i < arr.length; i++){
        
            if(arr[i] == 0){
                index = i;
                break;
            }
        }
        let sum = 0
        for(let i = index + 1; i < arr.length; i++){
            if(f(arr[i]) === true){
                sum = sum + arr[i] //sum+=arr[i]
            }
        }
        return sum
        }

    }
 console.log(f1(arr))