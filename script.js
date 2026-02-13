const form = document.getElementById("registrationForm");
const responseMessage = document.getElementById("responseMessage");
const toggleLangBtn = document.getElementById("toggleLang");
const submitBtn = document.getElementById('submitBtn');

// الرابط الخاص بك (تأكد من وضع الرابط الصحيح هنا)
const scriptURL = 'https://script.google.com/macros/s/AKfycbxuh0ETyC5cg9ZXpxB39OY-2eZZdSqE88nOwncZjlwI6r8IhK1b8j5ieb7j_WgN5KX3EQ/exec';

let isArabic = true;

// 1. منطق تبديل اللغة (منفصل)
toggleLangBtn.addEventListener("click", () => {
    if (isArabic) {
        // تحويل إلى الإنجليزية
        document.getElementById("title").textContent = "Alnahdi Coupon";
        document.getElementById("description").textContent = "Enjoy free 4 Services when installing 4 tires!";
        document.getElementById("labelName").textContent = "Name:";
        document.getElementById("labelCar").textContent = "Car Number:";
        document.getElementById("labelMobile").textContent = "Mobile Number:";
        document.getElementById("labelInvoice").textContent = "Invoice Number:";
        document.getElementById("labelCity").textContent = "City:";
        document.getElementById("cityDefault").textContent = "Select City";
        document.getElementById("city1").textContent = "Riyadh";
        document.getElementById("city2").textContent = "Dammam";
        document.getElementById("city3").textContent = "Khamis Mushait";
        document.getElementById("city4").textContent = "Wadi Al-Dawasir";
        document.getElementById("city5").textContent = "Arar";
        document.getElementById("labelService").textContent = "Service:";
        document.getElementById("serviceDefault").textContent = "Select Service";
        document.getElementById("service1").textContent = "Tire Rotation";
        document.getElementById("service2").textContent = "Tire Check";
        document.getElementById("service3").textContent = "Battery Check";
        document.getElementById("service4").textContent = "Alignment Check";
        submitBtn.textContent = "Submit";
        toggleLangBtn.textContent = "AR";
        isArabic = false;
    } else {
        // العودة للعربية
        document.getElementById("title").textContent = "كوبون Alnahdi";
        document.getElementById("description").textContent = "استمتع بخدمة تدوير الإطارات عند تركيب 4 إطارات!";
        document.getElementById("labelName").textContent = "الاسم:";
        document.getElementById("labelCar").textContent = "رقم السيارة:";
        document.getElementById("labelMobile").textContent = "رقم الجوال:";
        document.getElementById("labelInvoice").textContent = "رقم الفاتورة:";
        document.getElementById("labelCity").textContent = "المدينة:";
        document.getElementById("cityDefault").textContent = "اختر المدينة";
        document.getElementById("city1").textContent = "الرياض";
        document.getElementById("city2").textContent = "الدمام";
        document.getElementById("city3").textContent = "خميس مشيط";
        document.getElementById("city4").textContent = "وادي الدواسر";
        document.getElementById("city5").textContent = "عرعر";
        document.getElementById("labelService").textContent = "الخدمة المطلوبة:";
        document.getElementById("serviceDefault").textContent = "اختر الخدمة";
        document.getElementById("service1").textContent = "تدوير";
        document.getElementById("service2").textContent = "فحص إطارات";
        document.getElementById("service3").textContent = "فحص بطارية";
        document.getElementById("service4").textContent = "فحص ميزان";
        submitBtn.textContent = "تقديم";
        toggleLangBtn.textContent = "EN";
        isArabic = true;
    }
});

// 2. منطق إرسال البيانات (يجب أن يكون مستقلاً وخارج قوس تبديل اللغة)
form.addEventListener('submit', e => {
    e.preventDefault();
    
    // تغيير حالة الزر لمنع التكرار
    submitBtn.disabled = true;
    submitBtn.textContent = isArabic ? "جاري الإرسال..." : "Sending...";

    fetch(scriptURL, { 
        method: 'POST', 
        body: new FormData(form)
    })
    .then(response => {
        const successMsg = isArabic ? "تم تسجيل الكوبون بنجاح!" : "Coupon registered successfully!";
        alert(successMsg);
        form.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = isArabic ? "تقديم" : "Submit";
    })
    .catch(error => {
        console.error('Error!', error.message);
        alert(isArabic ? "حدث خطأ في الإرسال" : "Submission Error");
        submitBtn.disabled = false;
        submitBtn.textContent = isArabic ? "تقديم" : "Submit";
    });
});