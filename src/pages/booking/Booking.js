import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './Booking.css';

function Booking() {
    const location = useLocation();

    const { name, time, date } = location.state || {};

    const [hasConfirmed, setHasConfirmed] = useState(false);

    // Add form submission handling logic
    const handleSubmit = (event) => {
        event.preventDefault();
        setHasConfirmed(true);
    };

    const navigate = useNavigate();

    const cancel = () => {
        const path = `/dashboard`;
        navigate(path);
    };

    const backToDashboard = () => {
        const path = `/dashboard`;
        navigate(path);
    };

    return (
        <div className="booking-form-container">
            {hasConfirmed ? (
                <div className="booking-form-confirmation">
                    <div className="booking-form-header">
                        <h2>Booking Confirmed</h2>
                    </div>
                    <div className="booking-form-confirmation-content">
                        <p>Thank you for your booking.</p>
                        <p>You are now confirmed for the class below:</p>
                        <p className="booking-form-confirmed-class">
                            {name} on{" "}
                            {date?.toLocaleString("default", {
                                weekday: "long",
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                            })}{" "}
                            at {time}.
                        </p>
                        <p>You will receive an email confirmation shortly.</p>
                    </div>
                    <div className="booking-form-actions">
                        <button
                            type="button"
                            className="booking-form-button booking-form-back-button"
                            onClick={backToDashboard}
                        >
                            Back to classes schedule
                        </button>
                    </div>
                </div>
            ) : (
                <div className="booking-form">
                    <div className="booking-form-header">
                        <h2>Confirm your {name} Booking</h2>
                    </div>
                    <div className="booking-form-map">
                        {/* Embed map component or image here */}
                    </div>
                    <div className="booking-form-time">
                        {/* Displaying booking date and time */}
                        {date?.toLocaleString("default", {
                            year: "numeric",
                            month: "numeric",
                            day: "numeric",
                        })}{" "}
                        - {time}
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="booking-form-inputs">
                            <input type="text" placeholder="First Name" required />
                            <input type="text" placeholder="Last Name" required />
                            <input type="email" placeholder="Email Address" required />
                            <input type="tel" placeholder="Mobile Number" required />
                        </div>
                        <div className="booking-form-consent">
                            <input type="checkbox" id="consentCheckbox" required />
                            <label htmlFor="consentCheckbox">
                                I give permission to save the data I have entered here and use
                                this data to contact me. More information in our privacy
                                statement.
                            </label>
                        </div>
                        <div className="booking-form-actions">
                            <button
                                type="button"
                                className="booking-form-button booking-form-cancel"
                                onClick={cancel}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="booking-form-button booking-form-su">
                                Confirm
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}

export default Booking;