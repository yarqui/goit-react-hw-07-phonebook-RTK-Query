import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return <main>{children}</main>;
};

Layout.propTypes = {
  children: PropTypes.any,
};
export default Layout;
