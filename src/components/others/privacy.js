import React, { Component } from 'react';
import Comma from "../comma";
import Img1 from '../../assets/international1.jpg';


class Privacy extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <Comma url={Img1} content="Privacy Policy" />
                <div style={{ padding:"6%"}}>
                    <p style={{borderStyle: "ridge", padding:"3%",fontWeight:"20px", textAlign: "left" }}>
                        <b>
                            Evren Global Solutions (hereinafter “EGS”) recognizes the importance of privacy of its users and also of maintaining
                            confidentiality of the information provided by its users as a responsible data controller and data processer.
                            <br/>
                            <br/>
                            This Privacy Policy provides for the practices for handling and securing user's Personal Information (defined
                            hereunder) by EGS and its subsidiaries and affiliates.
                            <br/>
                            <br/>
                            For the purpose of this Privacy Policy, wherever the context so requires "you" or "your" shall mean User and the term
                            "we", "us", "our" shall mean EGS. For the purpose of this Privacy Policy, Website means the website(s), mobile site(s)
                            and mobile app(s).
                            <br/>
                            <br/>
                            By using or accessing the Website or other Sales Channels, the User hereby agrees with the terms of this Privacy
                            Policy and the contents herein. If you disagree with this Privacy Policy please do not use or access our Website or
                            other Sales Channels.
                            <br/>
                            <br/>
                            This Privacy Policy does not apply to any website(s), mobile sites and mobile apps of third parties, even if their
                            websites/products are linked to our Website. User should take note that information and privacy practices of EGS’s
                            business partners, advertisers, sponsors or other sites to which EGS provides hyperlink(s), may be materially different
                            from this Privacy Policy. Accordingly, it is recommended that you review the privacy statements and policies of any
                            such third parties with whom they interact.
                            <br/>
                            <br/>
                            This Privacy Policy is an integral part of your User Agreement with EGS and all capitalized terms used, but not
                            otherwise defined herein, shall have the respective meanings as ascribed to them in the User Agreement.
                            <br/>
                            <br/>
                            Please note that the data shared with EGS shall be primarily processed in India and such other jurisdictions where a
                            third party engaged by EGS may process the data on EGS’s behalf. By agreeing to this policy, you are providing EGS
                            with your explicit consent to process your personal information for the purpose(s) defined in this policy. The data
                            protection regulations in India or such other jurisdictions mentioned above may differ from those of your country of
                            residence.
                            <br/>
                            <br/>
                            The information as detailed below is collected for us to be able to provide the services chosen by you and also to fulfill
                            our legal obligations as well as our obligations towards third parties as per our User Agreement.
                            <br/>
                            <br/>
                            <span style={{    fontSize: "20px"}}>"Personal Information"</span> of User shall include the information shared by the User and collected by us for the
                            following purposes:
                            <br/>
                            <br/>
                            <span style={{    fontSize: "20px"}}>Registration on the Website:</span> Information which you provide while subscribing to or registering on the Website,
                            including but not limited to information about your personal identity such as name, gender, marital status, religion,
                            age etc., your contact details such as your email address, postal addresses, frequent flyer number, telephone (mobile
                            or otherwise) and/or fax numbers. The information may also include information such as your banking details
                            (including credit/debit card) and any other information relating to your income and/or lifestyle; billing information
                            payment history etc. (as shared by you).
                        </b>
                    </p>
                </div>
            </div>
        );
    }
}

export default Privacy; 