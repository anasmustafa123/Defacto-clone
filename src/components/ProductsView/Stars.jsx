export default function Stars({ starsCount }) {
  const addStar = () => (
    <i class="text-sm p-0 bx bxs-star"></i>
  )
  return (
    <span>
      {[...Array(5)].map((value, index) =>
        index < starsCount ? (
          <i class="text-sm p-0 bx bxs-star"></i>
        ) : (
          <i class="text-sm p-0 bx bxs-star text-gray-300"></i>
        )
      )}
    </span>
  );
}
