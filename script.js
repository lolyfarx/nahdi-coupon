const scriptURL = 'https://script.google.com/macros/s/AKfycbxwHj9W5v9AAoApRcKJxhdTbh8ia8s5fTFnT5eMazp25i9tFiF799I87lSB7IAVFSmu/exec';
let isArabic = true;

window.onload = () => {
    updateTranslations();
    initStars();
};

// التنقل بين الصفحات
function showPage(pageId) {
    const pages = document.querySelectorAll('.container');
    pages.forEach(p => p.classList.add('hidden'));
    
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.remove('hidden');
        window.scrollTo(0, 0);
    }
}

// تبديل اللغة
document.getElementById('toggleLang').addEventListener('click', function() {
    isArabic = !isArabic;
    this.innerText = isArabic ? 'En' : 'العربية';
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    updateTranslations();
});

// الترجمة الكاملة (مطابقة لملف HTML الخاص بك)
function updateTranslations() {
    const t = {
        ar: { 
            main: "كوبون الخدمة المجاني", 
            subMain: "استمتع بـ 4 خدمات مجانية عند شراء 4 إطارات!",
            regBtn: "التسجيل في الكوبون المجاني", regSmall: "(التسجيل لأول مرة)",
            execBtn: "اضغط لتنفيذ الخدمة المجانية", execSmall: "(عند طلب الخدمة بالفرع)",
            promo: "ملحوظة : العرض لمدة 3 شهور من تاريخ الفاتورة",
            invNote: "يجب إحضار أصل أو صورة الفاتورة",
            cityTitle: "أختر مدينة أو الأقرب إليك",
            regTitle: "تسجيل البيانات", regSub: "سجل واستمتع بالكوبون!",
            lblInv: "رقم الفاتورة:", lblName: "الاسم:", lblMob: "رقم الجوال:",
            lblCar: "نوع وموديل السيارة:", lblSer: "الخدمة المطلوبة:",
            lblBr: "رقم فرع النهدي:", provReg: "مقدم الكوبون",
            execTitle: "تنفيذ الخدمة", provExec: "مقدم الخدمة",
            lblRate: "تقييم الخدمة", btnDone: "تم التنفيذ",
            btnFinish: "إنهاء", btnBack: "رجوع", btnSubmit: "تقديم",
            thanks: "شكراً لاختياركم النهدي للإطارات", thanksSub: "نسعد بخدمتكم",
            btnHome: "العودة للرئيسية",
            cities: ["الرياض", "الدمام", "خميس مشيط", "وادي الدواسر", "عرعر"],
            services: ["كل الخدمات", "تدوير اطارات", "فحص اطار", "فحص ميزان", "فحص بطارية"],
            serDef: "اختر الخدمة",
            phI: "مثال: 12345", phN: "مثال: محمد علي", phM: "مثال: 05xxxxxxxx", phC: "مثال: تويوتا كامري 2026", phB: "مثال: 10"
        },
        en: { 
            main: "FREE SERVICE COUPON", 
            subMain: "Enjoy 4 free services when buying 4 tires!",
            regBtn: "Register for Free Coupon", regSmall: "(First time registration)",
            execBtn: "Click to execute free service", execSmall: "(When requesting at the branch)",
            promo: "Note: Offer valid for 3 months from invoice date",
            invNote: "Original or copy of the invoice must be brought",
            cityTitle: "Choose a city or nearest one",
            regTitle: "Register Data", regSub: "Register and enjoy the coupon!",
            lblInv: "Invoice Number:", lblName: "Name:", lblMob: "Mobile Number:",
            lblCar: "Car Type & Model:", lblSer: "Required Service:",
            lblBr: "Al-Nahdi Branch No:", provReg: "Coupon Provider",
            execTitle: "Service Execution", provExec: "Service Provider",
            lblRate: "Service Rating", btnDone: "Done",
            btnFinish: "Finish", btnBack: "Back", btnSubmit: "Submit",
            thanks: "Thank you for choosing Al-Nahdi Tires", thanksSub: "We are happy to serve you",
            btnHome: "Back to Home",
            cities: ["Riyadh", "Dammam", "Khamis Mushait", "Wadi Ad-Dawasir", "Arar"],
            services: ["All Services", "Tire Rotation", "Tire Inspection", "Alignment Check", "Battery Check"],
            serDef: "Select Service",
            phI: "Ex: 12345", phN: "Ex: John Doe", phM: "Ex: 05xxxxxxxx", phC: "Ex: Toyota Camry 2026", phB: "Ex: 10"
        }
    };

    const curr = isArabic ? t.ar : t.en;
    const safeSet = (id, text) => { const el = document.getElementById(id); if (el) el.innerText = text; };
    const safePlaceholder = (id, text) => { const el = document.getElementById(id); if (el) el.placeholder = text; };

    safeSet('mainTitle', curr.main); safeSet('subMainText', curr.subMain);
    safeSet('regBtnText', curr.regBtn); safeSet('regBtnSub', curr.regSmall);
    safeSet('execBtnText', curr.execBtn); safeSet('execBtnSub', curr.execSmall);
    safeSet('promoNote', curr.promo); safeSet('invoiceNote', curr.invNote);
    safeSet('cityTitle', curr.cityTitle); safeSet('btnBackCity', curr.btnBack);
    safeSet('regTitle', curr.regTitle); safeSet('regSubTitle', curr.regSub);
    safeSet('lblInvoice', curr.lblInv); safeSet('lblName', curr.lblName);
    safeSet('lblMobile', curr.lblMob); safeSet('lblCarDetails', curr.lblCar);
    safeSet('lblService', curr.lblSer); safeSet('lblBranch', curr.lblBr);
    safeSet('lblProviderReg', curr.provReg); safeSet('submitBtn', curr.btnSubmit);
    safeSet('btnBackReg', curr.btnBack); safeSet('execTitle', curr.execTitle);
    safeSet('lblExecBranch', curr.lblBr); safeSet('lblProviderExec', curr.provExec);
    safeSet('lblExecInvoice', curr.lblInv); safeSet('execSubmitBtn', curr.btnDone);
    safeSet('lblRate', curr.lblRate); safeSet('finishBtn', curr.btnFinish);
    safeSet('btnBackExec', curr.btnBack); safeSet('thanksTitle', curr.thanks);
    safeSet('thanksSub', curr.thanksSub); safeSet('btnHome', curr.btnHome);

    safePlaceholder('invPH', curr.phI); safePlaceholder('namePH', curr.phN);
    safePlaceholder('mobPH', curr.phM); safePlaceholder('carPH', curr.phC);
    safePlaceholder('brPH', curr.phB); safePlaceholder('brExecPH', curr.phB);
    safePlaceholder('invExecPH', curr.phI);

    const cityList = document.getElementById('cityList');
    if (cityList) {
        cityList.innerHTML = "";
        curr.cities.forEach(city => {
            const btn = document.createElement('button');
            btn.className = "city-box";
            btn.innerText = city;
            btn.onclick = () => {
                document.getElementById('hiddenCity').value = city;
                showPage('regPage');
            };
            cityList.appendChild(btn);
        });
    }

    const serSel = document.getElementById('serviceSelect');
    if (serSel) {
        serSel.innerHTML = `<option value="">${curr.serDef}</option>`;
        curr.services.forEach(s => {
            serSel.innerHTML += `<option value="${s}">${s}</option>`;
        });
    }
}

