class Card {
  id: string;

  ownerName: string;

  number: string;

  validThru: string;

  cvv: string;

  constructor({ id, ownerName, number, validThru, cvv }: Card) {
    this.id = id;
    this.ownerName = ownerName;
    this.number = number;
    this.validThru = validThru;
    this.cvv = cvv;
  }
}

export default Card;
