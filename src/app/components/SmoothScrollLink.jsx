import React from 'react';
import { Link } from 'next-anchor';

const SmoothScrollLink = ({ href, children, ...rest }) => (
  <Link href={href} {...rest}>
    <a>{children}</a>
  </Link>
);

export default SmoothScrollLink;