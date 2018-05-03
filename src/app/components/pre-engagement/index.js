import React from 'react';
import './scss/_form.scss';

class PreEngagementhtmlForm extends React.Component {
    constructor(props) {
        super(props);
        // default state
        this.state = {
            apiUrl: 'http://172.18.42.20:6505/genesys/2/chat/retail-service',
            rememberMe: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.startChat = this.startChat.bind(this);
    }

    startChat(e) {
        e.preventDefault();
        const searchParams = new URLSearchParams();
        for (const prop in this.state) {
            searchParams.set(prop, this.state[prop]);
        }

        fetch(this.state.apiUrl,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: searchParams
            }).then(response => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => console.log(error));
    }

    handleInputChange(e) {
        const target = e.target;
        const value = target.type === 'checked' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="">
                <form action="" method="" onSubmit={this.startChat}>
                    <div className="input-field ">
                        <label htmlFor="CustomerReference" className="input-field__label">
                            Customer Reference
                        </label>
                        <input name="customerNumber" id="CustomerReference" type="text" value={this.state.customerReference} onChange={this.handleInputChange} />
                    </div>
                    <div className="input-field ">
                        <span className="input-field__label">
                            Are you a business customer?
                        </span>
                        <label htmlFor="IndividualCustomer">
                            No
                        </label>
                        <input id="BusinessCustomer" type="radio" />
                        <label htmlFor="BusinessCustomer">
                            Yes
                        </label>
                        <input id="BusinessCustomer" type="radio" />
                    </div>
                    <div className="input-field ">
                        <label htmlFor="EngagementFirstName" className="input-field__label">
                            Your First name
                        </label>
                        <input name="firstName" id="EngagementFirstName" type="text" value={this.state.FirstName} onChange={this.handleInputChange} />
                    </div>
                    <div className="input-field ">
                        <label htmlFor="EngagementLastName" className="input-field__label">
                            Your Last name
                        </label>
                        <input name="lastName" id="EngagementLastName" type="text" value={this.state.LastName} onChange={this.handleInputChange} />
                    </div>
                    <div className="input-field ">
                        <label htmlFor="EngagementEmail" className="input-field__label">
                            Your Email address
                        </label>
                        <input name="emailId" id="EngagementEmail" type="email" value={this.state.emailAddress} onChange={this.handleInputChange} />
                    </div>
                    <div className="input-field ">
                        <label htmlFor="EngagementTelephone" className="input-field__label">
                            Your telephone number
                        </label>
                        <input name="phoneNumber" id="EngagementTelephone" type="text" value={this.state.telephone} onChange={this.handleInputChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="TranscriptSession" className="input-field__label">
                            Would you like an email transcript of our chat session?
                        </label>
                        <input id="TranscriptSession" type="checkbox" value={this.state.transcript} onChange={this.handleInputChange} />
                    </div>
                    <div className="input-field ">
                        <label htmlFor="RememberMe">
                            Remember me
                        </label>
                        <span>
                            By selecting to remember-me,
                            your device will store the details entered and will populate the fields next time you select to Chat,
                            if you want to clear your details, you can clear your cookies
                        </span>
                        <input name="rememberMe" id="RememberMe" type="checkbox" value={this.state.rememberCredentials} onChange={this.handleInputChange} />
                    </div>
                    <div className="input-field">
                        <input id="StartLiveChat" type="submit" value="Start Live Chat" />
                    </div>
                </form>
            </div>
        )
    }
}

export default PreEngagementhtmlForm;