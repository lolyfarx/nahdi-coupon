const scriptURL = 'رابط_الـ_EXEC_الخاص_بك'; 
const form = document.getElementById('registrationForm');
let isArabic = true;

document.getElementById('toggleLang').addEventListener('click', function() {
    isArabic = !isArabic;
    this.innerText = isArabic ? 'EN' : 'AR';
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    updateLanguage();
});

function updateLanguage() {
    // العناوين
    document.getElementById('title').innerText = isArabic ? 'كوبون النهدي للاطارات' : 'Alnahdi Tires Coupon';
    document.getElementById('description').innerText = isArabic ? 'استمتع بـ 4 خدمات عند شرائك 4 إطارات!' : 'Enjoy 4 services when buying 4 tires!';
    
    // التسميات (Labels)
    document.getElementById('labelName').innerText = isArabic ? 'الاسم:' : 'Name:';
    document.getElementById('labelCar').innerText = isArabic ? 'نوع السيارة:' : 'Car Type:';
    document.getElementById('labelModel').innerText = isArabic ? 'موديل السيارة (السنة):' : 'Car Model (Year):';
    document.getElementById('labelMobile').innerText = is Arabic ? 'رقم الجوال:' : 'Mobile Number:';
    document.getElementById('labelCity').innerText = isArabic ? 'المدينة:' : 'City:';
    document.getElementById('labelService').innerText = isArabic ? 'الخدمة المطلوبة:' : 'Requested Service:';

    // الحقول (Placeholders)
    document.getElementById('nameInput').placeholder = isArabic ? 'اكتب اسمك (حروف فقط)' : 'Enter your name (Letters only)';
    document.getElementById('carTypeInput').placeholder = isArabic ? 'مثال: تويوتا كامري' : 'Ex: Toyota Camry';
    document.getElementById('carModelInput').placeholder = isArabic ? 'مثال: 2024' : 'Ex: 2024';

    // القوائم المنسدلة (الخيار الافتراضي)
    document.getElementById('cityDefault').innerText = isArabic ? 'اختر المدينة' : 'Select City';
    document.getElementById('serviceDefault').innerText = isArabic ? 'اختر الخدمة' : 'Select Service';

    // الملحوظة والشكر
    document.getElementById('noteText').innerText = isArabic ? 'ملحوظة: يرجى إحضار الفاتورة عند الحضور' : 'Note: Please bring the invoice upon arrival';
    document.getElementById('thanksText').innerText = isArabic ? 'شكراً على ثقتكم بفروع النهدي' : 'Thank you for your trust in Alnahdi branches';
    
    // الزر
    document.getElementById('submitBtn').innerText = isArabic ? 'تقديم' : 'Submit';
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = true;
    submitBtn.innerText = isArabic ? 'جاري الإرسال...' : 'Sending...';

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        alert(isArabic ? 'شكراً لك! تم استلام بياناتك.' : 'Thank you! Data received.');
        form.reset();
        submitBtn.disabled = false;
        submitBtn.innerText = isArabic ? 'تقديم' : 'Submit';
    })
    .catch(error => {
        alert(isArabic ? 'خطأ في الإرسال' : 'Submission Error');
        submitBtn.disabled = false;
        submitBtn.innerText = isArabic ? 'تقديم' : 'Submit';
    });
});