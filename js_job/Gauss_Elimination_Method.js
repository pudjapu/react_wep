function Gauss(A){    

    for(var k = 0; k < 2; k++){

        for (var j = 0+k; j < A.length-1; j++){
    
            // copy array
            var temp = [];
            for (var i = 0; i < A.length; i++)
                temp[i] = A[i].slice();

            tem = temp[0+k][0+k];
            for(var i = 0+k; i < A[0].length;i++){
               temp[0+k][i] = temp[0+k][i]/tem*temp[j+1][0+k];
               A[j+1][i] = A[j+1][i]-temp[0+k][i];
            }
        }
    }

    x3 = (A[2][3]/A[2][2]).toFixed(5);
    x2 = ((A[1][3]-(A[1][2]*x3))/A[1][1]).toFixed(5);
    x1 = ((A[0][3]-(A[0][1]*x2)-(A[0][2]*x3))/A[0][0]).toFixed(5);

    console.log("x1 : " + x1);
    console.log("x2 : " + x2);
    console.log("x3 : " + x3);
}

A = [
    [-2, 3, 1 ,9],
    [3, 4, -5 ,0],
    [1, -2, 1 ,-4]
  ]

Gauss(A);