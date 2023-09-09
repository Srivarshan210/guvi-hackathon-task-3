document.addEventListener('DOMContentLoaded', function () {
    const generateButton = document.getElementById('generate');
    const downloadButton = document.getElementById('download');
    const qrCodeDiv = document.getElementById('qrcode');
    
    generateButton.addEventListener('click', function () {
        const data = document.getElementById('data').value;
        const width = document.getElementById('width').value;
        const height = document.getElementById('height').value;
        const format = document.getElementById('format').value;
        const qrColor = document.getElementById('qr-color').value;
        const bgColor = document.getElementById('bg-color').value;
        
        const qrcode = new QRCode(qrCodeDiv, {
            text: data,
            width: width,
            height: height,
            colorDark: qrColor,
            colorLight: bgColor,
            correctLevel: QRCode.CorrectLevel.H
        });
        
        // Show the download button
        downloadButton.style.display = 'block';
        downloadButton.href = qrCodeDiv.getElementsByTagName('img')[0].src;
        downloadButton.download = `qrcode.${format}`;
    });
});