import { useState, useRef } from "react";
import billing from "/sass/modules/_Billing.module.scss";
import form2Styles from "/sass/modules/_Form2.module.scss";
import generalStyles from "/sass/modules/_General.module.scss";

import Summary from "../form_components/Summary";

export default function TicketHolderForm(props) {
  const formEl = useRef(null);
  const fieldSet = useRef(null);
  const [isChecked, setIsChecked] = useState(false)

  function storeTicketInfo(e){
    /* console.log(e.target.checked);
    console.log(fieldSet.current.elements); */

  }
  function handleClick(){
    console.log("im called")
    isChecked ? setIsChecked(false) : setIsChecked(true);
    
  }
  const holderForm = [...Array(props.amount)].map((e, i) => {
    if (i < props.amount) {
      const ticketHolder = 'ticketholder'+(i+1);
      console.log(ticketHolder)
      const [info, setInfo] = useState('') 
      return (
        <fieldset className={billing.ticketholderCard} ref={fieldSet}>
          <legend>Ticketholder {i + 1}</legend>
          <label htmlFor="name">Name</label>
          <input type="text" id={"name"+i} name={"name"+i} placeholder=" " pattern="^[a-zA-ZÆØÅæøå'- ]*$" autocomplete="name" required onChange={isChecked ? console.log(fieldSet) : console.log("I'm not checked")}/>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder=" " autocomplete="email" required />
          <div>
              <label htmlFor="creditcard_info">
                Use this for the credit card info
              </label>
              <input
                type="checkbox"
                name="creditcard_info"
                id="creditcard_info"
                checked={isChecked}
                className={billing.ticketCheck}
                onChange={(e) => {
                  setIsChecked(e.target.checked)
                }}
              />
            </div>
        </fieldset>
      );
    }
  });
  return (
    <>
      {/* <h2>TICKET HOLDERS INFORMATION</h2>

      <a href="#/">← Back</a>
      <form ref={formEl}>
        <fieldset>{holderForm}</fieldset>
        <div className={generalSyles.buttonWrapper}>
          <button
            className={generalSyles.secondaryButton}
            onClick={() => {
              props.setStep((old) => old - 1);
            }}
          >
            Back
          </button>
          <button
            className={generalSyles.primaryButton}
            onClick={() => {
              props.setStep((old) => old + 1);
            }}
          >
            Continue to payment
          </button>
        </div>
      </form> */}

      {/* -------------------------------------------------- */}
      <img src="/img/step3.svg" alt="step3 breadcrumbs" className={form2Styles.breadcrumbs} />

      <div className={form2Styles.checkout_grid}>
        <section className={form2Styles.checkout_options}>
          <h2>Ticket holder information</h2>
          <a href="#/">← Back</a>
          <form className={billing.billing_form} ref={formEl}>
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
                  className={generalStyles.primaryButton}
                  onClick={() => {
                    props.setStep((old) => old + 1);
                  }}
                >
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
