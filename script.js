const scriptURL = 'https://script.google.com/macros/s/AKfycbxsjuJNCJI-eG7DZv-Pg7dkwrTXz--oxIxX3oHOu-nliVjHe3q3AXKRJQhaVwDf7jfL4w/exec';
let isArabic = true;

window.onload = () => {
    updateTranslations();
    initStars();
};

document.getElementById('toggleLang').addEventListener('click', function() {
    isArabic = !isArabic;
    this.innerText = isArabic ? 'En' : 'العربية';
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    updateTranslations();
});

function updateTranslations() {
    const t = {
        ar: { 
            main: "كوبون الخدمة المجاني", 
            subMain: "استمتع بـ 4 خدمات مجانية عند شراء 4 إطارات!",
            regBtn: "التسجيل في الكوبون المجاني",
            regSmall: "(التسجيل لأول مرة)",
            execBtn: "اضغط لتنفيذ الخدمة المجانية",
            execSmall: "(عند طلب الخدمة بالفرع)",
            promo: "ملحوظة : العرض لمدة 3 شهور من تاريخ الفاتورة",
            invNote: "يجب إحضار أصل أو صورة الفاتورة",
            cityTitle: "أختر مدينة أو الأقرب إليك",
            regTitle: "تسجيل البيانات",
            regSub: "سجل واستمتع بالكوبون!",
            lblInv: "رقم الفاتورة:",
            lblName: "الاسم:",
            lblMob: "رقم الجوال:",
            lblCar: "نوع وموديل السيارة:",
            lblSer: "الخدمة المطلوبة:",
            lblBr: "رقم فرع النهدي:",
            provReg: "مقدم الكوبون",
            execTitle: "تنفيذ الخدمة",
            provExec: "مقدم الخدمة",
            lblRate: "تقييم الخدمة",
            btnDone: "تم التنفيذ",
            btnFinish: "إنهاء",
            btnBack: "رجوع",
            btnSubmit: "تقديم",
            thanks: "شكراً لاختياركم النهدي للإطارات",
            thanksSub: "نسعد بخدمتكم",
            btnHome: "العودة للرئيسية",
            cities: ["الرياض", "الدمام", "خميس مشيط", "وادي الدواسر", "عرعر"],
            services: ["كل الخدمات", "تدوير اطارات", "فحص اطار", "فحص ميزان", "فحص بطارية"],
            serDef: "اختر الخدمة",
            phI: "مثال: 12345", phN: "مثال: محمد علي", phM: "مثال: 05xxxxxxxx", phC: "مثال: تويوتا كامري 2026", phB: "مثال: 10"
        },
        en: { 
            main: "FREE SERVICE COUPON", 
            subMain: "Enjoy 4 free services when buying 4 tires!",
            regBtn: "Register for Free Coupon",
            regSmall: "(First time registration)",
            execBtn: "Click to execute free service",
            execSmall: "(When requesting at the branch)",
            promo: "Note: Offer valid for 3 months from invoice date",
            invNote: "Original or copy of the invoice must be brought",
            cityTitle: "Choose a city or nearest one",
            regTitle: "Register Data",
            regSub: "Register and enjoy the coupon!",
            lblInv: "Invoice Number:",
            lblName: "Name:",
            lblMob: "Mobile Number:",
            lblCar: "Car Type & Model:",
            lblSer: "Required Service:",
            lblBr: "Al-Nahdi Branch No:",
            provReg: "Coupon Provider",
            execTitle: "Service Execution",
            provExec: "Service Provider",
            lblRate: "Service Rating",
            btnDone: "Done",
            btnFinish: "Finish",
            btnBack: "Back",
            btnSubmit: "Submit",
            thanks: "Thank you for choosing Al-Nahdi Tires",
            thanksSub: "We are happy to serve you",
            btnHome: "Back to Home",
            cities: ["Riyadh", "Dammam", "Khamis Mushait", "Wadi Ad-Dawasir", "Arar"],
            services: ["All Services", "Tire Rotation", "Tire Inspection", "Alignment Check", "Battery Check"],
            serDef: "Select Service",
            phI: "Ex: 12345", phN: "Ex: John Doe", phM: "Ex: 05xxxxxxxx", phC: "Ex: Toyota Camry 2026", phB: "Ex: 10"
        }
    };

    const curr = isArabic ? t.ar : t.en;

    // تحديث كل عنصر والتأكد من وجوده لتجنب توقف السكربت
    const updateText = (id, text) => { if(document.getElementById(id)) document.getElementById(id).innerText = text; };

    updateText('mainTitle', curr.main);
    updateText('subMainText', curr.subMain);
    updateText('regBtnText', curr.regBtn);
    updateText('regBtnSub', curr.regSmall);
    updateText('execBtnText', curr.execBtn);
    updateText('execBtnSub', curr.execSmall);
    updateText('promoNote', curr.promo);
    updateText('invoiceNote', curr.invNote);
    updateText('cityTitle', curr.cityTitle);
    updateText('btnBackCity', curr.btnBack);
    updateText('regTitle', curr.regTitle);
    updateText('regSubTitle', curr.regSub);
    updateText('lblInvoice', curr.lblInv);
    updateText('lblName', curr.lblName);
    updateText('lblMobile', curr.lblMob);
    updateText('lblCarDetails', curr.lblCar);
    updateText('lblService', curr.lblSer);
    updateText('lblBranch', curr.lblBr);
    updateText('lblProviderReg', curr.provReg);
    updateText('submitBtn', curr.btnSubmit);
    updateText('btnBackReg', curr.btnBack);
    updateText('execTitle', curr.execTitle);
    updateText('lblExecBranch', curr.lblBr);
    updateText('lblProviderExec', curr.provExec);
    updateText('lblExecInvoice', curr.lblInv);
    updateText('execSubmitBtn', curr.btnDone);
    updateText('lblRate', curr.lblRate);
    updateText('finishBtn', curr.btnFinish);
    updateText('btnBackExec', curr.btnBack);
    updateText('thanksTitle', curr.thanks);
    updateText('thanksSub', curr.thanksSub);
    updateText('btnHome', curr.btnHome);

    // تحديث الـ Placeholders
    if(document.getElementById('invPH')) document.getElementById('invPH').placeholder = curr.phI;
    if(document.getElementById('namePH')) document.getElementById('namePH').placeholder = curr.phN;
    if(document.getElementById('mobPH')) document.getElementById('mobPH').placeholder = curr.phM;
    if(document.getElementById('carPH')) document.getElementById('carPH').placeholder = curr.phC;
    if(document.getElementById('brPH')) document.getElementById('brPH').placeholder = curr.phB;
    if(document.getElementById('brExecPH')) document.getElementById('brExecPH').placeholder = curr.phB;
    if(document.getElementById('invExecPH')) document.getElementById('invExecPH').placeholder = curr.phI;

    // إعادة بناء القوائم
    const cityList = document.getElementById('cityList');
    if(cityList) {
        cityList.innerHTML = "";
        curr.cities.forEach(city => {
            const btn = document.createElement('button');
            btn.className = "city-box";
            btn.innerText = city;
            btn.onclick = () => { document.getElementById('hiddenCity').value = city; showPage('regPage'); };
            cityList.appendChild(btn);
        });
    }

    const serSel = document.getElementById('serviceSelect');
    if(serSel) {
        serSel.innerHTML = `<option value="">${curr.serDef}</option>`;
        curr.services.forEach(s => { serSel.innerHTML += `<option value="${s}">${s}</option>`; });
    }
}

