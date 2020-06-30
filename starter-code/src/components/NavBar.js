import React from "react";
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import { addCart } from "../redux/EcomerceDucks";
import "./NavBar.css";

const NavBar = () => {
    const dispatch = useDispatch();
    return (
        <div className="page__section">
            <nav className="breadcrumb" aria-label="Breadcrumb">
                <ol className="breadcrumb__list r-list">
                    <li className="breadcrumb__group">
                        <Link to="/" className="breadcrumb__point r-link">Home</Link>
                        <span className="breadcrumb__divider" aria-hidden="true">|</span>
                    </li>
                    <li className="breadcrumb__group">
                        <Link to="/products" className="breadcrumb__point r-link">Products</Link>
                        <span className="breadcrumb__divider" aria-hidden="true">|</span>
                    </li>
                    <li className="breadcrumb__group">
                        <Link onClick={() => dispatch(addCart())} to="/" className="breadcrumb__point r-link">New Cart [ + ]</Link>
                    </li>
                </ol>
            </nav>
        </div>
    )
};

export default NavBar;