const Skills = () => {
    return (
        <section className="px-8 sm:px-24 py-10 dark:bg-gradient-to-r from-blue-700 to-indigo-950 dark:text-indigo-100">
            <h2 className="font-semibold text-red-500 text-center text-3xl">Skills</h2>
            <div className="cards-container">
                <h3 className="text-2xl text-red-700 text-center my-4">Basic Programming Skills</h3>
                <div className="programming flex gap-4 justify-center flex-wrap py-10">
                    {[
                         "c++.jpeg", "python.jpeg"
                    ].map((src, idx) => (
                        <img
                            key={idx}
                            className="shadow-md shadow-gray-700 w-28 sm:w-36 h-20 sm:h-24 hover:cursor-pointer hover:shadow-lg hover:transition hover:shadow-black"
                            src={`/images/skills/${src}`}
                            alt="skills-logo"
                        />
                    ))}
                </div>

                <h3 className="text-2xl text-red-700 text-center my-4">Data Analytics Skills</h3>
                <div className="data flex flex-wrap gap-4 justify-center py-10">
                    {[
                        "r.jpeg", "sql.png", "tensorflow.png", "python.jpeg", 
                        "beautiful soup.png", "ms.jpg", "applied ml.jpeg", 
                        "data visual.jpeg", "power  bi.png"
                    ].map((src, idx) => (
                        <img
                            key={idx}
                            className="shadow-md shadow-gray-700 w-28 sm:w-36 h-20 sm:h-24 hover:cursor-pointer hover:shadow-lg hover:transition hover:shadow-black"
                            src={`/images/skills/${src}`}
                            alt="skills-logo"
                        />
                    ))}
                </div>

                <h3 className="text-2xl text-red-700 text-center my-4">Web Development Skills</h3>
                <div className="web flex flex-wrap gap-4 justify-center py-10">
                    {[
                        "html.jpeg", "bootrstrap.jpeg", "css.jpeg", "tailwind.jpeg",
                        "js.png", "node.png", "express.png", 
                        "react.png", "mongodb.jpeg", "next.png"
                    ].map((src, idx) => (
                        <img
                            key={idx}
                            className="shadow-md shadow-gray-700 w-28 sm:w-36 h-20 sm:h-24 hover:cursor-pointer hover:shadow-lg hover:transition hover:shadow-black"
                            src={`/images/skills/${src}`}
                            alt="skills-logo"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
