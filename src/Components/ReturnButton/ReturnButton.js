import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Link from "next/link";

const SearchButton = styled.img`
  height: 20px;
  margin-top: 10px;
  margin-right: 10px;
  padding: 8px 10px;
  cursor: pointer;
`;

const ReturnButton = (props) => {
  const searchParams = useSelector((state) => state.movie.searchParams);
  // const query = formLink(searchParams)
  // const history = useHistory()

  // const handleClick = () => {
  //   history.push({
  //     pathname: '/search',
  //     search: `${query}`
  //   })
  // }
  return (
    <>
      <Link href={'/search'}>
        <a>
          <SearchButton src="/searchButton.svg"></SearchButton>
        </a>
      </Link>
    </>
  );
};

export default ReturnButton;
