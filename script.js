const scriptURL = 'https://script.google.com/macros/s/AKfycbz2lOpsqZvZ4AOj9WHuOqrH7LkoL1lobZMDzlhEYgmmNVY-XZ0Sh1_sAyRhEv7821LIVQ/exec'; 
const form = document.getElementById('registrationForm');
let isArabic = true;

document.getElementById('toggleLang').addEventListener('click', function() {
    isArabic = !isArabic;
    this.innerText = isArabic ? 'En' : 'العربية'; 
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    updateLanguage();
});

function updateLanguage() {
    document.getElementById('title').innerText = isArabic ? 'كوبون الخدمة المجاني' : 'FREE SERVICE COUPON';
    document.getElementById('description').innerText = isArabic ? 'استمتع بـ 4 خدمات عند شرائك 4 إطارات!' : 'Enjoy 4 services when buying 4 tires!';
    
    // إضافة ترجمة الحقل الجديد
    document.getElementById('labelBranch').innerText = isArabic ? 'فرع النهدي رقم:' : 'Al-Nahdi Branch No:';
    document.getElementById('branchInput').placeholder = isArabic ? 'اكتب رقم الفرع' : 'Enter Branch Number';

    document.getElementById('labelName').innerText = isArabic ? 'الاسم:' : 'Name:';
    document.getElementById('labelCar').innerText = isArabic ? 'نوع السيارة:' : 'Car Type:';
    document.getElementById('labelModel').innerText = isArabic ? 'موديل السيارة (السنة):' : 'Car Model (Year):';
    document.getElementById('labelMobile').innerText = isArabic ? 'رقم الجوال:' : 'Mobile Number:';
    document.getElementById('labelCity').innerText = isArabic ? 'المدينة:' : 'City:';
    document.getElementById('labelService').innerText = isArabic ? 'الخدمة المطلوبة:' : 'Requested Service:';

    document.getElementById('nameInput').placeholder = isArabic ? 'اكتب اسمك' : 'Enter your name';
    document.getElementById('carTypeInput').placeholder = isArabic ? 'مثال: تويوتا كامري' : 'Ex: Toyota Camry';
    document.getElementById('carModelInput').placeholder = isArabic ? '2026' : '2026';
    document.getElementById('mobileInput').placeholder = isArabic ? '0550000000' : '0550000000';

    document.getElementById('cityDefault').innerText = isArabic ? 'اختر المدينة' : 'Select City';
    document.getElementById('city1').innerText = isArabic ? 'الرياض' : 'Riyadh';
    document.getElementById('city2').innerText = isArabic ? 'الدمام' : 'Dammam';
    document.getElementById('city3').innerText = isArabic ? 'خميس مشيط' : 'Khamis Mushait';
    document.getElementById('city4').innerText = isArabic ? 'وادي الدواسر' : 'Wadi Ad-Dawasir';
    document.getElementById('city5').innerText = isArabic ? 'عرعر' : 'Arar';

    document.getElementById('serviceDefault').innerText = isArabic ? 'اختر الخدمة' : 'Select Service';
    document.getElementById('optAll').innerText = isArabic ? 'الكل (جميع الخدمات)' : 'All (All Services)';
    document.getElementById('optRotate').innerText = isArabic ? 'تدوير' : 'Rotation';
    document.getElementById('optCheckTires').innerText = isArabic ? 'فحص إطارات' : 'Tire Check';
    document.getElementById('optCheckBattery').innerText = isArabic ? 'فحص بطارية' : 'Battery Check';
    document.getElementById('optCheckBalance').innerText = isArabic ? 'فحص ميزان' : 'Alignment Check';

    document.getElementById('noteText').innerText = isArabic ? 'ملحوظة: يرجى إحضار الفاتورة عند الحضور' : 'Note: Please bring the invoice upon arrival';
    document.getElementById('thanksText').innerText = isArabic ? 'شكراً على ثقتكم بفروع النهدي' : 'Thank you for your trust in Alnahdi';
    document.getElementById('footerCompany').innerText = isArabic ? 'شركة ياسر يسلم النهدي التجارية' : 'Yasser Yaslam Alnahdi Trading Co.';
    document.getElementById('submitBtn').innerText = isArabic ? 'تقديم' : 'Submit';
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = true;
    submitBtn.innerText = isArabic ? 'جاري الإرسال...' : 'Sending...';

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        alert(isArabic ? 'تم استلام بياناتك بنجاح!' : 'Data received successfully!');
        form.reset();
        submitBtn.disabled = false;
        submitBtn.innerText = isArabic ? 'تقديم' : 'Submit';
    })
    .catch(error => {
        alert(isArabic ? 'حدث خطأ في الإرسال' : 'Error in submission');
        submitBtn.disabled = false;
        submitBtn.innerText = isArabic ? 'تقديم' : 'Submit';
    });
});