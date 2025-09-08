import React, { useEffect, useState } from "react";
import MainLayout from "../components/Layout/MainLayout";

const BlogPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Replace YOUR_API_KEY with your actual NewsAPI key
    fetch(
      "https://newsapi.org/v2/everything?q=digital+marketing&sortBy=publishedAt&language=en&pageSize=9&apiKey=2ffc9f8d4b594a3daa1f76a0e74cc758"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.articles) {
          setArticles(data.articles);
        }
      })
      .catch((err) => console.error("Error fetching blog articles:", err));
  }, []);

  return (
    <MainLayout>
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Latest <span className="text-gradient-xaloc">Insights</span> & Articles
          </h2>
          <p className="text-gray-400 max-w-4xl mb-12">
            Stay updated with the latest trends, tips, and insights in digital
            marketing. This section pulls live blogs from trusted sources so you
            can always keep up with the latest industry updates.
          </p>

          {/* Blog Cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {articles.length > 0 ? (
              articles.map((article, index) => (
                <a
                  key={index}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 group"
                >
                  <div className="relative">
                    {article.urlToImage && (
                      <img
                        src={article.urlToImage}
                        alt={article.title}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    {/* Overlay effect on hover */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center transition duration-300">
                      <span className="text-white opacity-0 group-hover:opacity-100 font-medium text-lg">
                        View Article →
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {article.description
                        ? article.description.slice(0, 120) + "..."
                        : "Click to read the full article."}
                    </p>
                  </div>
                </a>
              ))
            ) : (
              <p className="text-gray-500">Loading articles...</p>
            )}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default BlogPage;
