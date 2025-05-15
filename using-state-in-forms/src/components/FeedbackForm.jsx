import { useState } from "react";

export default function FeedbackForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        userFeedback: ""
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(`Updating ${name}:`, value);
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    };

    function handleSubmitForm() {
        if (!formData.name || !formData.email || !formData.userFeedback) {
            alert("one or more fields is missing input");
            return
        }

        alert("Submission successful");
    }


    return (
        <section className="feedback-container">
            <form action="dialog" className="feedback-form">
                <div className="form-field">
                    <label htmlFor="name">Your name: </label>
                    <input 
                        type="text"
                        name="name"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="email">Email: </label>
                    <input 
                        type="text"
                        name="email"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="userFeedback">Feedback: </label>
                    <textarea 
                        type="text" 
                        id="userFeedback"
                        name="userFeedback"
                        placeholder="Your feedback here.."
                        onChange={handleChange}
                        rows={5}
                        cols={30}
                        maxLength={200}
                    />
                    {document.getElementById("userFeedback") && (
                        <small>Character count: {document.getElementById("userFeedback").value.length} of 200</small>
                    )}
                </div>
                <button onClick={handleSubmitForm}>Submit</button>
            </form>
            <div className="entries-container">
                <p><em>Submission Details</em></p>
                <div className="entered-data-container">
                    <h4 className="">{formData.name} {formData.email}</h4>
                </div>
                <div className="entered-data-container"> 
                    <p>{formData.feedback}</p>
                </div>
            </div>
        </section>
    );
}