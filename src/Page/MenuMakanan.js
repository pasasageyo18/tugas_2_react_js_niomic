import React, { Component } from "react";
import ListMakanan from "../ListData/ListMakanan";

class MenuMakanan extends Component {
  render() {
    return (
      <div>
        <h3>Daftar Makanan Yang Kami Sediakan : </h3>
        <td>
          <ListMakanan
            makanan="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"
            nama="Nasi Padang"
          />
        </td>
        <td>
          <ListMakanan
            makanan="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"
            nama="Sate"
          />
        </td>
        <td>
          <ListMakanan
            makanan="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"
            nama="Soto Lamongan"
          />
        </td>
        <td>
          <ListMakanan
            makanan="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png"
            nama="Nasi Kentut"
          />
        </td>
        <td>
          <ListMakanan
            makanan="https://pesona.travel/media/nasi-kuning-sarapan-khas-nusantara-bermakna-mendalam_144651_1140.jpg"
            nama="Nasi Kuning"
          />
        </td>
      </div>
    );
  }
}

export default MenuMakanan;
