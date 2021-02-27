
function FP(XL,XR,Xold){
    Xnew = ((XL*((XR*43)-1))-(XR*((XL*43)-1)))/(((XR*43)-1)-((XL*43)-1));
    if((((Xnew*43)-1)*((XR*43)-1)) > 0){
        XR = Xnew;
    }
    else{
        XL = Xnew;
    }

    err = Math.abs((Xnew-Xold)/Xnew);

    if(err > 0.000001){
        FP(XL,XR,Xnew);
    }
    else{
        return Xnew;
    }
}


XL = 0.02,XR = 0.03;

X = ((XL*((XR*43)-1))-(XR*((XL*43)-1)))/(((XR*43)-1)-((XL*43)-1));

if((X*43)-1>0){
    XR = X;
}
else{
    XL = X;
}

console.log(FP(XL,XR,X));
