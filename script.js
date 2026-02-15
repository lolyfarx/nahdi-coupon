<script>
const scriptURL = 'https://script.google.com/macros/s/AKfycbzXXHCfGtCUfJx2u2tlM48glgiRItFnyGrM6uH8KmFoU013ssgHlhDRi72Iww9mqDWbkw/exec';
let isArabic = true;

document.getElementById('toggleLang').addEventListener('click', function() {
    isArabic = !isArabic;
    this.innerText = isArabic ? 'En' : 'العربية';
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    updateTranslations();
});

function updateTranslations() {
    // الصفحة الرئيسية
    document.getElementById('mainTitle').innerText = isArabic ? 'كوبون الخدمة المجاني' : 'FREE SERVICE COUPON';
    document.getElementById('regBtnText').innerText = isArabic ? 'التسجيل في الكوبون المجاني' : 'Register for Free Coupon';
    document.getElementById('regBtnSub').innerText = isArabic ? '(التسجيل لأول مرة)' : '(First Time Registration)';
    document.getElementById('execBtnText').innerText = isArabic ? 'اضغط لتنفيذ الخدمة المجانية' : 'Click to Execute Service';
    document.getElementById('execBtnSub').innerText = isArabic ? '(عند طلب الخدمة بالفرع)' : '(When requesting at branch)';

    // صفحة التسجيل
    document.getElementById('regTitle').innerText = isArabic ? 'تسجيل البيانات' : 'Register Data';
    document.getElementById('lblBranch').innerText = isArabic ? 'فرع النهدي رقم:' : 'Al-Nahdi Branch No:';
    document.getElementById('lblInvoice').innerText = isArabic ? 'رقم الفاتورة:' : 'Invoice Number:';
    document.getElementById('lblName').innerText = isArabic ? 'الاسم:' : 'Name:';
    document.getElementById('lblCarDetails').innerText = isArabic ? 'نوع وموديل السيارة:' : 'Car Type & Model:';
    document.getElementById('lblMobile').innerText = isArabic ? 'رقم الجوال:' : 'Mobile Number:';
    
    // الأمثلة الاسترشادية (Placeholders)
    document.getElementById('branchInput').placeholder = isArabic ? 'اكتب رقم الفرع' : 'Enter branch number';
    document.getElementById('invoiceInput').placeholder = isArabic ? 'اكتب رقم الفاتورة' : 'Enter invoice number';
    document.getElementById('nameInput').placeholder = isArabic ? 'اكتب اسمك الثلاثي' : 'Enter your full name';
    document.getElementById('carInput').placeholder = isArabic ? 'مثال: تويوتا كامري 2026' : 'Ex: Toyota Camry 2026';
    document.getElementById('mobileInput').placeholder = '05XXXXXXXX';

    // صفحة التنفيذ
    document.getElementById('execTitle').innerText = isArabic ? 'تنفيذ الخدمة' : 'Service Execution';
    document.getElementById('lblExecBranch').innerText = isArabic ? 'الفرع المتواجد به للتنفيذ:' : 'Current Branch for Service:';
    document.getElementById('lblExecInvoice').innerText = isArabic ? 'رقم الفاتورة:' : 'Invoice Number:';
    document.getElementById('execBranchInput').placeholder = isArabic ? 'اسم الفرع الحالي' : 'Current branch name';
    document.getElementById('execSubmitBtn').innerText = isArabic ? 'تم التنفيذ' : 'Service Executed';
    document.getElementById('lblRate').innerText = isArabic ? 'تقييم الخدمة' : 'Rate our Service';
    document.getElementById('finishBtn').innerText = isArabic ? 'إنهاء' : 'Finish';

    // الشكر والرجوع
    document.getElementById('thanksTitle').innerText = isArabic ? 'شكراً لاختياركم النهدي للإطارات' : 'Thank you for choosing Al-Nahdi Tires';
    document.getElementById('thanksSub').innerText = isArabic ? 'نسعد بخدمتكم' : 'Happy to serve you';
    document.getElementById('backBtnReg').innerText = isArabic ? 'رجوع' : 'Back';
    document.getElementById('backBtnExec').innerText = isArabic ? 'رجوع' : 'Back';
    document.getElementById('submitBtn').innerText = isArabic ? 'تقديم' : 'Submit';
    document.getElementById('footerText').innerText = isArabic ? 'شركة ياسر يسلم النهدي التجارية' : 'Yasser Yaslam Al-Nahdi Trading Co.';
}

function showPage(pageId) {
    document.querySelectorAll('.container').forEach(c => c.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
}

// معالجة النماذج
document.getElementById('registrationForm').onsubmit = function(e) {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    btn.innerText = isArabic ? 'جاري التحقق...' : 'Checking...';
    fetch(scriptURL, { method: 'POST', body: new FormData(this) })
    .then(res => res.text())
    .then(data => {
        if(data === "DUPLICATE") {
            alert(isArabic ? "تم التسجيل مسبقاً! يرجى التوجه لصفحة تنفيذ الخدمة." : "Already registered! Please go to service execution page.");
        } else {
            showPage('thanksSection');
        }
        btn.innerText = isArabic ? 'تقديم' : 'Submit';
    });
};

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
    fetch(scriptURL, { method: 'POST', body: new FormData(form) }).then(() => showPage('thanksSection'));
}
</script>