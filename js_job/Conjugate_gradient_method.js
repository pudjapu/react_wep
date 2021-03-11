var math = require('mathjs');

function Conjugate(a,b,x){
    r = math.multiply(-1,b);

    d = math.multiply(-1,r)
    ramda = math.multiply(math.multiply(-1,math.transpose(d)),r)/math.multiply(math.transpose(d),math.multiply(a,d));

    console.log("ramda : " + ramda.toString());

    for(i = 0;i < x.length;i++){
        x[i] = x[i] + (d[i]*ramda);
    }

    console.log(x)

    error_ = 99999999999999
    
    while(error_ > 0.000001){
        error_old = error_;
        temp = math.multiply(a,x);
        
        for(i = 0;i < b.length;i++){
            r[i] = temp[i] - b[i];
        }

        alpha =  math.multiply(math.multiply(math.transpose(r),a),d)/math.multiply(math.multiply(math.transpose(d),a),d)

        for(i = 0;i < b.length;i++){
            d[i] = (r[i]*-1)+(alpha*d[i]);
        }
        ramda = math.multiply(math.multiply(-1,math.transpose(d)),r)/math.multiply(math.transpose(d),math.multiply(a,d));


        for(i = 0;i < x.length;i++){
            x[i] = x[i] + (d[i]*ramda);
        }

        console.log(x)

        error_ = math.sqrt(math.multiply(math.transpose(r),r))
        if(error_ > error_old){
            console.log("ไม่มีคำตอบ");
            return;
        }

    }
}

a = [[14,4,-16],
    [4,29,-19],
    [-16,-19,27]]
b = [-22,35,5]

x= [0,0,0]

Conjugate(a,b,x)