function showPage(pageId) {
    document.querySelectorAll('.container').forEach(c => c.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
}

function initStars() {
    const stars = document.querySelectorAll('.stars span');
    stars.forEach(star => {
        star.onclick = function() {
            let val = parseInt(this.dataset.v);
            document.getElementById('ratingValue').value = val;
            stars.forEach(s => { s.classList.toggle('active', parseInt(s.dataset.v) <= val); });
        };
    });
}

document.getElementById('registrationForm').onsubmit = function(e) {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    btn.disabled = true;
    fetch(scriptURL, { method: 'POST', body: new FormData(this) })
    .then(res => res.text())
    .then(data => {
        if(data === "DUPLICATE") { alert(isArabic ? "البيانات المدخله مسجلة مسبقاً" : "Data already registered"); } 
        else { showPage('thanksSection'); }
        btn.disabled = false;
    });
};

document.getElementById('executionForm').onsubmit = function(e) {
    e.preventDefault();
    document.getElementById('execSubmitBtn').classList.add('hidden');
    document.getElementById('ratingSection').classList.remove('hidden');
};

function finishProcess() {
    const formData = new FormData(document.getElementById('executionForm'));
    formData.append('rating', document.getElementById('ratingValue').value);
    fetch(scriptURL, { method: 'POST', body: formData }).then(() => showPage('thanksSection'));
}