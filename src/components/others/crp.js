import React, { Component } from 'react';
import Comma from "../comma";
import Img1 from '../../assets/international1.jpg';


class Crp extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <Comma url={Img1} content="Cancellation/Refund Policy" />
                <div style={{ padding:"6%"}}>
                    <p style={{borderStyle: "ridge", padding:"3%",fontWeight:"20px", textAlign: "left" }}>
                        <b>
                            <ul>
                                <li>Students who want to withdraw from the program must inform StudyEurope.in in writing.</li>
                                <li>The application fee is refundable only if there is any cancellation in the program or the application is rejected
                                    by the university.</li>
                                <li>No reimbursement will be given to any student if they withdraw after the deadline.</li>
                                <li>We will not provide reimbursement of money you have paid to any other institution.</li>
                                <li>We would suggest you to discuss return policy with our professionals before paying any kind of charges.</li>
                            </ul>
                        
                        <span style={{fontSize:"20px"}}>Policies to Keep In Mind As Stated By EGS</span>
                        <br/>
                        <br/>
                        <ol>
                            <li>Ministry fee and consultation fee are not refundable. If the visa gets rejected then a student can request for
                        this amount to be refunded too.</li>
                            <li>Refund will be initiated in 15-30 business days.</li>
                            <li>Refundable amount will be paid back through bank deposit, we will transfer the money through NEFT
                        directly to the student’s bank account.</li>
                            <li>If a student claims for refund after he/she begin with course, then the request will not be entertained.
                        </li>
                            <li>Our company will not be responsible if the delay is caused by other party like courier services. So, in this
                        case students are not allowed to claim for refund.
                        </li>
                            <li> In case of rejection of Visa no refund would be initiated because of the following reasons:
                        </li>
                        </ol>
                        <br/>
                        
                        <ul>
                            <li>If a student doesn’t fulfil the needs of the Consulate.</li>
                            <li>If a student fails to clear the interview for visa.</li>
                            <li>Submission of fraudulent documents.</li>
                            <li>Submission of documents after the deadline.</li>
                        </ul>
                          
                        </b>
                    </p>
                </div>
            </div>
        );
    }
}

export default Crp; 