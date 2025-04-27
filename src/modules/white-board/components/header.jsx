import Actions from "./actions";

export default function Header() {
  return (
    <div className="flex justify-between">
      <h1 className="text-3xl font-semibold mb-8 text-center">
        Virtual Whiteboard
      </h1>
      <Actions />
    </div>
  );
}
