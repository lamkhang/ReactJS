import React, { Component } from 'react';
import SanPham from "./san-pham";
class DanhSachSanPham extends Component {
    render() {
        return (
          <div className="container">
            <div className="row">
              {this.renderHTML()}
            </div>
          </div>
        );
      }
      renderHTML = () =>{
          return this.props.danhSachSanPham.map((sanPham, index) => {
              return <SanPham key={index} sanPham={sanPham} chiTietSanPham={this.props.chiTietSanPham}
              themGioHang={this.props.themGioHang} tongSoLuong={this.props.tongSoLuong}/>
          })
      }
}

export default DanhSachSanPham;