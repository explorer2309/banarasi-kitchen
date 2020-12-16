import React from "react";

export default function () {
  return (
    <>
      <Header />
      <DeliveryInfo />
      <CustomerNotes />
      <ItemsList />
      <ItemSummary />
      <OrderPaidOrNot />
      <Instructions />
      <CustomerInfo />
      <NewOrReturningCustomer />
      <OrderTimings />
    </>
  );
}

function Header() {
  return (
    <section>
      <h1>The Spread Eagle</h1>
    </section>
  );
}

function DeliveryInfo() {
  return (
    <section>
      <h1>Delivery</h1>
      <div>Due 26-Sep at ASAP 20:10</div>
      <div>Order Number: 102 276 7646</div>
    </section>
  );
}

function CustomerNotes() {
  return (
    <section>
      <div>Contact free delivery</div>
    </section>
  );
}

function ItemsList() {
  return (
    <section>
      <table>
        <tr>
          <td colSpan={5}>GBP</td>
        </tr>
        <tr>
          <td>1</td>
          <td>x</td>
          <td>#13</td>
          <td>Naan (Garlic)</td>
          <td>2.95</td>
        </tr>
        <tr>
          <td>2</td>
          <td>x</td>
          <td>#3</td>
          <td>Chapatti</td>
          <td>2.95</td>
        </tr>
      </table>
    </section>
  );
}

function ItemSummary() {
  return (
    <section>
      <div>
        <div className="lhs">Subtotal</div>
        <div className="rhs">88.68</div>
      </div>
      <div>
        <div className="lhs">Discount</div>
        <div className="rhs">-22.71</div>
      </div>
      <div>
        <div className="lhs">Food & drink total</div>
        <div className="rhs">66.51</div>
      </div>
      <div>
        <div className="lhs">Service charge</div>
        <div className="rhs">0.50</div>
      </div>
      <div>
        <div className="lhs">&nbsp;</div>
        <div className="rhs">--------</div>
      </div>
      <div>
        <div className="lhs">Paid by card</div>
        <div className="rhs">67.01</div>
      </div>
    </section>
  );
}

function OrderPaidOrNot() {
  return (
    <section>
      <h1>Order has been paid</h1>
    </section>
  );
}

function Instructions() {
  return (
    <section>
      <h1>Order free delivery</h1>
      <p>Please check notes for instructions</p>
    </section>
  );
}

function CustomerInfo() {
  return (
    <section>
      <p>Customer Id: 55289739283498</p>
      <p>Customer details</p>
      <div className="big">
        <p>RAY L.</p>
        <p>143 Beecham Road</p>
        <p>Reading</p>
        <p>RG30 2RB</p>
      </div>
      <p>To contact customer call:</p>
      <div className="big">
        <p>07665 788 887</p>
      </div>
      <p>Verification code:</p>
      <div className="big">
        <p>045 633 911</p>
      </div>{" "}
    </section>
  );
}

function NewOrReturningCustomer() {
  return (
    <section>
      <p>New Customer</p>
    </section>
  );
}

function OrderTimings() {
  return (
    <section>
      <div>
        <div className="lhs">Order placed at:</div>
        <div className="rhs">20.10 26-Sep</div>
      </div>
      <div>
        <div className="lhs">Order accepted at:</div>
        <div className="rhs">20.15 26-Sep</div>
      </div>
    </section>
  );
}
