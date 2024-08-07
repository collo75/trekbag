export default function Counter({ itemsPacked, totalNumberOfItems }) {
  return (
    <p>
      <b>{itemsPacked}</b> / {totalNumberOfItems} items packed
    </p>
  );
}
