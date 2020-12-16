const contentItems = [
  {
    heading: "Face Mask",
    text:
      "It is mandatory to wear a face covering when moving around our bar and restaurant. It is not necessary to wear a mask when seated at your table. Please see FAQs for exemptions to this.",
  },
  {
    heading: "Cleanliness",
    text:
      "We’ve deep cleaned and thorough cleaning routines are taking place regularly all day, every day.",
  },
  {
    heading: "Cleaning Frequency",
    text:
      "We've increased the frequency of our cleaning routines. Every table is cleaned thoroughly at the end of every guest visit.",
  },
  {
    heading: "Payment",
    text:
      "We're encouraging contactless payments to avoid handling cash. The contactless limit for card payments has increased to £45. You can use Apple and Googlepay too.",
  },
  {
    heading: "Safe Distancing",
    text:
      "We have introduced new measures to ensure that we meet government advice on safe distancing. We ask all our guests to be respectful of this policy when they visit us.",
  },
  {
    heading: "Safety First",
    text: `If you have any of the following symptoms, please do not visit our pubs and restaurants:
      Continuous cough
      High temperature
      Shortness of breath`,
  },
  {
    heading: "Guest Service & Seating",
    text: `
    The safety of our guests and team members is our top priority. In order to keep everyone safe we are only able to accept bookings of a maximum of 6 people.  Children and babies need to be included in the maximum number per booking as per above (except in Scotland for children under 12 years of age and in Wales for children under 11 years of age)​.

It’s really important that you check that you will comply with local restrictions on the number of people from different households that can safely socialise indoors before you book with us.

In order to meet the current UK Government guidance on safe distancing in our bar/restaurants, we have had to make some changes to our interior layouts. Please make sure you speak to a team member before sitting down at a table, even if it's unoccupied.

We operate on a strict table service basis. Guests are not permitted to order or wait at bar areas. Our team members will be pleased to help you.

Thank you for your understanding
    `,
  },
];

export default function Covid() {
  return (
    <>
      <h1 className="primary-heading">Covid</h1>

      {contentItems.map((item, idx) => {
        return (
          <section>
            <h2 class="secondary-heading">{item.heading}</h2>
            <p>{item.text}</p>
          </section>
        );
      })}
    </>
  );
}
