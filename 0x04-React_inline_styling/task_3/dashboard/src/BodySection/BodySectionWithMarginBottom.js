import React, { Component } from "react";
import PropTypes from 'prop-types';
import BodySection from "./BodySection";
import { StyleSheet, css } from 'aphrodite';

class BodySectionWithMarginBottom extends Component {
    render() {
        const { title, children, ...rest } = this.props;
        return (
            <div className={css(styles.bodySectionWithMargin)}>
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

const styles = StyleSheet.create({
    
    bodySectionWithMargin: {
        marginBottom: '40px'
    }
});

export default BodySectionWithMarginBottom;
