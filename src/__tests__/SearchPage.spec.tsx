import * as React from "react";
import { shallow } from "enzyme";

import { SearchPage, SearchContainer, SearchButton } from "../components/SearchPage";
import SearchBar from "../components/ui/SearchBar";

it("renders the SearchPage", () => {
  const props = {
    fetchGifs: jest.fn()
  };
  SearchPage.prototype.searchInput = {
      focus: jest.fn()
  }
  const wrapper = shallow(<SearchPage {...props} />);

  expect(wrapper.find(SearchContainer)).toBeTruthy();
  expect(wrapper.find(SearchButton)).toBeTruthy();
  expect(wrapper.find(SearchBar)).toBeTruthy();
});
