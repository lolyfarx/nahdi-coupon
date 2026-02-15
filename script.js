const scriptURL = 'https://script.google.com/macros/s/AKfycby6YztlTdPpsfCVVHg_dVzkt5XRP-gCVdeo4yhiGlrvK6F3pjhFwE6njnTsLUV6jMNEBQ/exec';
let isArabic = true;

document.getElementById('toggleLang').addEventListener('click', function() {
    isArabic = !isArabic;
    this.innerText = isArabic ? 'En' : 'العربية';
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    updateTranslations();
});

function updateTranslations() {
    const t = {
        ar: { main: "كوبون الخدمة المجاني", reg: "التسجيل في الكوبون المجاني", subTitle: "سجل واستمتع بالكوبون!", lblB: "رقم فرع النهدي:", lblI: "رقم الفاتورة:", lblN: "الاسم:", lblC: "نوع وموديل السيارة:", lblM: "رقم الجوال:", lblCity: "المدينة:", cityDef: "اختر المدينة", provReg: "مقدم الكوبون", provExec: "مقدم الخدمة", sub: "تقديم", back: "رجوع", thanks: "شكراً لاختياركم النهدي للإطارات", exec: "تنفيذ الخدمة" },
        en: { main: "FREE SERVICE COUPON", reg: "Register for Free Coupon", subTitle: "Register and enjoy the coupon!", lblB: "Al-Nahdi Branch No:", lblI: "Invoice Number:", lblN: "Name:", lblC: "Car Type & Model:", lblM: "Mobile Number:", lblCity: "City:", cityDef: "Select City", provReg: "Coupon Provider", provExec: "Service Provider", sub: "Submit", back: "Back", thanks: "Thank you for choosing Al-Nahdi", exec: "Service Execution" }
    };
    const curr = isArabic ? t.ar : t.en;
    document.getElementById('mainTitle').innerText = curr.main;
    document.getElementById('regTitle').innerText = isArabic ? 'تسجيل البيانات' : 'Register Data';
    document.getElementById('regSubTitle').innerText = curr.subTitle;
    document.getElementById('lblInvoice').innerText = curr.lblI;
    document.getElementById('lblName').innerText = curr.lblN;
    document.getElementById('lblMobile').innerText = curr.lblM;
    document.getElementById('lblCarDetails').innerText = curr.lblC;
    document.getElementById('lblCity').innerText = curr.lblCity;
    document.getElementById('cityDefault').innerText = curr.cityDef;
    document.getElementById('lblBranch').innerText = curr.lblB;
    document.getElementById('lblProviderReg').innerText = curr.provReg;
    document.getElementById('lblProviderExec').innerText = curr.provExec;
    document.getElementById('execTitle').innerText = curr.exec;
    document.getElementById('submitBtn').innerText = curr.sub;
    document.getElementById('thanksTitle').innerText = curr.thanks;
}

function showPage(pageId) {
    document.querySelectorAll('.container').forEach(c => c.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
}

document.getElementById('registrationForm').onsubmit = function(e) {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    btn.disabled = true;
    fetch(scriptURL, { method: 'POST', body: new FormData(this) })
    .then(res => res.text())
    .then(data => {
        if(data === "DUPLICATE") {
            alert(isArabic ? "البيانات المدخله مسجلة مسبقاً" : "Data already registered");
        } else {
            showPage('thanksSection');
        }
        btn.disabled = false;
    });
};

document.getElementById('executionForm').onsubmit = function(e) {
    e.preventDefault();
    document.getElementById('execSubmitBtn').classList.add('hidden');
    document.getElementById('ratingSection').classList.remove('hidden');
    fetch(scriptURL, { method: 'POST', body: new FormData(this) });
};

document.querySelectorAll('.stars span').forEach(star => {
    star.onclick = function() {
        let val = this.dataset.v;
        document.getElementById('ratingValue').value = val;
        document.querySelectorAll('.stars span').forEach(s => s.classList.toggle('active', s.dataset.v <= val));
    };
});

function finishProcess() {
    fetch(scriptURL, { method: 'POST', body: new FormData(document.getElementById('executionForm')) })
    .then(() => showPage('thanksSection'));
}