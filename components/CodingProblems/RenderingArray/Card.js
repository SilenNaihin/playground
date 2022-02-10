export default function Card({first}) {
  // return <div style={{ display: show ? "" : "none" }}>{number}</div>;
  return (
    <div
      className={`mt-2 flex flex-col justify-center items-center w-6 h-6 ${
        first ? "" : "bg-transparent"
      }`}
    >
      <div className={`-mt-6 ${first ? "" : "hidden"}`}>{first}</div>
      <div className="mb-1 flex justify-center items-center"></div>
    </div>
  );
}
