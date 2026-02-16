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
            // الصفحة الأولى
            main: "كوبون الخدمة المجاني", 
            subMain: "استمتع بـ 4 خدمات مجانية عند شراء 4 إطارات!",
            regBtn: "التسجيل في الكوبون المجاني",
            regSmall: "(التسجيل لأول مرة)",
            execBtn: "اضغط لتنفيذ الخدمة المجانية",
            execSmall: "(عند طلب الخدمة بالفرع)",
            promo: "ملحوظة : العرض لمدة 3 شهور من تاريخ الفاتورة",
            invNote: "يجب إحضار أصل أو صورة الفاتورة",
            
            // صفحة المدن
            cityTitle: "أختر مدينة أو الأقرب إليك",
            
            // صفحة التسجيل
            regTitle: "تسجيل البيانات",
            regSub: "سجل واستمتع بالكوبون!",
            lblInv: "رقم الفاتورة:",
            lblName: "الاسم:",
            lblMob: "رقم الجوال:",
            lblCar: "نوع وموديل السيارة:",
            lblSer: "الخدمة المطلوبة:",
            lblBr: "رقم فرع النهدي:",
            provReg: "مقدم الكوبون",
            
            // صفحة تنفيذ الخدمة (مهمة جداً)
            execTitle: "تنفيذ الخدمة",
            provExec: "مقدم الخدمة",
            lblRate: "تقييم الخدمة",
            btnDone: "تم التنفيذ",
            btnFinish: "إنهاء",
            
            // عام
            btnBack: "رجوع",
            btnSubmit: "تقديم",
            thanks: "شكراً لاختياركم النهدي للإطارات",
            thanksSub: "نسعد بخدمتكم",
            btnHome: "العودة للرئيسية",
            
            // خدمات ومدن
            cities: ["الرياض", "الدمام", "خميس مشيط", "وادي الدواسر", "عرعر"],
            services: ["كل الخدمات", "تدوير اطارات", "فحص اطار", "فحص ميزان", "فحص بطارية"],
            serDef: "اختر الخدمة",
            
            // Placeholders
            phI: "مثال: 12345", phN: "مثال: محمد علي", phM: "مثال: 05xxxxxxxx", phC: "مثال: تويوتا كامري 2026", phB: "مثال: 10"
        },
        en: { 
            // Home Page
            main: "FREE SERVICE COUPON", 
            subMain: "Enjoy 4 free services when buying 4 tires!",
            regBtn: "Register for Free Coupon",
            regSmall: "(First time registration)",
            execBtn: "Click to execute free service",
            execSmall: "(When requesting at the branch)",
            promo: "Note: Offer valid for 3 months from invoice date",
            invNote: "Original or copy of the invoice must be brought",
            
            // Cities Page
            cityTitle: "Choose a city or nearest one",
            
            // Registration Page
            regTitle: "Register Data",
            regSub: "Register and enjoy the coupon!",
            lblInv: "Invoice Number:",
            lblName: "Name:",
            lblMob: "Mobile Number:",
            lblCar: "Car Type & Model:",
            lblSer: "Required Service:",
            lblBr: "Al-Nahdi Branch No:",
            provReg: "Coupon Provider",
            
            // Execution Page (Important)
            execTitle: "Service Execution",
            provExec: "Service Provider",
            lblRate: "Service Rating",
            btnDone: "Done",
            btnFinish: "Finish",
            
            // General
            btnBack: "Back",
            btnSubmit: "Submit",
            thanks: "Thank you for choosing Al-Nahdi Tires",
            thanksSub: "We are happy to serve you",
            btnHome: "Back to Home",
            
            // Services & Cities
            cities: ["Riyadh", "Dammam", "Khamis Mushait", "Wadi Ad-Dawasir", "Arar"],
            services: ["All Services", "Tire Rotation", "Tire Inspection", "Alignment Check", "Battery Check"],
            serDef: "Select Service",
            
            // Placeholders
            phI: "Ex: 12345", phN: "Ex: John Doe", phM: "Ex: 05xxxxxxxx", phC: "Ex: Toyota Camry 2026", phB: "Ex: 10"
        }
    };

    const curr = isArabic ? t.ar : t.en;

    // --- تحديث الصفحة الأولى بالكامل (بما فيها النصوص الصغيرة) ---
    document.getElementById('mainTitle').innerText = curr.main;
    document.getElementById('subMainText').innerText = curr.subMain;
    document.getElementById('regBtnText').innerText = curr.regBtn;
    document.getElementById('regBtnSub').innerText = curr.regSmall; // النص الصغير 1
    document.getElementById('execBtnText').innerText = curr.execBtn;
    document.getElementById('execBtnSub').innerText = curr.execSmall; // النص الصغير 2
    document.getElementById('promoNote').innerText = curr.promo;
    document.getElementById('invoiceNote').innerText = curr.invNote;

    // --- تحديث صفحة المدن ---
    document.getElementById('cityTitle').innerText = curr.cityTitle;
    document.getElementById('btnBackCity').innerText = curr.btnBack;

    // --- تحديث صفحة التسجيل ---
    document.getElementById('regTitle').innerText = curr.regTitle;
    document.getElementById('regSubTitle').innerText = curr.regSub;
    document.getElementById('lblInvoice').innerText = curr.lblInv;
    document.getElementById('lblName').innerText = curr.lblName;
    document.getElementById('lblMobile').innerText = curr.lblMob;
    document.getElementById('lblCarDetails').innerText = curr.lblCar;
    document.getElementById('lblService').innerText = curr.lblSer;
    document.getElementById('lblBranch').innerText = curr.lblBr;
    document.getElementById('lblProviderReg').innerText = curr.provReg;
    document.getElementById('submitBtn').innerText = curr.btnSubmit;
    document.getElementById('btnBackReg').innerText = curr.btnBack;

    // --- تحديث صفحة التنفيذ (بما فيها النصوص الصغيرة) ---
    document.getElementById('execTitle').innerText = curr.execTitle;
    document.getElementById('lblExecBranch').innerText = curr.lblBr;
    document.getElementById('lblProviderExec').innerText = curr.provExec; // النص الصغير (مقدم الخدمة)
    document.getElementById('lblExecInvoice').innerText = curr.lblInv;
    document.getElementById('execSubmitBtn').innerText = curr.btnDone;
    document.getElementById('lblRate').innerText = curr.lblRate;
    document.getElementById('finishBtn').innerText = curr.btnFinish;
    document.getElementById('btnBackExec').innerText = curr.btnBack;

    // --- تحديث صفحة الشكر ---
    document.getElementById('thanksTitle').innerText = curr.thanks;
    document.getElementById('thanksSub').innerText = curr.thanksSub;
    document.getElementById('btnHome').innerText = curr.btnHome;

    // --- تحديث الـ Placeholders ---
    document.getElementById('invPH').placeholder = curr.phI;
    document.getElementById('namePH').placeholder = curr.phN;
    document.getElementById('mobPH').placeholder = curr.phM;
    document.getElementById('carPH').placeholder = curr.phC;
    document.getElementById('brPH').placeholder = curr.phB;
    document.getElementById('brExecPH').placeholder = curr.phB;
    document.getElementById('invExecPH').placeholder = curr.phI;

    // --- إعادة بناء قائمة المدن والخدمات ---
    const cityList = document.getElementById('cityList');
    cityList.innerHTML = "";
    curr.cities.forEach(city => {
        const btn = document.createElement('button');
        btn.className = "city-box";
        btn.innerText = city;
        btn.onclick = () => { document.getElementById('hiddenCity').value = city; showPage('regPage'); };
        cityList.appendChild(btn);
    });

    const serSel = document.getElementById('serviceSelect');
    serSel.innerHTML = `<option value="">${curr.serDef}</option>`;
    curr.services.forEach(s => { serSel.innerHTML += `<option value="${s}">${s}</option>`; });
}

// الدوال المساعدة (showPage, initStars, etc.) تظل كما هي في كودك الأساسي