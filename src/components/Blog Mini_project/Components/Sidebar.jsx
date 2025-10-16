const Sidebar = ({ handleOnchange }) => {
  const authors = [
    { id: 1, name: "Himanshu Chauhan" },
    { id: 2, name: "Pratik Vora" },
    { id: 3, name: "Deepraj Gupta" },
    { id: 4, name: "Roman Reigns" },
    { id: 5, name: "Guts Beserk" },
  ];

  const genres = [
    { id: 1, name: "Motivation" },
    { id: 2, name: "Self-Improvement" },
    { id: 3, name: "Mindset" },
    { id: 4, name: "Fitness" },
    { id: 5, name: "Philosophy" },
    { id: 6, name: "Leadership" },
    { id: 7, name: "Technology" },
    { id: 8, name: "Artificial Intelligence" },
    { id: 9, name: "Discipline" },
  ];

  return (
    <div className="w-full">
      <div className="p-3 my-3">
        <h1 className="text-xl font-semibold mb-3">Authors</h1>
        <select
          onChange={(e) => handleOnchange(e.target.value, "author")}
          className="p-2 rounded-lg bg-slate-200 text-gray-600 w-full"
        >
          <option value="">Select an Author</option>
          {authors.map((author) => (
            <option key={author.id} value={author.name}>
              {author.name}
            </option>
          ))}
        </select>
      </div>

      <div className="p-4">
        <h1 className="text-xl font-semibold mb-3">Genre</h1>
        <select
          onChange={(e) => handleOnchange(e.target.value, "genre")}
          className="p-2 rounded-lg bg-slate-200 text-gray-600 w-full"
        >
          <option value="">Select Genre</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.name}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Sidebar;
