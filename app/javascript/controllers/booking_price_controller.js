import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="booking-price"
export default class extends Controller {
  static targets = ["start_date", "end_date", "price"];

  connect() {}

  update() {
    const pricePerDay = parseInt(this.priceTarget.dataset.price, 10);
    if (
      this.start_dateTarget.value !== "" &&
      this.end_dateTarget.value !== ""
    ) {
      const diffInMs =
        new Date(this.end_dateTarget.value) -
        new Date(this.start_dateTarget.value);
      const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
      this.priceTarget.innerText = `¥${(
        diffInDays * pricePerDay
      ).toLocaleString()}`;
    }

    // else {
    // this.priceTarget.innerText = `¥${pricePerDay} / day`;
    // }
  }
}
