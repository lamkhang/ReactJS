import React, { Component } from 'react';
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";
import SanPham from "./san-pham";
class LiftingStateUpCart extends Component {
    mangSanPham = [
        {
            maSP: 1,
            tenSP: "VinSmart Live",
            manHinh: 'AMOLED, 6.2", Full HD+',
            heDieuHanh: "Android 9.0 (Pie)",
            cameraTruoc: "20 MP",
            cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
            ram: "4 GB",
            rom: "64 GB",
            giaBan: 5700000,
            hinhAnh: "./img/vsphone.jpg"
        },

        {
            maSP: 2,
            tenSP: "Meizu 16Xs",
            manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
            heDieuHanh: "Android 9.0 (Pie); Flyme",
            cameraTruoc: "20 MP",
            cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
            ram: "4 GB",
            rom: "64 GB",
            giaBan: 7600000,
            hinhAnh: "./img/sp_iphoneX.png"
        },

        {
            maSP: 3,
            tenSP: "Iphone XS Max",
            manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
            heDieuHanh: "iOS 12",
            cameraSau: "Chính 12 MP & Phụ 12 MP",
            cameraTruoc: "7 MP",
            ram: "4 GB",
            rom: "64 GB",
            giaBan: 27000000,
            hinhAnh: "./img/sp_blackberry.png"
        }
    ];
    constructor(props){
        super(props);
        this.state = {
            chiTietSanPham: this.mangSanPham[0],
            mangGioHang: []
        }
    }
    handleChiTietSP = (sanPham) =>{
        this.setState({
            chiTietSanPham: sanPham
        })

    }
    handleThemGioHang = (sanPham) =>{
        const objSanPham = {
            maSP : sanPham.maSP,
            tenSP: sanPham.tenSP,
            hinhAnh: sanPham.hinhAnh,
            soLuong: 1,
            giaBan: sanPham.giaBan
        };
        // Tim vi tri san pham xxx trong mang gio hang
        let index = this.state.mangGioHang.findIndex(item => {
            return item.maSP === sanPham.maSP;
        })
        let gioHang = this.state.mangGioHang;
        if(index != -1){
            // Tim thay
            // Cap nhat so luong
            let sanPhamCapNhat = gioHang[index];
            sanPhamCapNhat.soLuong++;
            // console.log(sanPhamCapNhat);
        }
        else{
            gioHang = [...this.state.mangGioHang, objSanPham];
        }
        this.setState({
            mangGioHang: gioHang
        })

    }
    handleDelete = (maSP) =>{
        console.log(maSP)
        let gioHang = [...this.state.mangGioHang];
        let index =gioHang.findIndex(item => {
            return item.maSP == maSP;
        })
        if(index != -1){
            gioHang.splice(index, 1);

        }
        this.setState({
            mangGioHang: gioHang
        })
    }
    handleTangGiamSL = (status, maSP) =>{
        let gioHang = [...this.state.mangGioHang];
        let index = gioHang.findIndex(item => {
            return item.maSP === maSP;
        })
        console.log(gioHang);

        if(status){
            // Tang so luong
            gioHang[index].soLuong++;
        }
        else{
            // Giam so luong
            if(gioHang[index].soLuong > 1){
                gioHang[index].soLuong--;
            }
        }
        this.setState({
            mangGioHang: gioHang
        })
    }
    tongSoLuong = () => {
        /*
            1. tao bien tich luy: tong = 0
            2. duyet mang => item
                tong += item.SoLuong

            3. Hàm sẽ return về bien tong
          */
        let resultTongSoLuong = this.state.mangGioHang.reduce((tong, gioHang, index) =>{
            return tong+=gioHang.soLuong;
        }, 0)
        return resultTongSoLuong;
      };

    render() {
        return (
            <div>
                <h3 className="title">Bài tập giỏ hàng</h3>
                <div className="container">
                    <button
                        className="btn btn-danger"
                        data-toggle="modal"
                        data-target="#modelId"
                    >
                        Giỏ hàng ({this.tongSoLuong()})
              </button>
                </div>
                <DanhSachSanPham danhSachSanPham={this.mangSanPham} chiTietSanPham={this.handleChiTietSP}
                themGioHang={this.handleThemGioHang}
                tongSoLuong={this.tongSoLuong}
                />
                <Modal gioHang={this.state.mangGioHang}
                delete={this.handleDelete}
                tangGiamSL={this.handleTangGiamSL}/>
                <div className="row">
                    <div className="col-sm-5">
                        <img className="img-fluid" src={this.state.chiTietSanPham.hinhAnh} alt="" />
                    </div>
                    <div className="col-sm-7">
                        <h3>Thông số kỹ thuật</h3>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Màn hình</td>
                                    <td>{this.state.chiTietSanPham.manHinh}</td>
                                </tr>
                                <tr>
                                    <td>Hệ điều hành</td>
                                    <td>{this.state.chiTietSanPham.heDieuHanh}</td>
                                </tr>
                                <tr>
                                    <td>Camera trước</td>
                                    <td>{this.state.chiTietSanPham.cameraTruoc}</td>
                                </tr>
                                <tr>
                                    <td>Camera sau</td>
                                    <td>{this.state.chiTietSanPham.cameraSau}</td>
                                </tr>
                                <tr>
                                    <td>RAM</td>
                                    <td>{this.state.chiTietSanPham.ram}</td>
                                </tr>
                                <tr>
                                    <td>ROM</td>
                                    <td>{this.state.chiTietSanPham.rom}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default LiftingStateUpCart;