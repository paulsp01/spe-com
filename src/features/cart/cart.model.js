export default class cartItemModel {
  constructor(productID, userID, quantity, id) {
    this.userID = userID;
    this.productID = productID;
    this.quantity = quantity;
    this.id = id;
  }

  static add(productID, userID, quantity) {
    const cartItem = new cartItemModel(userID, productID, quantity);
    cartItem.id = cartItems.length + 1;
    cartItems.push(cartItem);
    return cartItems;
  }
  static get(userID) {
    return cartItems.filter((i) => i.userID == userID);
  }
  static delete(cartItemID, userID) {
    const cartItemIndex = cartItems.findIndex(
      (i) => i.id == cartItemID && i.userID == userID
    );
    if (cartItemIndex == -1) {
      return "item not found";
    } else {
      cartItems.splice(cartItemIndex, 1);
    }
  }
}
var cartItems = [new cartItemModel(1, 2, 1, 1), new cartItemModel(1, 1, 2, 2)];
