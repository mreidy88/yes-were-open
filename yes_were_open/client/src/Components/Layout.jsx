import React from 'react';
import { motion } from 'framer-motion';

import Nav from './Nav';

import './Layout.css';

const Layout = (props) => (
  <div className="layout">
    <Nav user={props.user} />
    <motion.div
      className="layout-children"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {props.children}
    </motion.div>
  </div>
);

export default Layout;