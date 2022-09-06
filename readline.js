const readLine = require('readline');

//inisialisasi objek readline
const rl=readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

//menampilkan tiga buah pertanyaan (nama,nomor telepon, email)
//lalu menampilkan balasan nya setelah ketiga pertanyaan tersebut selesai dijawab
rl.question('What is your name? ',(name)=>{
    rl.question('What is your phone number? ',(phoneNum)=>{
        rl.question('What is your email? ',email=>{
            console.log(`Thank you ${name}, your phone number is: ${phoneNum}, your email is: ${email}`)    
            rl.close();
        });  
    })
})