// نظام النجوم
function initStars() {
    const stars = document.querySelectorAll('.stars span');
    stars.forEach(star => {
        star.onclick = function() {
            let val = parseInt(this.dataset.v);
            document.getElementById('ratingValue').value = val;
            stars.forEach(s => {
                s.style.color = parseInt(s.dataset.v) <= val ? "#ff6600" : "#ddd";
            });
        };
    });
}

// دالة الإرسال لضمان التوافق مع الجوال (تستخدم طريقة GET)
function sendData(formData, type) {
    const params = new URLSearchParams(formData);
    params.append('formType', type);
    
    // في حالة التنفيذ نضيف التقييم يدوياً
    if (type === 'execution') {
        params.append('rating', document.getElementById('ratingValue').value);
    }

    return fetch(`${scriptURL}?${params.toString()}`, {
        method: 'GET',
        mode: 'no-cors'
    });
}

// نموذج التسجيل
const regForm = document.getElementById('registrationForm');
regForm.onsubmit = function(e) {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    btn.disabled = true;
    btn.innerText = isArabic ? "...جاري الإرسال" : "Sending...";

    sendData(new FormData(regForm), 'registration')
    .then(() => {
        regForm.reset();
        showPage('thanksSection');
        btn.disabled = false;
        btn.innerText = isArabic ? "تقديم" : "Submit";
    })
    .catch(() => {
        alert(isArabic ? "حدث خطأ" : "Error");
        btn.disabled = false;
    });
};

// نموذج التنفيذ
const execForm = document.getElementById('executionForm');
execForm.onsubmit = function(e) {
    e.preventDefault();
    document.getElementById('execSubmitBtn').classList.add('hidden');
    document.getElementById('ratingSection').classList.remove('hidden');
};

// إنهاء عملية التنفيذ
function finishProcess() {
    const finishBtn = document.getElementById('finishBtn');
    finishBtn.disabled = true;

    sendData(new FormData(execForm), 'execution')
    .then(() => {
        execForm.reset();
        showPage('thanksSection');
        finishBtn.disabled = false;
    })
    .catch(() => {
        finishBtn.disabled = false;
    });
}