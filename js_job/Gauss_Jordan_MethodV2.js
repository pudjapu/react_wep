function Gauss(A){    

    for(var k = 0; k < A.length-1; k++){

        for (var j = k; j < A.length-1; j++){
    
            // copy array
            var temp = [];
            for (var i = 0; i < A.length; i++)
                temp[i] = A[i].slice();

            tem = temp[k][k];
            for(var i = k; i < A[0].length;i++){
               temp[k][i] = temp[k][i]/tem*temp[j+1][k];
               A[j+1][i] = A[j+1][i]-temp[k][i];
            }
        }

        console.log(A);

    }
    for(var k = 0; k < A.length-1; k++){

        for (var j = 0+k; j < A.length-1; j++){
        
            // copy array
            var temp = [];
            for (var i = 0; i < A.length; i++)
                temp[i] = A[i].slice();

            tem = temp[A.length-1-k][A.length-1-k];
            for(var i = 3;i >= 0;i--){
                temp[A.length-1-k][i] = temp[A.length-1-k][i]/tem*temp[A.length-1-(1+j)][A.length-1-k];
                A[A.length-1-(1+j)][i] = A[A.length-1-(1+j)][i]-temp[A.length-1-k][i];
            }

            console.log(A);
            console.log("");

        }
    }

    console.log("x1 : " + (A[0][3]/A[0][0]).toFixed(5));
    console.log("x2 : " + (A[1][3]/A[1][1]).toFixed(5));
    console.log("x3 : " + (A[2][3]/A[2][2]).toFixed(5));
}




A = [
    [-2, 3, 1 ,9],
    [3, 4, -5 ,0],
    [1, -2, 1 ,-4]
  ]

Gauss(A);