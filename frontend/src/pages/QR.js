// QRCodePage.js
import React from 'react';
import QRCode from 'qrcode.react';

const QRCodePage = ({ businessName, userData }) => {
  return (
    <div>
      <h1>hai</h1>
      <QRCode value={JSON.stringify(userData)} />
    </div>
  );
};

export default QRCodePage;
