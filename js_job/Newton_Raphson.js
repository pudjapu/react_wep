function NR(Xold){
    Xnew = Xold - ((Math.pow(Xold,2)-7)/(2*Xold));
    error_ = Math.abs((Xnew-Xold)/Xnew);
    if(error_ < 0.000001){
        console.log(Xnew);
    }
    else{
        NR(Xnew);
    }
}

NR(2);