import React from 'react';

const PreEngagementForm = () => {
    return(
        <div className="">
            <form action="" method="">
                <div className="">
                    <label for="EngagementFirstName">
                        First Name:
                    </label>
                    <input id="EngagementFirstName" type="text" value="" />
                </div>
                <div className="">
                    <label for="EngagementLastName">
                        Last Name:
                    </label>
                    <input id="EngagementLastName" type="text" value="" />
                </div>
                <div className="">
                    <label for="EngagementEmail">
                        Email:
                    </label>
                    <input id="EngagementEmail" type="email" value="" />
                </div>
                <div className="">
                    <label for="EngagementTel">
                        Tel Number:
                    </label>
                    <input id="EngagementTel" type="text" value="" />
                </div>
            </form>
        </div>
    )
}

export default PreEngagementForm;