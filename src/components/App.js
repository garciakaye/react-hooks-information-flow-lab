import Header from "./Header";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  

  return (
      <div className="App">
      <Header />
      <ShoppingList items={itemData} />
      </div>
  );
}

export default App;
