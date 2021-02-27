function SC(X0 , d){
    X1 = X0 + d;

    Fun = - (((Math.pow(X1,2)-7)*(X0-X1))/((Math.pow(X0,2)-7)-(Math.pow(X1,2)-7)));
    
    Xnew = X1 + Fun;

    error_ = Math.abs((Xnew-X0)/Xnew);

    if(error_ < 0.000001){
        console.log(Xnew);
    }
    else{
        SC(Xnew , d);
    }
}

SC(2,0.2);