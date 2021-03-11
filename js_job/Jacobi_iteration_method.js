function jacobi(a,b,x) {

    error_ = [9999,9999,9999]

    x_old = [...x];

    while(error_[0] > 0.000001 || error_[1] > 0.000001 || error_[2] > 0.000001){
        
        x_old = [...x];

        for(i = 0;i < a.length;i++){
            x[i] = b[i];
            for(j = 0;j < a[0].length;j++){
                if(i != j){
                    x[i] = x[i]- (a[i][j]*x_old[j])
                }
            }
            x[i] = x[i]/a[i][i];
            error_[i] = (x[i]-x_old[i])/x[i]
            console.log(error_[i])
        }

        for(i = 0;i < error_.length;i++){
            if(error_[i] > 10){
                console.log("ไม่มีคำตอบ");
                return;
            }
        }
        for(i = 0;i < x.length;i++){
            console.log("x"+i.toString()+"="+x[i].toString());
            console.log("error"+i.toString()+"="+error_[i].toString());
        }

    }
}

a = [[-2,3,1],
    [3,4,-5],
    [1,-2,1]]
b = [9,0,-4]

x= [1,1,1]

jacobi(a,b,x);

