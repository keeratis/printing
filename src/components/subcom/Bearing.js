import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
class Bearings extends Component {
  state = {
    remains: ""
  };
  // Update balance
  onDeleteClick = () => {
    const { bearings, firestore, history } = this.props;

    firestore
      .delete({ collection: "bearings", doc: bearings.name })
      .then(history.push("/"));
  };
  render() {
    const { bearings } = this.props;
    if (bearings) {
      return (
        <div>
          <h1 className="topic">ลูกปืน</h1>
          <div className="main table-responsive">
            <table className="table table-striped">
              <thead className=" thead-inverse thead-dark">
                <tr>
                  <th>รูป</th>
                  <th>ชื่อ</th>
                  <th>ยี่ห้อ</th>
                  <th>กล่องที่</th>
                  <th>รายละเอียด</th>
                  <th>เหลือ</th>
                  <th>เบิก</th>
                </tr>
              </thead>
              <tbody>
                {bearings.map(bearing => (
                  <tr key={bearing.name}>
                    <td>
                      <img
                        src={bearing.img}
                        width="100"
                        height="100"
                        alt="รูปภาพ"
                      />
                    </td>
                    <td>{bearing.name}</td>
                    <td>{bearing.band}</td>
                    <td>{bearing.box}</td>
                    <td>{bearing.detail}</td>
                    <td>{bearing.remain}</td>
                    <td>
                      <button
                        class="btn btn-primary"
                        onClick={this.onDeleteClick}
                      >
                        เบิก
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    } else {
      return <h1 className="please">รอสักครู่...</h1>;
    }
  }
}
Bearings.propTypes = {
  firestore: PropTypes.object.isRequired,
  bearing: PropTypes.array
};
export default compose(
  firestoreConnect([{ collection: "bearings" }]),
  connect((state, props) => ({
    bearings: state.firestore.ordered.bearings
  }))
)(Bearings);
