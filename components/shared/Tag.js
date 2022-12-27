const Tag = ({ description }) => {
  return (
    <div className="overflow-hidden rounded-full py-1.5 px-4 text-sm ring-2 ring-pink-700">
      <span className="text-pink-700 font-bold inline-flex gap-x-1">{description}</span>
    </div>
  );
};

export default Tag;
