import Button from "../Buttons/Button";
import styles from "./ContactForm.module.css";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaMailBulk } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";

function ContactForm() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.contactForm}>
          <div className={`${styles.contactBtn}`}>
            <Button
              text="VIA SUPPORT CHAT"
              icon={<BiSolidMessageSquareDetail />}
            />
            <Button text="VIA CALL" icon={<BiSolidPhoneCall />} />
          </div>
          <Button isOutline={true} text="VIA EMAIL BOX" icon={<FaMailBulk />} />

          <div>
            <form>
              <div className={styles.formContainer}>
                <label htmlFor="name">Name</label>
                <input type="text" autoComplete="on" id="name" placeholder="Enter your name" name="name" />
              </div>
              <div className={styles.formContainer}>
                <label htmlFor="email">Email</label>
                <input
                autoComplete="on"
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  name="email"
                />
              </div>
              <div className={styles.formContainer}>
                <label htmlFor="message">Message</label>
                <textarea
                  type="text"
                  id="message"
                  placeholder="Type your Message here"
                  name="message"
                  rows="10"
                  
                  className="myMessage"
                />
              </div>

              <div className={styles.formContainer}>
                <br />
                <Button text="Submit" icon={<BsFillSendFill />} />
              </div>
            </form>
          </div>
        </div>

        <div className={styles.contactFormImage}>
            <img src="/images/main.svg" alt="Contact svg" />
        </div>
      </section>
    </>
  );
}

export default ContactForm;
