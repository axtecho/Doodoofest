import { useState, useRef } from "react";
import billing from "/sass/modules/_Billing.module.scss";
import form2Styles from "/sass/modules/_Form2.module.scss";
import generalStyles from "/sass/modules/_General.module.scss";

import Summary from "../form_components/Summary";

export default function TicketHolderForm(props) {
  const formEl = useRef(null);
  const fieldSet = useRef(null);
  const [isChecked, setIsChecked] = useState(false)

  function handleSubmit(){
    props.setStep((old) => old + 1);

  }
  function handleClick(){
    console.log("im called")
    isChecked ? setIsChecked(false) : setIsChecked(true);
    
  }
  const holderForm = [...Array(props.amount)].map((e, i) => {
    if (i < props.amount) {
 
      return (
        <fieldset className={billing.ticketholderCard} >
          <legend>Ticketholder {i + 1}</legend>
          <div>
          <label htmlFor="name">Name</label>
          <input type="text" id={"name"+i} name={"name"+i} placeholder=" " pattern="^[-a-zA-ZÆØÅæøå' ]*$" autoComplete="name" required onChange={isChecked ? console.log(fieldSet) : console.log("I'm not checked")}/>
          <span className={billing.requirements}>Must only contain letters</span>
          </div>
<>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder=" " autoComplete="email" required />
          <span className={billing.requirements}>Please use valid email address</span>
          </>
       
        </fieldset>
      );
    }
  });
  return (
    <>
  
      <img src="/img/step3.svg" alt="step3 breadcrumbs" className={form2Styles.breadcrumbs} />

      <div className={form2Styles.checkout_grid}>
        <section className={form2Styles.checkout_options}>
          <h2>Ticket holder information</h2>
          <a href="#/">← Back</a>
          <form className={billing.billing_form} ref={formEl} onSubmit={handleSubmit} >
            {holderForm}
            <fieldset>
              <div className={generalStyles.buttonWrapper}>
                <button
                  className={generalStyles.secondaryButton}
                  onClick={() => {
                    props.setStep((old) => old - 1);
                  }}
                >
                  Back
                </button>
                <button
                  className={generalStyles.primaryButton}>
                  Continue to payment
                </button>
              </div>
            </fieldset>
          </form>
        </section>
        <Summary {...props} />
      </div>
    </>
  );
}
