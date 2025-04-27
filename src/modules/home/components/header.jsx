import Actions from "./actions";

export default function Header() {
  return (
    <div className="w-full flex justify-between">
      <h1>Boards for you</h1>
      <Actions />
    </div>
  );
}
