import { Input } from 'antd'

let AddMatrix = (e) =>{
    this.setState({rows: this.state.rows+1,columns: this.state.columns+1})
    let Matrix = this.state.Matrix;
    Matrix.push([]);
    this.setState({Matrix: Matrix})
}

let DelMatrix = (e) =>{
    if(this.state.rows > 2){
        this.setState({rows: this.state.rows-1,columns: this.state.columns-1})
        let Matrix = this.state.Matrix;
        Matrix.pop();
        for(let i = 0;i < this.state.rows-1;i++){
            Matrix[i].pop()
        }
        this.setState({Matrix: Matrix})
    }
}

let MakeMatrix = (e) => {
    let rows = this.state.rows;
    rows = parseInt(rows);
    let columns = this.state.columns;
    columns = parseInt(columns);

    let wow = [];
    let i,j
    for(i= 0;i < rows;i++){
        for(j = 0; j < columns;j++){
            wow.push(<span><Input name={i.toString()+','+j.toString()} onChange={this.getvalue} className="Input_2" value={this.state.Matrix[i][j]}/></span>)
        }
        wow.push(<div></div>)
    }
    console.log(wow)
    return(wow);
}

let Getvalue = (e) => {
    let arr = [];
    let Matrix = this.state.Matrix;
    arr = e.target.name.split(',');
    Matrix[parseInt(arr[0])][parseInt(arr[1])] = e.target.value;
    this.setState({Matrix: Matrix})
}

export {AddMatrix,DelMatrix,MakeMatrix,Getvalue}