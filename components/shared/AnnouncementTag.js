const AnnouncementTag = ({ description }) => {
  return (
    <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-2 ring-gray-900/10 hover:ring-pink-700">
      <span className="text-gray-600 inline-flex gap-x-1">
        {description}
        <a href="#" className="font-semibold text-pink-700">
          <span aria-hidden="true" />
          Read more <span aria-hidden="true">&rarr;</span>
        </a>
      </span>
    </div>
  );
};

export default AnnouncementTag;
