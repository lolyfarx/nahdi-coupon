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
            invNote: "يجب إحضار أصل أو صورة الفاتورة",
            reg: "التسجيل في الكوبون المجاني", 
            subTitle: "سجل واستمتع بالكوبون!", 
            cityTitle: "أختر مدينة أو الأقرب إليك", 
            note: "ملحوظة : العرض لمدة 3 شهور من تاريخ الفاتورة",
            lblB: "رقم فرع النهدي:", lblI: "رقم الفاتورة:", lblN: "الاسم:", lblC: "نوع وموديل السيارة:", lblM: "رقم الجوال:", 
            lblS: "الخدمة المطلوبة:", serDef: "اختر الخدمة", provReg: "مقدم الكوبون", provExec: "مقدم الخدمة", 
            sub: "تقديم", back: "رجوع", thanks: "شكراً لاختياركم النهدي للإطارات", exec: "تنفيذ الخدمة",
            phI: "مثال: 12345", phN: "مثال: محمد علي", phM: "مثال: 05xxxxxxxx", phC: "مثال: تويوتا كامري 2026", phB: "مثال: 10",
            done: "تم التنفيذ", finish: "إنهاء", rate: "تقييم الخدمة", home: "العودة للرئيسية",
            cities: ["الرياض", "الدمام", "خميس مشيط", "وادي الدواسر", "عرعر"],
            services: ["كل الخدمات", "تدوير اطارات", "فحص اطار", "فحص ميزان", "فحص بطارية"]
        },
        en: { 
            main: "FREE SERVICE COUPON", 
            subMain: "Enjoy 4 free services when buying 4 tires!",
            invNote: "Original or copy of the invoice must be brought",
            reg: "Register for Free Coupon", 
            subTitle: "Register and enjoy the coupon!",
            cityTitle: "Choose a city or nearest one", 
            note: "Note: Offer valid for 3 months from invoice date",
            lblB: "Al-Nahdi Branch No:", lblI: "Invoice Number:", lblN: "Name:", lblC: "Car Type & Model:", lblM: "Mobile Number:", 
            lblS: "Required Service:", serDef: "Select Service", provReg: "Coupon Provider", provExec: "Service Provider", 
            sub: "Submit", back: "Back", thanks: "Thank you for choosing Al-Nahdi", exec: "Service Execution",
            phI: "Ex: 12345", phN: "Ex: John Doe", phM: "Ex: 05xxxxxxxx", phC: "Ex: Toyota Camry 2026", phB: "Ex: 10",
            done: "Done", finish: "Finish", rate: "Service Rating", home: "Back to Home",
            cities: ["Riyadh", "Dammam", "Khamis Mushait", "Wadi Ad-Dawasir", "Arar"],
            services: ["All Services", "Tire Rotation", "Tire Inspection", "Alignment Check", "Battery Check"]
        }
    };

    const curr = isArabic ? t.ar : t.en;

    document.getElementById('mainTitle').innerText = curr.main;
    document.getElementById('subMainText').innerText = curr.subMain;
    document.getElementById('invoiceNote').innerText = curr.invNote;
    document.getElementById('regBtnText').innerText = curr.reg;
    document.getElementById('promoNote').innerText = curr.note;
    document.getElementById('cityTitle').innerText = curr.cityTitle;
    document.getElementById('regTitle').innerText = isArabic ? 'تسجيل البيانات' : 'Register Data';
    document.getElementById('regSubTitle').innerText = curr.subTitle;
    document.getElementById('lblInvoice').innerText = curr.lblI;
    document.getElementById('lblName').innerText = curr.lblN;
    document.getElementById('lblMobile').innerText = curr.lblM;
    document.getElementById('lblCarDetails').innerText = curr.lblC;
    document.getElementById('lblService').innerText = curr.lblS;
    document.getElementById('lblBranch').innerText = curr.lblB;
    document.getElementById('lblProviderReg').innerText = curr.provReg;
    document.getElementById('lblProviderExec').innerText = curr.provExec;
    document.getElementById('execTitle').innerText = curr.exec;
    document.getElementById('submitBtn').innerText = curr.sub;
    document.getElementById('thanksTitle').innerText = curr.thanks;
    document.getElementById('execSubmitBtn').innerText = curr.done;
    document.getElementById('finishBtn').innerText = curr.finish;
    document.getElementById('lblRate').innerText = curr.rate;
    document.getElementById('btnHome').innerText = curr.home;
    document.getElementById('btnBackCity').innerText = curr.back;
    document.getElementById('btnBackReg').innerText = curr.back;
    document.getElementById('btnBackExec').innerText = curr.back;

    document.getElementById('invPH').placeholder = curr.phI;
    document.getElementById('namePH').placeholder = curr.phN;
    document.getElementById('mobPH').placeholder = curr.phM;
    document.getElementById('carPH').placeholder = curr.phC;
    document.getElementById('brPH').placeholder = curr.phB;
    document.getElementById('brExecPH').placeholder = curr.phB;
    document.getElementById('invExecPH').placeholder = curr.phI;

    const cityList = document.getElementById('cityList');
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

    const serSel = document.getElementById('serviceSelect');
    serSel.innerHTML = `<option value="">${curr.serDef}</option>`;
    curr.services.forEach(s => { serSel.innerHTML += `<option value="${s}">${s}</option>`; });
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
};

function finishProcess() {
    const formData = new FormData(document.getElementById('executionForm'));
    formData.append('rating', document.getElementById('ratingValue').value);
    fetch(scriptURL, { method: 'POST', body: formData })
    .then(() => showPage('thanksSection'));
}