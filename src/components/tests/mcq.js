import React, { Component } from 'react';
import Comma from '../comma';
import Img1 from '../../assets/international1.jpg';
import './mcq.css';

class Mcq extends Component {
    constructor(){
        super();
        this.state={
            ans : ["A","C","B"],
            sub : ["A",""],
            cnt : 0,
            res : "My results will appear here",
            ed : "none",
            d : false
        }
    }

    upsub = (e) => {
        if(e.target.value === this.state.ans[e.target.name]){
            this.setState({
                cnt : this.state.cnt + 1
            })
        }
            
    }

    submit = () => {
        console.log(this.state.cnt);
        this.setState({
            res :  "Yor Score is "+this.state.cnt,
            ed : "block",
            d: true
        })
        
    }
    render() {
        return (
            <div>
                <Comma url={Img1} content="Quiz" />
                <div className="mcq">
                <ul class="quiz">
                    <li>
                        <h4>How many letters are there in "JS"?</h4>
                        <ul class="choices">
                        <li><label><input disabled= {this.state.d} onClick={this.upsub} type="radio" name="0" value="A"/><span>2</span><div style={{display:this.state.ed ,paddingLeft: "20px",fontSize:"20px", color:"green"}}>Correct Answer</div></label></li>
                        <li><label><input disabled= {this.state.d} onClick={this.upsub} type="radio" name="0" value="B"/><span>1</span></label></li>
                        <li><label><input disabled= {this.state.d} onClick={this.upsub} type="radio" name="0" value="C"/><span>3</span></label></li>
                        <li><label><input disabled= {this.state.d} onClick={this.upsub} type="radio" name="0" value="D"/><span>4</span></label></li>
                        </ul>
                    </li>
                    <li>
                        <h4>How many letters are there in "BMX"?</h4>
                        <ul class="choices">
                        <li><label><input disabled= {this.state.d} onClick={this.upsub} type="radio" name="1" value="A"/><span>2</span></label></li>
                        <li><label><input disabled= {this.state.d} onClick={this.upsub} type="radio" name="1" value="B"/><span>1</span></label></li>
                        <li><label><input disabled= {this.state.d} onClick={this.upsub} type="radio" name="1" value="C"/><span>3</span><div style={{display:this.state.ed ,paddingLeft: "20px",fontSize:"20px", color:"green"}}>Correct Answer</div></label></li>
                        <li><label><input disabled= {this.state.d} onClick={this.upsub} type="radio" name="1" value="D"/><span>4</span></label></li>
                        </ul>
                    </li>
                    <li>
                        <h4>How many letters are there in "A"?</h4>
                        <ul class="choices">
                        <li><label><input disabled= {this.state.d} onClick={this.upsub} type="radio" name="2" value="A"/><span>2</span></label></li>
                        <li><label><input disabled= {this.state.d} onClick={this.upsub} type="radio" name="2" value="B"/><span>1</span> <div style={{display:this.state.ed ,paddingLeft: "20px",fontSize:"20px", color:"green"}}>Correct Answer</div></label></li>
                        <li><label><input disabled= {this.state.d} onClick={this.upsub} type="radio" name="2" value="C"/><span>3</span></label></li>
                        <li><label><input disabled= {this.state.d} onClick={this.upsub} type="radio" name="2" value="D"/><span>4</span></label></li>
                        </ul>
                    </li>
                    </ul>

                    <button class="view-results" onClick={this.submit}>View Results</button>
                    <span id="myresults" class="my-results">{this.state.res}</span>
                </div>
            </div>
        );
    }
}

export default Mcq;