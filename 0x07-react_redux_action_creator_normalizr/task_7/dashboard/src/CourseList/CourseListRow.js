import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  row: {
    backgroundColor: (props) => (props.isHeader ? '#f5f5f5ab' : '#deb5b545'),
  },
  rowChecked: {
    backgroundColor: '#e6e4e4',
  },
  header: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cell: {
    padding: '5px 10px',
    borderBottom: '1px solid lightgray',
    textAlign: 'left'
  },
});

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const [isChecked, setIsChecked] = useState(false);

  const rowStyle = isHeader ? styles.row : isChecked ? styles.rowChecked : styles.row;

  return (
    <tr className={css(rowStyle)}>
      {isHeader ? (
        textSecondCell === null ? (
          <th className={css(styles.header, styles.cell)} colSpan="2">
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className={css(styles.header, styles.cell)}>{textFirstCell}</th>
            <th className={css(styles.header, styles.cell)}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td className={css(styles.cell)}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            {textFirstCell}
          </td>
          <td className={css(styles.cell)}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;