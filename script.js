const scriptURL = 'رابط_الـ_Web_App_الخاص_بك';
const form = document.getElementById('registrationForm');
let isArabic = true;

form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    btn.disabled = true;
    btn.innerText = isArabic ? 'جاري الإرسال...' : 'Sending...';

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(res => {
        alert(isArabic ? 'تم استلام بياناتك بنجاح!' : 'Data submitted successfully!');
        form.reset();
        btn.disabled = false;
        btn.innerText = isArabic ? 'تقديم' : 'Submit';
    })
    .catch(err => {
        console.error(err);
        btn.disabled = false;
    });
});

// دالة تبديل اللغة (يمكنك إضافة بقية الترجمات هنا بنفس الطريقة)
document.getElementById('toggleLang').onclick = () => {
    isArabic = !isArabic;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    document.getElementById('noteText').innerText = isArabic ? 'ملحوظة: يرجى إحضار الفاتورة عند الحضور' : 'Note: Please bring the invoice upon arrival';
    document.getElementById('thanksText').innerText = isArabic ? 'شكراً على ثقتكم بفروع النهدي' : 'Thank you for your trust in Alnahdi branches';
};