import React, { useState } from "react";
import { Siderbar, MiddleOuterWraper, RightSidebar } from "../../components";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Mock search results
    const mockResults = [
      { id: 1, image: "https://via.placeholder.com/150", name: "user1" },
      { id: 2, image: "https://via.placeholder.com/150", name: "user2" },
      { id: 3, image: "https://via.placeholder.com/150", name: "user3" },
      { id: 4, image: "https://via.placeholder.com/150", name: "user4" },
      { id: 5, image: "https://via.placeholder.com/150", name: "user5" },
      { id: 6, image: "https://via.placeholder.com/150", name: "user6" },
    ];

    setSearchResults(mockResults.filter((item) => item.name.includes(value)));
  };
  return (
    <>
      <div className="row">
        <Siderbar />
        <MiddleOuterWraper>
          <div className="container">
            <div className="row mt-3">
              <div className="col-12">
                <input type="text" className="form-control" placeholder="Search..." value={searchTerm} onChange={handleSearch} />
              </div>
            </div>
            <div className="row mt-4">
              {searchResults.length > 0 ? (
                searchResults.map((result) => (
                  <div key={result.id} className="col-4 mb-4">
                    <div className="card">
                      <img src={result.image} className="card-img-top" alt={result.name} />
                      <div className="card-body">
                        <h5 className="card-title">{result.name}</h5>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12">
                  <p className="text-center">No results found.</p>
                </div>
              )}
            </div>
          </div>
        </MiddleOuterWraper>
        <RightSidebar />
      </div>
    </>
  );
}
