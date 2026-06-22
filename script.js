// متغير لتخزين اسم المتقدم عبر الصفحات المختلفة للمنصة
let savedClientName = "";

/**
 * 1. دالة معالجة تسجيل الدخول والانتقال السلس لصفحة الوظائف
 */
function handleLogin(event) {
    event.preventDefault(); // منع المتصفح من إعادة تحميل الصفحة عند الضغط على الزر

    // حفظ الاسم المدخل في المتغير لاستدعائه في الصفحة الأخيرة
    savedClientName = document.getElementById('username').value;

    // إخفاء واجهة تسجيل الدخول والظهور الفوري لقسم الوظائف الجامعية المتاحة
    document.getElementById('login-section').classList.add('hidden');
    document.getElementById('jobs-section').classList.remove('hidden');
}

/**
 * 2. دالة الضغط على وظيفة معينة: فتح صفحة الشهادات وعرض اسم العميل
 */
function openApplication(jobName) {
    // إخفاء واجهة الوظائف وفتح واجهة المتطلبات الإضافية
    document.getElementById('jobs-section').classList.add('hidden');
    document.getElementById('application-section').classList.remove('hidden');

    // تخصيص مسمى الوظيفة ديناميكياً داخل العنوان الرئيسي للتقديم
    document.getElementById('job-title-display').innerText = "التقديم على وظيفة: " + jobName;

    // إدراج اسم العميل (المستخدم) تلقائياً في حقل الاسم وجعله للقراءة فقط
    document.getElementById('display-client-name').value = savedClientName;
}

/**
 * 3. العودة من قسم الوظائف إلى شاشة تعديل الحساب أو البيانات الشخصية
 */
function goToLogin() {
    document.getElementById('jobs-section').classList.add('hidden');
    document.getElementById('login-section').classList.remove('hidden');
}

/**
 * 4. تتيح للمستخدم التراجع والعودة لفرص الوظائف الجامعية الأخرى
 */
function backToJobs() {
    document.getElementById('application-section').classList.add('hidden');
    document.getElementById('jobs-section').classList.remove('hidden');
}

/**
 * 5. دالة معالجة النموذج النهائي للتأكد من اختيار الشهادات وإرسال الطلب
 */
function submitFinalApplication() {
    const degreeSelection = document.getElementById('university-degree').value;
    const experienceSelection = document.getElementById('experience-certificate').value;

    // التحقق من أن المستخدم اختار بالفعل الشهادة والخبرة من القوائم
    if (degreeSelection === "" || experienceSelection === "") {
        alert("الرجاء استكمال اختيار الشهادة الجامعية وشهادة الخبرة للمتابعة.");
        return;
    }

    // إشعار نجاح تفاعلي ومخصص باسم العميل ومؤهلاته
    alert(`تهانينا يا ${savedClientName}! تم إرسال طلبك الوظيفي بنجاح مضافاً إليه ملف (الشهادة الجامعية: ${degreeSelection}) و (${experienceSelection}).`);
    
    // إعادة تهيئة وتحديث التطبيق لبدء جلسة جديدة
    location.reload();
}

