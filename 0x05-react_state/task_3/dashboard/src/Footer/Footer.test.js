import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { AppContext } from '../AppContext';

describe("Testing <Footer /> component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

  it("Footer Component renders without crashing", () => {
    expect(wrapper.exists());
  });

  it("Footer compoenent render at the very least the text “Copyright”", () => {
    expect(wrapper.find("Copyright").at(0)).toBeDefined();
  });
  it('renders the footer with the copyright information', () => {
    const { getByText } = render(<Footer />);
    expect(getByText('Copyright')).toBeInTheDocument();
  });

  it('does not render the contact link when user is logged out', () => {
    const { queryByText } = render(
      <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(queryByText('Contact us')).not.toBeInTheDocument();
  });

  it('renders the contact link when user is logged in', () => {
    const { getByText } = render(
      <AppContext.Provider value={{ user: { isLoggedIn: true } }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(getByText('Contact us')).toBeInTheDocument();
  });
});