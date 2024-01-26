interface prop {
  rating?: string;
}
const RatingLabel = ({ rating }: prop) => {
  return (
    <>
      {rating === "GOOD" && (
        <section className="bg-[#1E6446] text-white w-20 p-1 mt-2 text-xs mx-auto rounded-md">
          Good price
        </section>
      )}
      {rating === "FAIR" && (
        <section className="bg-[#FBBA00] text-white w-20 p-1 mt-2 text-xs mx-auto rounded-md">
          Fair price
        </section>
      )}
      {rating === "LOW" && (
        <section className="bg-slate-300 w-20 p-1 mt-2 text-xs mx-auto rounded-md">
          Low price
        </section>
      )}
      {rating === "GREAT" && (
        <section className="bg-[#87c1a0] w-20 p-1 mt-2 text-xs mx-auto rounded-md">
          Great price
        </section>
      )}
    </>
  );
};

export default RatingLabel;
