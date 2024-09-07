import React, { useEffect, useState } from "react";
import { Siderbar, MiddleOuterWraper, RightSidebar, Loading } from "../../components";
import { _get } from "../../services/api";
import { useToast } from "../../services/hook";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const { showToast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [notFoundUsername, setNotFoundUsername] = useState(false);
  const [hasSearchResults, setHasSearchResults] = useState(false);

  // This function is used for get user profile data on the basis of pass the username on search box
  const getOthersUserProfile = async () => {
    setIsLoading(true);
    try {
      const response = await _get(`social-media/profile/u/${searchTerm}`);
      if (response?.status === 200) {
        setSearchResults(response?.data?.data);
        setHasSearchResults(true);
        setNotFoundUsername(false);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        console.error("Error Status Code:", error.response.status);
        console.error("Error Message:", error.response.data.message);
        showToast(error.response.data.message, "error");
        if (error.response.status === 404) {
          setHasSearchResults(false);
          setNotFoundUsername(true);
        }
      } else {
        console.error("An unknown error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // this function is used for submit data after press enter on search field.
  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();
    if (searchTerm !== "") {
      getOthersUserProfile();
    }
  };

  useEffect(() => {
    if (searchTerm.length === 0) {
      setNotFoundUsername(false);
      setHasSearchResults(false);
    }
  }, [searchTerm]);
  return (
    <>
      <div className="row">
        <Siderbar />
        <MiddleOuterWraper>
          <div className="container">
            <div className="row mt-3">
              <div className="col-12">
                <form onSubmit={handleLoginFormSubmit}>
                  <input type="text" className="form-control" placeholder="Search Username..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                </form>
              </div>
            </div>
            <div className="row mt-4">
              {notFoundUsername && searchTerm !== "" && <p>No user found.</p>}
              {isLoading && <Loading />}
              {!isLoading && hasSearchResults && (
                <div className="col-4 mb-4">
                  <div className="card">
                    <img src={searchResults?.coverImage?.url} className="card-img-top" />
                    <div className="card-body">
                      <h6 className="card-title">{searchResults?.account?.username}</h6>
                      <p className="card-title">
                        {searchResults?.firstName}
                        {searchResults?.lastName}
                      </p>
                    </div>
                  </div>
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
