const scriptURL = 'https://script.google.com/macros/s/AKfycbyIPZFHd4ynL9gk5hfgzW_MqDo89Xc64FwyGuywciZOGV_R8kgp9OxIo-IVLTU6aa4qaw/exec'; 
const form = document.getElementById('registrationForm');
let isArabic = true;

document.getElementById('toggleLang').addEventListener('click', function() {
    isArabic = !isArabic;
    this.innerText = isArabic ? 'EN' : 'AR';
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    updateLanguage();
});

function updateLanguage() {
    document.getElementById('title').innerText = isArabic ? 'كوبون النهدي للاطارات' : 'Alnahdi Tires Coupon';
    document.getElementById('description').innerText = isArabic ? 'استمتع بـ 4 خدمات عند شرائك 4 إطارات!' : 'Enjoy 4 services when buying 4 tires!';
    document.getElementById('submitBtn').innerText = isArabic ? 'تقديم' : 'Submit';
    // أضف بقية الترجمات للحقول هنا..
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
        alert('خطأ في الإرسال، تأكد من اتصال الإنترنت');
        submitBtn.disabled = false;
        submitBtn.innerText = isArabic ? 'تقديم' : 'Submit';
    });
});