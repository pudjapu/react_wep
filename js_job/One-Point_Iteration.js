function OP(x,error_1){
    x1 = (-0.6*x)+0.8;
    err = Math.abs((x1-x)/x1);

    if(err == error_1){
        console.log("Is Diverge");
    }
    else{
        if(err < 0.000001){
            console.log(x1);
        }
        else{
            OP(x1,err);
        }
    }
}

x = 0;
x1 = (-0.6*x)+0.8;

OP(x1,9999999);