import React from 'react';
import Brick from '../img/brick.jpeg';

var about ={
  backgroundImage: `url(${Brick})`,
  height: '700px',
  width: '100%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
};

function TapDetail() {
  return(
    <div style={about}>
      <div className="container">
        <style jsx>{`
        div .Small{
          float: right;
          background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg0XYSOCouKJofmoI9KykFkcinOsPA6Rnc-khFNnuanMk1gNXZ');
          width: 150px;
          padding: 100px;
          border-style: solid;
          border-color: black;
          text-align: center;
          color: white;
        }
        div .t{
          float: left;
          background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg0XYSOCouKJofmoI9KykFkcinOsPA6Rnc-khFNnuanMk1gNXZ');
          width: 150px;
          height: 250px;
          padding: 150px;
          border-style: solid;
          border-color: black;
          text-align: center;
          color: White;
        }

          `}
        </style>
        <div className="Small">
        <h2>Why do we use it?</h2>
        <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is tha</p>
        </div>

          <div className="t">
        <h3>Contrary</h3>
        <p>to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at </p>
        </div>
      </div>
    </div>
  );
}

export default TapDetail;
