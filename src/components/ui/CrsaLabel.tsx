
export default function CrsaLabel() {
  const btsInitial =
    "text-[#ffb7c5] dark:text-amber-400 font-bold drop-shadow-[0_0_10px_rgba(255,183,197,0.4)] dark:drop-shadow-none";
  const crsaInitial =
    "text-[#ffacc2] dark:text-orange-400 font-bold drop-shadow-[0_0_10px_rgba(255,172,194,0.4)] dark:drop-shadow-none";

  return (
    <span className="font-semibold text-white">
      {/* Initiales BTS */}
      <span className={btsInitial}>B</span>revet de{" "}
      <span className={btsInitial}>T</span>echnicien{" "}
      <span className={btsInitial}>S</span>upérieur en{" "}

      {/* Initiales CRSA */}
      <span className={crsaInitial}>C</span>onception et{" "}
      <span className={crsaInitial}>R</span>éalisation de{" "}
      <span className={crsaInitial}>S</span>ystèmes{" "}
      <span className={crsaInitial}>A</span>utomatiques
    </span>
  );
}
