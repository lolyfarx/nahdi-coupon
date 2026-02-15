const scriptURL = 'https://script.google.com/macros/s/AKfycbyHXeUv9J4dfurqCZ_umxcK117Y4soM0jlNCAbGYSTalDzBkogP6iYc8KlFwiC_LJSZwQ/exec';
let isArabic = true;

// تبديل اللغة
document.getElementById('toggleLang').addEventListener('click', function() {
    isArabic = !isArabic;
    this.innerText = isArabic ? 'En' : 'العربية';
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    updateTranslations();
});

function updateTranslations() {
    const t = {
        ar: { main: "كوبون الخدمة المجاني", reg: "التسجيل في الكوبون المجاني", regSub: "(التسجيل لأول مرة)", exec: "اضغط لتنفيذ الخدمة المجانية", execSub: "(عند طلب الخدمة بالفرع)", lblB: "فرع النهدي رقم:", lblI: "رقم الفاتورة:", lblN: "الاسم:", lblC: "نوع وموديل السيارة:", lblM: "رقم الجوال:", sub: "تقديم", back: "رجوع", thanks: "شكراً لاختياركم النهدي للإطارات", happy: "نسعد بخدمتكم" },
        en: { main: "FREE SERVICE COUPON", reg: "Register for Free Coupon", regSub: "(First Time Registration)", exec: "Click to Execute Service", execSub: "(When requesting at branch)", lblB: "Al-Nahdi Branch No:", lblI: "Invoice Number:", lblN: "Name:", lblC: "Car Type & Model:", lblM: "Mobile Number:", sub: "Submit", back: "Back", thanks: "Thank you for choosing Al-Nahdi", happy: "Happy to serve you" }
    };
    const curr = isArabic ? t.ar : t.en;
    document.getElementById('mainTitle').innerText = curr.main;
    document.getElementById('regBtnText').innerText = curr.reg;
    document.getElementById('regBtnSub').innerText = curr.regSub;
    document.getElementById('execBtnText').innerText = curr.exec;
    document.getElementById('execBtnSub').innerText = curr.execSub;
    document.getElementById('lblBranch').innerText = curr.lblB;
    document.getElementById('lblInvoice').innerText = curr.lblI;
    document.getElementById('lblName').innerText = curr.lblN;
    document.getElementById('lblCarDetails').innerText = curr.lblC;
    document.getElementById('lblMobile').innerText = curr.lblM;
    document.getElementById('submitBtn').innerText = curr.sub;
    document.getElementById('thanksTitle').innerText = curr.thanks;
    document.getElementById('thanksSub').innerText = curr.happy;
}

// التنقل بين الصفحات
function showPage(pageId) {
    document.querySelectorAll('.container').forEach(c => c.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
}

// نموذج التسجيل
document.getElementById('registrationForm').onsubmit = function(e) {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    btn.innerText = isArabic ? "جاري التحقق..." : "Checking...";
    
    fetch(scriptURL, { method: 'POST', body: new FormData(this) })
    .then(res => res.text())
    .then(data => {
        if(data === "DUPLICATE") {
            alert(isArabic ? "تم التسجيل مسبقاً برقم الهاتف أو الفاتورة!" : "Already registered!");
        } else {
            showPage('thanksSection');
        }
        btn.innerText = isArabic ? "تقديم" : "Submit";
    });
};

// نموذج التنفيذ
document.getElementById('executionForm').onsubmit = function(e) {
    e.preventDefault();
    document.getElementById('execSubmitBtn').classList.add('hidden');
    document.getElementById('ratingSection').classList.remove('hidden');
    fetch(scriptURL, { method: 'POST', body: new FormData(this) });
};

// النجوم
document.querySelectorAll('.stars span').forEach(star => {
    star.onclick = function() {
        let val = this.dataset.v;
        document.getElementById('ratingValue').value = val;
        document.querySelectorAll('.stars span').forEach(s => s.classList.toggle('active', s.dataset.v <= val));
    };
});

function finishProcess() {
    const form = document.getElementById('executionForm');
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(() => showPage('thanksSection'));
}