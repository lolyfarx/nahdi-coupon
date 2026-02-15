const scriptURL = 'https://script.google.com/macros/s/AKfycbzk_cGchf7s9jQ8NiXm-2b5emvvfAnRKGnYqGPGMA5rC3Rssdek21R1x2hdOmOsmHTdcg/exec';
let isArabic = true;

document.getElementById('toggleLang').addEventListener('click', function() {
    isArabic = !isArabic;
    this.innerText = isArabic ? 'En' : 'العربية';
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    updateTranslations();
});

function updateTranslations() {
    const t = {
        ar: { 
            main: "كوبون الخدمة المجاني", reg: "التسجيل في الكوبون المجاني", subTitle: "سجل واستمتع بالكوبون!", 
            cityTitle: "أختر مدينتك أو الأقرب إليك", cityDef: "اختر المدينة", note: "ملحوظة : العرض لمدة 3 شهور من تاريخ الفاتورة",
            lblB: "رقم فرع النهدي:", lblI: "رقم الفاتورة:", lblN: "الاسم:", lblC: "نوع وموديل السيارة:", lblM: "رقم الجوال:", 
            lblS: "الخدمة المطلوبة:", serDef: "اختر الخدمة", provReg: "مقدم الكوبون", provExec: "مقدم الخدمة", 
            sub: "تقديم", back: "رجوع", thanks: "شكراً لاختياركم النهدي للإطارات", exec: "تنفيذ الخدمة",
            phI: "مثال: 12345", phN: "مثال: محمد علي", phM: "مثال: 05xxxxxxxx", phC: "مثال: تويوتا كامري 2026", phB: "مثال: 10",
            cities: ["الرياض", "الدمام", "خميس مشيط", "وادي الدواسر", "عرعر"],
            services: ["ترصيص", "نيتروجين", "تبديل أماكن", "فحص ميزان"]
        },
        en: { 
            main: "FREE SERVICE COUPON", reg: "Register for Free Coupon", subTitle: "Register and enjoy the coupon!", 
            cityTitle: "Choose your city or nearest one", cityDef: "Select City", note: "Note: Offer valid for 3 months from invoice date",
            lblB: "Al-Nahdi Branch No:", lblI: "Invoice Number:", lblN: "Name:", lblC: "Car Type & Model:", lblM: "Mobile Number:", 
            lblS: "Required Service:", serDef: "Select Service", provReg: "Coupon Provider", provExec: "Service Provider", 
            sub: "Submit", back: "Back", thanks: "Thank you for choosing Al-Nahdi", exec: "Service Execution",
            phI: "Ex: 12345", phN: "Ex: John Doe", phM: "Ex: 05xxxxxxxx", phC: "Ex: Toyota Camry 2026", phB: "Ex: 10",
            cities: ["Riyadh", "Dammam", "Khamis Mushait", "Wadi Ad-Dawasir", "Arar"],
            services: ["Balancing", "Nitrogen", "Tire Rotation", "Alignment Check"]
        }
    };

    const curr = isArabic ? t.ar : t.en;
    document.getElementById('mainTitle').innerText = curr.main;
    document.getElementById('regBtnText').innerText = curr.reg;
    document.getElementById('promoNote').innerText = curr.note;
    document.getElementById('cityTitle').innerText = curr.cityTitle;
    document.getElementById('cityDefault').innerText = curr.cityDef;
    document.getElementById('regTitle').innerText = isArabic ? 'تسجيل البيانات' : 'Register Data';
    document.getElementById('regSubTitle').innerText = curr.subTitle;
    document.getElementById('lblInvoice').innerText = curr.lblI;
    document.getElementById('lblName').innerText = curr.lblN;
    document.getElementById('lblMobile').innerText = curr.lblM;
    document.getElementById('lblCarDetails').innerText = curr.lblC;
    document.getElementById('lblService').innerText = curr.lblS;
    document.getElementById('serDefault').innerText = curr.serDef;
    document.getElementById('lblBranch').innerText = curr.lblB;
    document.getElementById('lblProviderReg').innerText = curr.provReg;
    document.getElementById('lblProviderExec').innerText = curr.provExec;
    document.getElementById('execTitle').innerText = curr.exec;
    document.getElementById('submitBtn').innerText = curr.sub;
    document.getElementById('thanksTitle').innerText = curr.thanks;

    document.getElementById('invPH').placeholder = curr.phI;
    document.getElementById('namePH').placeholder = curr.phN;
    document.getElementById('mobPH').placeholder = curr.phM;
    document.getElementById('carPH').placeholder = curr.phC;
    document.getElementById('brPH').placeholder = curr.phB;
    document.getElementById('brExecPH').placeholder = curr.phB;
    document.getElementById('invExecPH').placeholder = curr.phI;

    updateSelect('mainCitySelect', curr.cities, curr.cityDef);
    updateSelect('serviceSelect', curr.services, curr.serDef);
}

function updateSelect(id, list, defaultText) {
    const sel = document.getElementById(id);
    sel.innerHTML = `<option value="">${defaultText}</option>`;
    list.forEach(item => { sel.innerHTML += `<option value="${item}">${item}</option>`; });
}

function showPage(pageId) {
    document.querySelectorAll('.container').forEach(c => c.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
}

function goToRegistration(city) {
    if (!city) return;
    document.getElementById('hiddenCity').value = city;
    showPage('regPage');
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