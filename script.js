const scriptURL = 'رابط_السكربت_الخاص_بك';
const form = document.getElementById('registrationForm');
const genCodeSpan = document.getElementById('generatedCode');
const hiddenInput = document.getElementById('hiddenCouponCode');
const qrcodeDiv = document.getElementById('qrcode');
let isArabic = true;

function generateCoupon() {
    const code = 'NAHDI-' + Math.floor(1000 + Math.random() * 9000);
    genCodeSpan.innerText = code;
    hiddenInput.value = code;
    qrcodeDiv.innerHTML = ""; 
    new QRCode(qrcodeDiv, { text: code, width: 100, height: 100 });
}
generateCoupon();

document.getElementById('toggleLang').addEventListener('click', function() {
    isArabic = !isArabic;
    this.innerText = isArabic ? 'EN' : 'AR';
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    updateLanguage();
});

function updateLanguage() {
    document.getElementById('title').innerText = isArabic ? 'كوبون Alnahdi' : 'Alnahdi Coupon';
    document.getElementById('labelName').innerText = isArabic ? 'الاسم:' : 'Name:';
    document.getElementById('labelCar').innerText = isArabic ? 'نوع السيارة:' : 'Car Type:';
    document.getElementById('labelModel').innerText = isArabic ? 'موديل السيارة (السنة):' : 'Car Model (Year):';
    document.getElementById('labelMobile').innerText = isArabic ? 'رقم الجوال:' : 'Mobile Number:';
    document.getElementById('submitBtn').innerText = isArabic ? 'تقديم' : 'Submit';
    // تحديث الـ placeholders
    document.getElementById('nameInput').placeholder = isArabic ? 'اكتب اسمك (حروف فقط)' : 'Enter name (Letters only)';
    document.getElementById('carTypeInput').placeholder = isArabic ? 'مثال: تويوتا كامري' : 'Ex: Toyota Camry';
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = true;
    submitBtn.innerText = isArabic ? 'جاري التحقق...' : 'Checking...';

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => response.json())
    .then(data => {
        if(data.result === 'exists') {
            alert(isArabic ? 'هذا الجوال مسجل مسبقاً!' : 'Mobile already registered!');
        } else {
            alert(isArabic ? 'تم التسجيل! كودك: ' + hiddenInput.value : 'Success! Your code: ' + hiddenInput.value);
            form.reset();
            generateCoupon();
        }
        submitBtn.disabled = false;
        submitBtn.innerText = isArabic ? 'تقديم' : 'Submit';
    })
    .catch(error => {
        submitBtn.disabled = false;
        submitBtn.innerText = isArabic ? 'تقديم' : 'Submit';
    });
});