import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function Lookup(props) {
	return <p>{props.data.metrics}</p>;
}

Lookup.propTypes = {
	params: PropTypes.object,
	data: PropTypes.object
};
