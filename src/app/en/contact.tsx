import {useState} from "react";
import emailjs from 'emailjs-com';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function isFormEmpty(): boolean {
        return name === '' || email === '' || message === ''
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();

        if (isFormEmpty()) {
            return;
        }

        emailjs.send("service_w3zkj5o", "template_w83gqk9", {
            message: message,
            from_name: name,
            reply_to: "nellpaul@icloud.com",
            from_email: email,
        }, "qRoG2UyfCW3yIGfI7")
            .then((response) => {
                // success
            }, (err) => {
                console.log(err);
            });

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <>
            <div className={"scroll-padding"} id={"contact"}>
                <div className={"flex justify-center mt-28"}>
                    <h2>Contact Me</h2>
                </div>

                <h3 className={"mt-10"}>Are you interested in me or my services? Contact me here:</h3>

                <form onSubmit={handleSubmit} id={"form"}>
                    <label>
                        Your Name:
                        <input type="text" value={name}
                               onChange={(e) => setName(e.target.value)}
                               required/>
                    </label>
                    <label>
                        Email-Address:
                        <input type="email" value={email}
                               onChange={(e) => setEmail(e.target.value)}
                               required/>
                    </label>
                    <label>
                        Message:
                        <textarea value={message}
                                  onChange={(e) => setMessage(e.target.value)}
                                  required/>
                    </label>
                    <input type="submit" disabled={isFormEmpty()} value="Submit"/>
                </form>

                <div className={"flex flex-col items-center"}>
                    <h4>via Discord: <a href={"https://discord.com/users/293400628749664266"} className={"link"}
                                        target={"_blank"}>
                        paul_1610
                    </a></h4>
                    <h4>or send me an E-Mail: <a href={"mailto: nellpaul@icloud.com"} className={"link"}
                                                 target={"_blank"}>
                        nellpaul@icloud.com
                    </a></h4>
                </div>
            </div>
        </>
    );
}