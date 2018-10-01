import React, { Component } from "react";
import PropTypes from "prop-types";
import { firestoreConnect } from "react-redux-firebase";

class Admin extends Component {
  state = {
    name: "",
    remain: "",
    img: "",
    detail: "",
    box: "",
    band: ""
  };
  onSubmit = e => {
    e.preventDefault();

    const newBearing = this.state;

    const { firestore, history } = this.props;

    firestore
      .add({ collection: "bearings" }, newBearing)
      .then(() => history.push("/"));
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <div className="card">
          <div className="card-header">เพิ่มอะไหล่</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">ชื่อ</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  onChange={this.onChange}
                  value={this.state.name}
                />
              </div>

              <div className="form-group">
                <label htmlFor="img">รูปภาพ</label>
                <input
                  type="text"
                  className="form-control"
                  name="img"
                  onChange={this.onChange}
                  value={this.state.img}
                />
              </div>

              <div className="form-group">
                <label htmlFor="remain">คงเหลือ(ชิ้น)</label>
                <input
                  type="number"
                  className="form-control"
                  name="remain"
                  onChange={this.onChange}
                  value={this.state.remain}
                />
              </div>

              <div className="form-group">
                <label htmlFor="detail">รายละเอียด</label>
                <input
                  type="text"
                  className="form-control"
                  name="detail"
                  onChange={this.onChange}
                  value={this.state.detail}
                />
              </div>
              <div className="form-group">
                <label htmlFor="box">กล่อง</label>
                <input
                  type="text"
                  className="form-control"
                  name="box"
                  onChange={this.onChange}
                  value={this.state.box}
                />
              </div>
              <div className="form-group">
                <label htmlFor="band">ยี่ห้อ</label>
                <input
                  type="text"
                  className="form-control"
                  name="band"
                  onChange={this.onChange}
                  value={this.state.band}
                />
              </div>

              <input
                type="submit"
                value="Submit"
                className="btn btn-primary btn-block"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Admin.propTypes = {
  firestore: PropTypes.object.isRequired
};

export default firestoreConnect()(Admin);
