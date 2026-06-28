const fs = require('fs');
try {
    fs.copyFileSync('C:\\Users\\Support\\.gemini\\antigravity\\brain\\7afab210-2c8c-42ef-8925-2d73004464ca\\media__1782055729511.png', 'c:\\webs\\رجب ابو الخير\\farah.png');
    console.log('Image copied successfully!');
} catch (e) {
    console.error('Failed to copy image:', e);
}
