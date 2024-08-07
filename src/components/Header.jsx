import Counter from "./Counter";
import Logo from "./Logo";

export default function Header({ itemsPacked, totalNumberOfItems }) {
  return (
    <header>
      <Logo />
      <Counter
        itemsPacked={itemsPacked}
        totalNumberOfItems={totalNumberOfItems}
      />
    </header>
  );
}
