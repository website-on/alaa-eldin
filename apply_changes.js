const fs = require('fs');
const path = require('path');

const srcImg = 'C:\\Users\\Support\\.gemini\\antigravity\\brain\\764d4b1e-8fb7-4d52-8d25-bfc78d3bfc8f\\media__1782667573966.jpg';
const destImg = path.join(__dirname, 'alaa_logo.jpg');
if (fs.existsSync(srcImg)) {
    fs.copyFileSync(srcImg, destImg);
    console.log('Logo copied successfully.');
} else {
    console.log('Logo source not found.');
}

const files = [
  'script.js', 'index.html', 'grade.html', 'explore.html', 
  'subjects.html', 'my-subscriptions.html', 'login.html', 
  'dashboard.html', 'admin.html', 'style.css'
];

files.forEach(f => {
  const p = path.join(__dirname, f);
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    
    // Strings
    content = content.replace(/منصة لسان العرب التعليمية/g, 'منصة علاء الدين التعليمية');
    content = content.replace(/منصة لسان العرب/g, 'منصة علاء الدين التعليمية');
    content = content.replace(/لسان العرب/g, 'علاء الدين');
    content = content.replace(/201281682711/g, '201123511459');
    content = content.replace(/01281682711/g, '01123511459');
    content = content.replace(/logo\.png/g, 'alaa_logo.jpg');
    
    // Grade replace in script.js
    if (f === 'script.js') {
        const newGrades = `const GRADE_SYSTEMS = [
    { title: 'المرحلة الابتدائية', grades: [{ name: 'الرابع الابتدائي', val: 4, num: 1 }, { name: 'الخامس الابتدائي', val: 5, num: 2 }, { name: 'السادس الابتدائي', val: 6, num: 3 }] },
    { title: 'المرحلة الإعدادية', grades: [{ name: 'الأول الإعدادي', val: 7, num: 1 }, { name: 'الثاني الإعدادي', val: 8, num: 2 }, { name: 'الثالث الإعدادي', val: 9, num: 3 }] },
    { title: 'المرحلة الثانوية', grades: [{ name: 'الأول الثانوي', val: 10, num: 1 }, { name: 'الثاني الثانوي', val: 11, num: 2 }] }
];`;
        content = content.replace(/const GRADE_SYSTEMS = \[\s*\{ title[\s\S]*?\];/m, newGrades);
    }
    
    fs.writeFileSync(p, content, 'utf8');
    console.log('Updated ' + f);
  }
});
