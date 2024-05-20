import React, { Component } from "react";
import PropTypes from 'prop-types';
import BodySection from "./BodySection";
import './BodySectionWithMarginBottom.css';

class BodySectionWithMarginBottom extends Component {
    render() {
        const { title, children, ...rest } = this.props;
        return (
            <div className="bodySectionWithMargin">
                <BodySection title={title} {...rest}>
                    {children}
                </BodySection>
            </div>
        );
    }
}

BodySectionWithMarginBottom.propTypes = {
    ...BodySection.propTypes,
    title: PropTypes.string.isRequired,
    children: PropTypes.node
};

export default BodySectionWithMarginBottom;