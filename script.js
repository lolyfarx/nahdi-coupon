const scriptURL = 'رابط_الـ_EXEC_الخاص_بك'; 
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
    
    // التسميات والمدن والخدمات (نفس الكود السابق مع التأكد من مطابقة الـ IDs)
    document.getElementById('labelName').innerText = isArabic ? 'الاسم:' : 'Name:';
    document.getElementById('labelCar').innerText = isArabic ? 'نوع السيارة:' : 'Car Type:';
    document.getElementById('labelModel').innerText = isArabic ? 'موديل السيارة (السنة):' : 'Car Model (Year):';
    document.getElementById('labelMobile').innerText = isArabic ? 'رقم الجوال:' : 'Mobile Number:';
    document.getElementById('labelCity').innerText = isArabic ? 'المدينة:' : 'City:';
    document.getElementById('labelService').innerText = isArabic ? 'الخدمة المطلوبة:' : 'Service:';

    document.getElementById('city1').innerText = isArabic ? 'الرياض' : 'Riyadh';
    document.getElementById('city2').innerText = isArabic ? 'الدمام' : 'Dammam';
    document.getElementById('city3').innerText = isArabic ? 'خميس مشيط' : 'Khamis Mushait';
    document.getElementById('city4').innerText = isArabic ? 'وادي الدواسر' : 'Wadi Ad-Dawasir';
    document.getElementById('city5').innerText = isArabic ? 'عرعر' : 'Arar';

    document.getElementById('submitBtn').innerText = isArabic ? 'تقديم' : 'Submit';
    document.getElementById('footerCompany').innerText = isArabic ? 'شركة ياسر يسلم النهدي التجارية' : 'Yasser Yaslam Alnahdi Trading Co.';
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
        alert('Error!');
        submitBtn.disabled = false;
    });
});