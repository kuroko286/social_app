import { useSelector } from "react-redux";
import { Search } from "@/assets/svg";
import { useEffect, useRef, useState } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useNavigate } from "react-router-dom";
import { UserItem } from "../Element/UserItem";
import { Cancel } from "../Icon/Icons";
import api from "@/lib/axios";

function SearchBar() {
  const user = useSelector((state) => state.user);
  const [searching, setSearching] = useState(false);
  const [result, setResult] = useState([]);
  const [query, setQuery] = useState("");
  const ref = useRef(null);
  useClickOutside(ref, () => {
    setSearching(false);
    // setUsers([]);
  });

  const handleSearchChange = async (e) => {
    const _result = await api.post(
      "/search",
      { query },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    console.log(_result);
    setResult(_result.data);
  };
  return (
    <>
      <div className="flex items-center bg-gray-200 px-3 py-2 gap-2 rounded-3xl">
        <Search></Search>
        <input
          type="text"
          placeholder="Search something"
          className="outline-none border-none bg-transparent grow"
          onClick={() => setSearching(true)}
          onChange={(e) => setQuery(e.target.value)}
          onKeyUp={handleSearchChange}
        />
      </div>
      {searching && (
        <div
          ref={ref}
          className="absolute w-full top-full bg-white shadow-lg p-4"
        >
          {query.trim().length === 0 ? (
            <SearchHistory setSearching={setSearching} />
          ) : (
            <SearchResult result={result} setSearching={setSearching} />
          )}
        </div>
      )}
    </>
  );
}

const SearchHistory = ({ setSearching }) => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [searchHistory, setSearchHistory] = useState([]);
  useEffect(() => {
    const getSearchHistory = async () => {
      const { data } = await api.get("/search", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setSearchHistory(data);
    };
    getSearchHistory();
  }, []);
  const handleDeteleSearch = async (id) => {
    setSearchHistory(searchHistory.filter((user) => user._id !== id));
    await api.put(
      `/search/${id}/delete`,
      {},
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
  };
  const handleSelectUser = async (id) => {
    await api.put(
      `/search/${id}/add`,
      {},
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    navigate(`/users/${id}`);
    setSearching(false);
    if (!searchHistory.includes(id)) {
      setSearchHistory([...searchHistory, id]);
    }
  };

  return (
    <>
      <header className="flex justify-between items-center">
        <p>Recent</p>
        <p className="text-blue-500 cursor-pointer">Edit</p>
      </header>
      <ul className="mt-4">
        {searchHistory &&
          searchHistory.map((user) => (
            <li
              key={user._id}
              className="flex items-center justify-between cursor-pointer hover:bg-gray-200"
            >
              <UserItem
                picture={user.picture}
                name={user.first_name + " " + user.last_name}
                onClick={() => handleSelectUser(user._id)}
              ></UserItem>
              <div
                className="cursor-pointer"
                onClick={() => handleDeteleSearch(user._id)}
              >
                <Cancel size={24} />
              </div>
            </li>
          ))}
      </ul>
    </>
  );
};

export const SearchResult = ({ result, setSearching }) => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleSelectUser = async (id) => {
    await api.put(
      `/search/${id}/add`,
      {},
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    navigate(`/users/${id}`);
    setSearching(false);
  };
  return (
    <ul className="mt-4">
      {result.map((user) => (
        <li
          key={user._id}
          className="flex items-center justify-between cursor-pointer hover:bg-gray-200"
        >
          <UserItem
            picture={user.picture}
            name={user.first_name + " " + user.last_name}
            onClick={() => {
              handleSelectUser(user._id);
            }}
          ></UserItem>
        </li>
      ))}
    </ul>
  );
};

export default SearchBar;
