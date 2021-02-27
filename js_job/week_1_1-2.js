XL = 1.5,XR = 2.0,errer_sum = 1,XM = 0;

XMold = (XL+XR)/2;

if(((Math.pow(XMold,4)-13)*(Math.pow(XR,4)-13)) < 0){
    XL = XM;
}
else{
    XR = XM;
}

while(errer_sum > 0.0000001){

    XM = (XL+XR)/2;

    if(((Math.pow(XM,4)-13)*(Math.pow(XR,4)-13)) < 0){
        XL = XM;
    }
    else{
        XR = XM;
    }

    errer_sum = Math.abs((XM-XMold)/XM);
    XMold = XM;
}
console.log(XM);
