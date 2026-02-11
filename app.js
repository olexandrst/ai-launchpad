// ==================== CONFIGURATION ====================

// Main tiles configuration
const mainTilesConfig = {
    'legal-clients': {
        title: 'Клієнтам юридичної служби',
        icon: 'fas fa-users',
        subTiles: [
            { id: 'ai-agent', title: 'Поставити питання ШІ агенту', icon: 'fas fa-robot', desc: 'Отримайте відповідь від ШІ-асистента на юридичні питання', screen: 'aiAgentScreen' },
            { id: 'internal-docs', title: 'Запит по внутрішнім документам', icon: 'fas fa-folder-open', desc: 'Пошук та робота з документами підрозділу', screen: 'internalDocsScreen' },
            { id: 'knowledge-base', title: 'База юридичних знань', icon: 'fas fa-book', desc: 'FAQ та довідкові матеріали з юридичних питань', screen: 'knowledgeBaseScreen' }
        ]
    },
    'lawyer-cabinet': {
        title: 'Кабінет юриста',
        icon: 'fas fa-briefcase',
        subTiles: [
            { id: 'my-tickets', title: 'Мої тікети', icon: 'fas fa-ticket-alt', desc: 'Перегляд та обробка звернень від клієнтів', screen: 'myTicketsScreen' },
            { id: 'dispatcher', title: 'Диспетчер тікетів', icon: 'fas fa-random', desc: 'Автоматична класифікація та розподіл звернень', screen: 'dispatcherScreen' },
            { id: 'data-sources', title: 'Джерела даних', icon: 'fas fa-database', desc: 'Управління джерелами даних для ШІ', screen: 'dataSourcesScreen' }
        ]
    },
    'other-departments': {
        title: 'Інші підрозділи',
        icon: 'fas fa-building',
        subTiles: [
            { id: 'hr-dashboard', title: 'HR та рекрутинг', icon: 'fas fa-users', desc: 'Дашборд з інформацією про персонал', screen: 'hrDashboardScreen' },
            { id: 'finance', title: 'Фінанси', icon: 'fas fa-chart-line', desc: 'Фінансова аналітика та звітність', screen: 'financeScreen' },
            { id: 'procurement', title: 'Закупівлі', icon: 'fas fa-shopping-cart', desc: 'Управління тендерами та постачальниками', screen: 'procurementScreen' }
        ]
    }
};

// AI Answers for suggestions
const aiAnswers = {
    'salary-bank': {
        question: 'Чи може працівник вільно обирати банк для отримання заробітної плати?',
        answer: `
            <p>Відповідно до положень Конституції України, зокрема ст. 19 та ст. 68, правовий порядок ґрунтується на принципі, що ніхто не може бути примушений робити те, що не передбачено законом, а кожен зобов'язаний додержуватись Конституції та законів України і не посягати на права та свободи інших осіб.</p>

            <div class="legal-reference">
                <i class="fas fa-link"></i>
                <a href="https://zakon.rada.gov.ua/laws/show/254к/96-вр" target="_blank">Конституція України</a>
            </div>

            <p>Законом України «Про оплату праці» встановлено, що:</p>
            <ul>
                <li>Згідно ч. 4, 5 ст. 24, заробітна плата виплачується за місцем роботи, але за письмовою згодою працівника — через установи банків, поштові перекази на вказаний працівником рахунок або адресу, з оплатою таких послуг за рахунок роботодавця.</li>
                <li>Відповідно до ч. 1 ст. 25, забороняється будь-яким способом обмежувати працівника у праві вільно розпоряджатися своєю заробітною платою, крім випадків, прямо передбачених законодавством.</li>
                <li>Ст. 22 цього ж Закону забороняє роботодавцю приймати односторонні рішення щодо оплати праці, якщо вони погіршують умови, визначені законом чи колективними договорами.</li>
            </ul>

            <div class="legal-reference">
                <i class="fas fa-link"></i>
                <a href="https://zakon.rada.gov.ua/laws/show/108/95-вр" target="_blank">Закон України «Про оплату праці»</a>
            </div>

            <p>Право працівника самостійно обирати спосіб і форму отримання заробітної плати, включаючи вибір конкретного банку або поштового оператора («Укрпошта»), підтверджено офіційною позицією Державної служби України з питань праці.</p>

            <div class="legal-reference">
                <i class="fas fa-link"></i>
                <a href="https://dsp.gov.ua/" target="_blank">Офіційна позиція Держпраці</a>
            </div>

            <p>Примушування до відкриття рахунку у конкретному банку або укладання договору під примусом може бути визнане недійсним.</p>

            <p>Судова практика (рішення Бабушкінського районного суду м. Дніпра від 07.03.2018 у справі №200/5617/15-ц) також підтвердила, що виплата заробітної плати через банк можлива лише за особистою письмовою згодою працівника, а примус до цього є порушенням його права на оплату праці.</p>

            <div class="legal-reference">
                <i class="fas fa-link"></i>
                <a href="https://reyestr.court.gov.ua/Review/72850892" target="_blank">Рішення суду №200/5617/15-ц</a>
            </div>

            <p>У разі порушення цього права працівник може звернутися зі скаргою до профспілки, комісії з трудових спорів, Державної служби України з питань праці або з позовом до суду.</p>

            <div class="highlight">
                <strong>Відповідальність роботодавця:</strong>
                <ol>
                    <li>Адміністративна відповідальність за ст. 41 КУпАП (штраф від 510 грн до 1700 грн)</li>
                    <li>Ініціювання профспілки щодо розірвання трудового договору з керівником (ст. 45 КЗпП України)</li>
                </ol>
            </div>

            <div class="legal-reference">
                <i class="fas fa-link"></i>
                <a href="https://zakon.rada.gov.ua/laws/show/80731-10" target="_blank">КУпАП</a>
            </div>

            <div class="ai-conclusion">
                <i class="fas fa-gavel"></i>
                <strong>Висновок:</strong> Працівник має повне законне право вільно обирати банківську установу для отримання своєї заробітної плати. Будь-яке примушування роботодавцем до відкриття рахунку у конкретному банку або обмеження у виборі способу отримання зарплати є незаконним і кваліфікується як порушення трудового законодавства.
            </div>
        `
    },
    'credit-card': {
        question: 'Чи має право банк примусово оформити кредитну картку до заробітної плати працівника?',
        answer: `
            <p>Враховуючи наведені нормативно-правові акти, судову практику та офіційні роз'яснення державних органів, слід дійти висновку, що примусове оформлення банком кредитної картки до заробітної плати працівника без його особистої письмової згоди є <strong>незаконним</strong>.</p>

            <p>Відповідно до ст. 21 Кодексу законів про працю України (КЗпП) та ч. 4, 5 ст. 24, ч. 1 ст. 25 Закону України «Про оплату праці», виплата заробітної плати здійснюється за місцем роботи або за письмовою згодою працівника — через установи банків чи поштовими переказами на зазначений рахунок (адресу), причому оплата таких послуг покладається на роботодавця, а не працівника. При цьому прямо забороняється будь-яким способом обмежувати працівника у розпорядженні своєю заробітною платою, крім випадків, передбачених законом.</p>

            <div class="legal-reference">
                <i class="fas fa-link"></i>
                <a href="https://zakon.rada.gov.ua/laws/show/322-08" target="_blank">Кодекс законів про працю України</a>
            </div>

            <div class="legal-reference">
                <i class="fas fa-link"></i>
                <a href="https://zakon.rada.gov.ua/laws/show/108/95-вр" target="_blank">Закон України «Про оплату праці»</a>
            </div>

            <p>Згідно з ч. 4 та ч. 6 ст. 19 Закону України «Про захист прав споживачів», агресивною підприємницькою практикою визнається примус чи неналежний вплив, що обмежує свободу вибору споживача стосовно придбання продукції. Правочини, вчинені з використанням нечесної підприємницької практики, є недійсними.</p>

            <div class="legal-reference">
                <i class="fas fa-link"></i>
                <a href="https://zakon.rada.gov.ua/laws/show/1023-12" target="_blank">Закон України «Про захист прав споживачів»</a>
            </div>

            <p>Працівник у відносинах з банком виступає як споживач фінансових послуг, а отже, нав'язування кредитної картки разом із зарплатною карткою без вільного волевиявлення порушує його права.</p>

            <p>Практика судів підтверджує, що роботодавець має право здійснювати виплату заробітної плати через банк виключно за письмовою згодою працівника:</p>
            <ul>
                <li>Рішення Бабушкінського районного суду м. Дніпра від 07.03.2018 р. у справі №200/5617/15-ц</li>
                <li>Рішення Іллічівського міського суду Одеської області від 20.03.2019 р. у справі №501/3065/18</li>
            </ul>

            <div class="legal-reference">
                <i class="fas fa-link"></i>
                <a href="https://reyestr.court.gov.ua/" target="_blank">Єдиний державний реєстр судових рішень</a>
            </div>

            <p>Крім того, згідно з положеннями Закону України «Про банки і банківську діяльність», послуги з відкриття рахунків та оформлення платіжних карток, у тому числі кредитних, надаються виключно на договірних засадах, за згодою клієнта.</p>

            <div class="legal-reference">
                <i class="fas fa-link"></i>
                <a href="https://zakon.rada.gov.ua/laws/show/2121-14" target="_blank">Закон України «Про банки і банківську діяльність»</a>
            </div>

            <div class="ai-conclusion">
                <i class="fas fa-gavel"></i>
                <strong>Висновок:</strong> Банк не має права примусово оформлювати кредитну картку до заробітної плати працівника без його письмової згоди. Будь-яке нав'язування таких фінансових продуктів без вільного волевиявлення працівника визнається порушенням трудових і споживчих прав, а відповідні правочини можуть бути визнані недійсними.
            </div>
        `
    },
    'bank-control': {
        question: 'Чи має банк право контролювати напрям використання грошових коштів клієнта?',
        answer: `
            <p>Відповідно до положень статті 55 Закону України «Про банки і банківську діяльність», банк <strong>не має права</strong> контролювати напрям використання коштів клієнта, за винятком випадків, прямо передбачених законом або договором між банком і клієнтом.</p>

            <div class="legal-reference">
                <i class="fas fa-link"></i>
                <a href="https://zakon.rada.gov.ua/laws/show/2121-14" target="_blank">Закон України «Про банки і банківську діяльність»</a>
            </div>

            <p>Виключенням є також ситуації, коли контроль здійснюється у межах виконання вимог законодавства щодо запобігання та протидії легалізації (відмиванню) доходів, одержаних злочинним шляхом (ВК), та фінансуванню тероризму (ФТ).</p>

            <p>Згідно зі статтею 1066 Цивільного кодексу України, банк не має права встановлювати для клієнта обмеження у використанні коштів, якщо такі обмеження не передбачені договором або законом.</p>

            <div class="legal-reference">
                <i class="fas fa-link"></i>
                <a href="https://zakon.rada.gov.ua/laws/show/435-15" target="_blank">Цивільний кодекс України</a>
            </div>

            <div class="highlight">
                <strong>Загальне правило:</strong> клієнт самостійно розпоряджається своїми коштами, а банк виконує функцію їхнього збереження та обліку.
            </div>

            <p>Однак, спеціальні норми законодавства у сфері фінансового моніторингу надають банкам право і навіть обов'язок здійснювати перевірку фінансових операцій клієнта з метою виявлення підозрілих транзакцій.</p>

            <p>Зокрема, стаття 15 Закону України про запобігання ВК/ФТ зобов'язує суб'єктів первинного фінансового моніторингу (СПФМ), у тому числі банки, відмовитися від підтримання ділових відносин чи проведення фінансових операцій у разі ненадання клієнтом необхідних документів або у випадках їх підозрілості.</p>

            <div class="legal-reference">
                <i class="fas fa-link"></i>
                <a href="https://zakon.rada.gov.ua/laws/show/361-20" target="_blank">Закон України «Про запобігання та протидію легалізації доходів»</a>
            </div>

            <p><strong>Індикатори підозрілості операцій:</strong></p>
            <ul>
                <li>Постійний нульовий залишок при великих оборотах</li>
                <li>Фінансування діяльності за рахунок допомоги</li>
                <li>Проведення операцій на незвично великі суми</li>
                <li>Відмова клієнта від надання необхідної для перевірки інформації</li>
                <li>Скасування операції після запиту банку про підтвердні документи</li>
            </ul>

            <div class="ai-conclusion">
                <i class="fas fa-gavel"></i>
                <strong>Висновок:</strong>
                <ul>
                    <li>За загальним правилом банк <strong>не контролює</strong> напрям використання коштів клієнта.</li>
                    <li>У спеціально визначених законом випадках (запобігання ВК/ФТ, виконання норм фінансового моніторингу чи договірних положень) банк <strong>має право</strong> здійснювати контроль, збирати і перевіряти інформацію, та навіть відмовляти у проведенні операцій чи обслуговуванні.</li>
                </ul>
                <p>Право банку контролювати напрям використання грошових коштів клієнта існує лише в межах конкретних законодавчих або договірних підстав і не поширюється на звичайні операції, що не мають ознак підозрілості чи ризику.</p>
            </div>
        `
    }
};

// Internal documents results
const internalDocsResults = [
    {
        source: 'Документ PDF "Шаблон Бізнес-вимог"',
        sourceIcon: 'fas fa-file-pdf',
        title: 'Шаблон документа Бізнес-вимог (BRD)',
        excerpt: 'Офіційний шаблон для оформлення документа бізнес-вимог. Містить всі обов\'язкові розділи та приклади заповнення...',
        date: '1 листопада 2025',
        relevance: '99%'
    },
    {
        source: 'Таблиця "Матриця обов\'язкових параметрів"',
        sourceIcon: 'fas fa-table',
        title: 'Матриця обов\'язкових параметрів для BRD',
        excerpt: 'Перелік всіх обов\'язкових полів та параметрів, які повинен містити документ бізнес-вимог для проходження review...',
        date: '15 жовтня 2025',
        relevance: '97%'
    },
    {
        source: 'Папка "Зведені вимоги до оформлення CR"',
        sourceIcon: 'fas fa-folder',
        title: 'Вимоги до оформлення Change Request',
        excerpt: 'Повний набір вимог та стандартів для оформлення запитів на зміни (CR). Включає чек-листи та приклади...',
        date: '5 вересня 2025',
        relevance: '94%'
    }
];

// FAQ Knowledge Base
const faqData = [
    { id: 1, category: 'labor', question: 'Як правильно оформити відпустку працівника?', answer: 'Відпустка оформлюється на підставі заяви працівника, яка подається не пізніше ніж за 2 тижні до початку відпустки...' },
    { id: 2, category: 'labor', question: 'Які документи потрібні для звільнення за власним бажанням?', answer: 'Працівник подає письмову заяву за 2 тижні до дати звільнення. У день звільнення видається трудова книжка та проводиться повний розрахунок...' },
    { id: 3, category: 'labor', question: 'Як нараховується компенсація за невикористану відпустку?', answer: 'Компенсація розраховується виходячи з середньоденної заробітної плати за останні 12 місяців та кількості днів невикористаної відпустки...' },
    { id: 4, category: 'contracts', question: 'Які обов\'язкові реквізити має містити договір?', answer: 'Договір повинен містити: найменування сторін, предмет договору, ціну та порядок розрахунків, строк дії, права та обов\'язки сторін, відповідальність...' },
    { id: 5, category: 'contracts', question: 'Як правильно розірвати договір в односторонньому порядку?', answer: 'Одностороннє розірвання можливе у випадках, передбачених договором або законом. Необхідно надіслати письмове повідомлення іншій стороні...' },
    { id: 6, category: 'corporate', question: 'Як провести загальні збори акціонерів?', answer: 'Загальні збори скликаються за рішенням наглядової ради. Повідомлення про проведення надсилається не пізніше ніж за 30 днів...' },
    { id: 7, category: 'corporate', question: 'Які документи потрібні для реєстрації змін до статуту?', answer: 'Потрібно: протокол загальних зборів, нова редакція статуту, заява державного реєстратора, квитанція про сплату реєстраційного збору...' },
    { id: 8, category: 'compliance', question: 'Як проводити перевірку контрагента перед укладенням договору?', answer: 'Необхідно перевірити: реєстраційні дані в ЄДР, санкційні списки, судові справи, фінансовий стан, репутацію на ринку...' },
    { id: 9, category: 'compliance', question: 'Які ознаки підозрілої фінансової операції?', answer: 'Підозрілими є операції: на незвично великі суми, з контрагентами з ризикових юрисдикцій, без економічного сенсу, з ознаками дроблення...' }
];

// Tickets data
const ticketsData = [
    { id: 'TK-2026-0092', title: 'Питання щодо індексації заробітної плати', from: 'Марія Сидоренко', department: 'Бухгалтерія', status: 'new', priority: 'high', date: '03.02.2026 10:15', category: 'labor' },
    { id: 'TK-2026-0091', title: 'Перевірка контрагента ТОВ "Будсервіс"', from: 'Петро Іваненко', department: 'Закупівлі', status: 'new', priority: 'medium', date: '03.02.2026 09:30', category: 'compliance' },
    { id: 'TK-2026-0090', title: 'Погодження договору оренди приміщення', from: 'Олена Ковальчук', department: 'Адміністрація', status: 'in-progress', priority: 'high', date: '02.02.2026 16:45', category: 'contracts' },
    { id: 'TK-2026-0089', title: 'Консультація щодо звільнення працівника', from: 'Іван Коваленко', department: 'HR', status: 'in-progress', priority: 'urgent', date: '02.02.2026 14:20', category: 'labor' },
    { id: 'TK-2026-0088', title: 'Судовий позов від колишнього працівника', from: 'Наталія Петренко', department: 'HR', status: 'in-progress', priority: 'urgent', date: '02.02.2026 11:00', category: 'court' },
    { id: 'TK-2026-0087', title: 'Питання про виплату лікарняних', from: 'Сергій Мельник', department: 'Виробництво', status: 'waiting', priority: 'medium', date: '01.02.2026 15:30', category: 'labor' },
    { id: 'TK-2026-0086', title: 'Реєстрація змін до статуту', from: 'Директор', department: 'Керівництво', status: 'resolved', priority: 'high', date: '01.02.2026 10:00', category: 'corporate' },
    { id: 'TK-2026-0085', title: 'Перевірка ліцензії постачальника', from: 'Андрій Шевченко', department: 'Закупівлі', status: 'resolved', priority: 'low', date: '31.01.2026 14:15', category: 'compliance' }
];

// Dispatcher categories
const dispatcherCategories = [
    { id: 'compliance', name: 'Комплаєнс-перевірки', icon: 'fas fa-shield-alt', color: '#22c55e', count: 3 },
    { id: 'court', name: 'Судові справи', icon: 'fas fa-gavel', color: '#ef4444', count: 2 },
    { id: 'labor', name: 'Трудові відносини', icon: 'fas fa-users', color: '#6366f1', count: 5 },
    { id: 'contracts', name: 'Договірна робота', icon: 'fas fa-file-contract', color: '#f59e0b', count: 4 }
];

// Data sources
const dataSources = {
    internal: [
        { id: 1, name: 'SharePoint "Правові документи"', url: '//sharepoint/legal', status: 'active', lastSync: '03.02.2026 08:00' },
        { id: 2, name: 'База ITSM', url: '//itsm.company.ua', status: 'active', lastSync: '03.02.2026 07:45' },
        { id: 3, name: 'Insight Knowledge Base', url: '//insight.company.ua', status: 'active', lastSync: '03.02.2026 07:30' },
        { id: 4, name: 'Архів договорів', url: '//sharepoint/contracts', status: 'active', lastSync: '02.02.2026 23:00' }
    ],
    external: [
        { id: 5, name: 'Єдиний державний реєстр', url: 'https://usr.minjust.gov.ua', status: 'active', lastSync: '03.02.2026 06:00' },
        { id: 6, name: 'Реєстр судових рішень', url: 'https://reyestr.court.gov.ua', status: 'active', lastSync: '03.02.2026 05:00' },
        { id: 7, name: 'Санкційні списки РНБО', url: 'https://sanctions.nsdc.gov.ua', status: 'active', lastSync: '03.02.2026 04:00' },
        { id: 8, name: 'Закони України', url: 'https://zakon.rada.gov.ua', status: 'active', lastSync: '03.02.2026 03:00' }
    ]
};

// ==================== STATE ====================
let currentMainTile = null;
let currentSubTile = null;
let currentTicket = null;
let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

// ==================== DOM ELEMENTS ====================
const loadingOverlay = document.getElementById('loadingOverlay');

// ==================== UTILITY FUNCTIONS ====================
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function showLoading() {
    loadingOverlay.classList.add('active');
}

function hideLoading() {
    loadingOverlay.classList.remove('active');
}

// ==================== MAIN TILES ====================
document.querySelectorAll('.main-tile').forEach(tile => {
    tile.addEventListener('click', (e) => {
        if (e.target.closest('.tile-favorite')) return;
        openMainTile(tile.dataset.tile);
    });
});

function openMainTile(tileId) {
    currentMainTile = tileId;
    const config = mainTilesConfig[tileId];

    document.getElementById('subTilesTitle').innerHTML = `<i class="${config.icon}"></i> ${config.title}`;

    const subTilesGrid = document.getElementById('subTilesGrid');
    subTilesGrid.innerHTML = '';

    config.subTiles.forEach((subTile, index) => {
        const tileEl = document.createElement('div');
        tileEl.className = 'tile sub-tile';
        tileEl.dataset.subtile = subTile.id;
        tileEl.innerHTML = `
            <div class="tile-icon" style="background: ${getSubTileGradient(index)};">
                <i class="${subTile.icon}"></i>
            </div>
            <h3>${subTile.title}</h3>
            <p>${subTile.desc}</p>
        `;
        tileEl.addEventListener('click', () => openSubTile(subTile));
        subTilesGrid.appendChild(tileEl);
    });

    showScreen('subTilesScreen');
}

function getSubTileGradient(index) {
    const gradients = [
        'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
        'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)'
    ];
    return gradients[index % gradients.length];
}

function openSubTile(subTile) {
    currentSubTile = subTile.id;

    // Initialize specific screen if needed
    switch(subTile.id) {
        case 'knowledge-base':
            renderFAQ();
            break;
        case 'my-tickets':
            renderTickets();
            break;
        case 'dispatcher':
            renderDispatcherCategories();
            break;
        case 'data-sources':
            renderDataSources();
            break;
    }

    showScreen(subTile.screen);
}

// Back buttons
document.getElementById('subTilesBackBtn')?.addEventListener('click', () => showScreen('homeScreen'));
document.getElementById('aiAgentBackBtn')?.addEventListener('click', () => openMainTile(currentMainTile));
document.getElementById('internalDocsBackBtn')?.addEventListener('click', () => openMainTile(currentMainTile));
document.getElementById('knowledgeBaseBackBtn')?.addEventListener('click', () => openMainTile(currentMainTile));
document.getElementById('myTicketsBackBtn')?.addEventListener('click', () => openMainTile(currentMainTile));
document.getElementById('ticketDetailBackBtn')?.addEventListener('click', () => {
    renderTickets();
    showScreen('myTicketsScreen');
});
document.getElementById('dispatcherBackBtn')?.addEventListener('click', () => openMainTile(currentMainTile));
document.getElementById('dataSourcesBackBtn')?.addEventListener('click', () => openMainTile(currentMainTile));
document.getElementById('hrDashboardBackBtn')?.addEventListener('click', () => openMainTile(currentMainTile));
document.getElementById('financeBackBtn')?.addEventListener('click', () => openMainTile(currentMainTile));
document.getElementById('procurementBackBtn')?.addEventListener('click', () => openMainTile(currentMainTile));
document.getElementById('docBackBtn')?.addEventListener('click', () => showScreen('internalDocsScreen'));

// ==================== AI AGENT (1.1) ====================
document.querySelectorAll('.suggestion-item').forEach(item => {
    item.addEventListener('click', () => {
        const suggestionId = item.dataset.suggestion;
        showAIAnswer(suggestionId);
    });
});

document.getElementById('aiSearchBtn')?.addEventListener('click', () => {
    const query = document.getElementById('aiSearchInput').value.trim();
    if (query) {
        // For demo, show first answer
        showLoading();
        setTimeout(() => {
            hideLoading();
            showAIAnswer('salary-bank');
        }, 1500);
    }
});

document.getElementById('aiSearchInput')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.getElementById('aiSearchBtn').click();
    }
});

document.getElementById('newQuestionBtn')?.addEventListener('click', () => {
    document.getElementById('aiAnswerContainer').style.display = 'none';
    document.getElementById('aiSearchInput').value = '';
    document.getElementById('aiSearchInput').focus();
});

function showAIAnswer(suggestionId) {
    const answer = aiAnswers[suggestionId];
    if (!answer) return;

    showLoading();

    setTimeout(() => {
        hideLoading();

        document.getElementById('aiSearchInput').value = answer.question;
        document.getElementById('aiTimestamp').textContent = new Date().toLocaleString('uk-UA');
        document.getElementById('aiAnswerContent').innerHTML = answer.answer;
        document.getElementById('aiAnswerContainer').style.display = 'block';

        // Scroll to answer
        document.getElementById('aiAnswerContainer').scrollIntoView({ behavior: 'smooth' });
    }, 1500);
}

// ==================== INTERNAL DOCS (1.2) ====================
document.getElementById('docsSearchBtn')?.addEventListener('click', () => {
    performDocsSearch();
});

document.getElementById('docsSearchInput')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') performDocsSearch();
});

document.getElementById('docsExampleLink')?.addEventListener('click', () => {
    document.getElementById('docsSearchInput').value = 'Які вимоги до документу з Бізнес-вимогами';
    performDocsSearch();
});

function performDocsSearch() {
    const query = document.getElementById('docsSearchInput').value.trim();
    if (!query) return;

    showLoading();

    setTimeout(() => {
        hideLoading();
        renderDocsResults(internalDocsResults);
    }, 1000);
}

function renderDocsResults(results) {
    const container = document.getElementById('docsResultsContainer');
    container.innerHTML = '';

    results.forEach((result, index) => {
        const card = document.createElement('div');
        card.className = 'result-card';
        card.innerHTML = `
            <div class="result-source">
                <i class="${result.sourceIcon}"></i>
                ${result.source}
            </div>
            <h4 class="result-title">${result.title}</h4>
            <p class="result-excerpt">${result.excerpt}</p>
            <div class="result-meta">
                <span><i class="fas fa-calendar"></i> ${result.date}</span>
                <span><i class="fas fa-percentage"></i> Релевантність: ${result.relevance}</span>
            </div>
            <div class="feedback-buttons">
                <button class="feedback-btn like" title="Корисно"><i class="fas fa-thumbs-up"></i></button>
                <button class="feedback-btn dislike" title="Не корисно"><i class="fas fa-thumbs-down"></i></button>
            </div>
        `;
        container.appendChild(card);
    });

    document.getElementById('docsResultsCount').textContent = `Знайдено: ${results.length}`;
    document.getElementById('docsSearchResults').style.display = 'block';
}

// ==================== KNOWLEDGE BASE (1.3) ====================
function renderFAQ(category = 'all') {
    const container = document.getElementById('faqList');
    container.innerHTML = '';

    const filtered = category === 'all' ? faqData : faqData.filter(f => f.category === category);

    filtered.forEach(faq => {
        const item = document.createElement('div');
        item.className = 'faq-item';
        item.innerHTML = `
            <div class="faq-question">
                <span>${faq.question}</span>
                <i class="fas fa-chevron-down"></i>
            </div>
            <div class="faq-answer">
                <p>${faq.answer}</p>
            </div>
        `;

        item.querySelector('.faq-question').addEventListener('click', () => {
            item.classList.toggle('active');
        });

        container.appendChild(item);
    });
}

document.querySelectorAll('.faq-category').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.faq-category').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderFAQ(btn.dataset.category);
    });
});

// ==================== MY TICKETS (2.1) ====================
function renderTickets(filter = 'all') {
    const container = document.getElementById('myTicketsList');
    container.innerHTML = '';

    const filtered = filter === 'all' ? ticketsData : ticketsData.filter(t => t.status === filter);

    filtered.forEach(ticket => {
        const item = document.createElement('div');
        item.className = 'ticket-list-item';
        item.innerHTML = `
            <div class="ticket-priority ${ticket.priority}"></div>
            <div class="ticket-main">
                <div class="ticket-header">
                    <span class="ticket-id">${ticket.id}</span>
                    <span class="ticket-status-badge ${ticket.status}">${getStatusText(ticket.status)}</span>
                </div>
                <h4 class="ticket-title">${ticket.title}</h4>
                <div class="ticket-meta">
                    <span><i class="fas fa-user"></i> ${ticket.from}</span>
                    <span><i class="fas fa-building"></i> ${ticket.department}</span>
                    <span><i class="fas fa-clock"></i> ${ticket.date}</span>
                </div>
            </div>
            <div class="ticket-arrow">
                <i class="fas fa-chevron-right"></i>
            </div>
        `;

        item.addEventListener('click', () => openTicketDetail(ticket));
        container.appendChild(item);
    });
}

function getStatusText(status) {
    const statuses = {
        'new': 'Новий',
        'in-progress': 'В роботі',
        'waiting': 'Очікує',
        'resolved': 'Вирішено'
    };
    return statuses[status] || status;
}

function openTicketDetail(ticket) {
    currentTicket = ticket;

    document.getElementById('ticketDetailHeader').innerHTML = `
        <div class="ticket-detail-id">
            <span class="ticket-id">${ticket.id}</span>
            <span class="ticket-status-badge ${ticket.status}">${getStatusText(ticket.status)}</span>
            <span class="ticket-priority-badge ${ticket.priority}">${getPriorityText(ticket.priority)}</span>
        </div>
        <h2>${ticket.title}</h2>
    `;

    document.getElementById('ticketDetailBody').innerHTML = `
        <div class="ticket-message">
            <div class="message-header">
                <div class="message-author">
                    <div class="author-avatar">
                        <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(ticket.from)}&background=6366f1&color=fff&size=40" alt="${ticket.from}">
                    </div>
                    <div class="author-info">
                        <span class="author-name">${ticket.from}</span>
                        <span class="author-dept">${ticket.department}</span>
                    </div>
                </div>
                <span class="message-date">${ticket.date}</span>
            </div>
            <div class="message-content">
                <p>Доброго дня!</p>
                <p>Звертаюся з питанням щодо "${ticket.title.toLowerCase()}". Прошу надати консультацію або направити до відповідного спеціаліста.</p>
                <p>Дякую за допомогу!</p>
            </div>
        </div>
    `;

    document.getElementById('ticketDetailSidebar').innerHTML = `
        <div class="sidebar-section">
            <h4>Інформація</h4>
            <div class="sidebar-item">
                <span class="sidebar-label">Категорія</span>
                <span class="sidebar-value">${getCategoryName(ticket.category)}</span>
            </div>
            <div class="sidebar-item">
                <span class="sidebar-label">Пріоритет</span>
                <span class="sidebar-value">${getPriorityText(ticket.priority)}</span>
            </div>
            <div class="sidebar-item">
                <span class="sidebar-label">Створено</span>
                <span class="sidebar-value">${ticket.date}</span>
            </div>
            <div class="sidebar-item">
                <span class="sidebar-label">Виконавець</span>
                <span class="sidebar-value">Олена Петренко</span>
            </div>
        </div>
        <div class="sidebar-section">
            <h4>ШІ-аналіз</h4>
            <div class="ai-analysis">
                <p><i class="fas fa-robot"></i> Категорію визначено автоматично з точністю <strong>98%</strong></p>
                <p><i class="fas fa-lightbulb"></i> Рекомендовані джерела: База знань, КЗпП</p>
            </div>
        </div>
    `;

    showScreen('ticketDetailScreen');
}

function getPriorityText(priority) {
    const priorities = { 'low': 'Низький', 'medium': 'Середній', 'high': 'Високий', 'urgent': 'Терміновий' };
    return priorities[priority] || priority;
}

function getCategoryName(category) {
    const categories = { 'labor': 'Трудові відносини', 'compliance': 'Комплаєнс', 'contracts': 'Договори', 'court': 'Судові справи', 'corporate': 'Корпоративне' };
    return categories[category] || category;
}

document.getElementById('ticketStatusFilter')?.addEventListener('change', (e) => {
    renderTickets(e.target.value);
});

document.getElementById('sendReplyBtn')?.addEventListener('click', () => {
    const reply = document.getElementById('ticketReplyInput').value.trim();
    if (reply) {
        showLoading();
        setTimeout(() => {
            hideLoading();
            document.getElementById('ticketReplyInput').value = '';
            alert('Відповідь надіслано!');
        }, 1000);
    }
});

// ==================== DISPATCHER (2.2) ====================
function renderDispatcherCategories() {
    const container = document.getElementById('dispatcherCategories');
    container.innerHTML = '';

    dispatcherCategories.forEach(cat => {
        const tickets = ticketsData.filter(t => t.category === cat.id);

        const card = document.createElement('div');
        card.className = 'dispatcher-category-card';
        card.innerHTML = `
            <div class="category-header" style="border-left-color: ${cat.color};">
                <div class="category-icon" style="background: ${cat.color};">
                    <i class="${cat.icon}"></i>
                </div>
                <div class="category-info">
                    <h3>${cat.name}</h3>
                    <span class="category-count">${tickets.length} тікетів</span>
                </div>
            </div>
            <div class="category-tickets">
                ${tickets.slice(0, 3).map(t => `
                    <div class="mini-ticket">
                        <span class="mini-ticket-id">${t.id}</span>
                        <span class="mini-ticket-title">${t.title}</span>
                        <span class="ticket-status-badge ${t.status}">${getStatusText(t.status)}</span>
                    </div>
                `).join('')}
            </div>
            <div class="category-footer">
                <span class="ai-badge"><i class="fas fa-robot"></i> Класифіковано ШІ</span>
            </div>
        `;

        container.appendChild(card);
    });
}

// ==================== DATA SOURCES (2.3) ====================
function renderDataSources() {
    renderSourcesList('internalSourcesList', dataSources.internal);
    renderSourcesList('externalSourcesList', dataSources.external);
}

function renderSourcesList(containerId, sources) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    sources.forEach(source => {
        const item = document.createElement('div');
        item.className = 'source-item';
        item.innerHTML = `
            <div class="source-icon">
                <i class="fas fa-database"></i>
            </div>
            <div class="source-info">
                <h4>${source.name}</h4>
                <span class="source-url">${source.url}</span>
                <span class="source-sync"><i class="fas fa-sync"></i> Оновлено: ${source.lastSync}</span>
            </div>
            <div class="source-status ${source.status}">
                <i class="fas fa-check-circle"></i>
            </div>
            <div class="source-actions">
                <button class="source-action-btn" title="Налаштування"><i class="fas fa-cog"></i></button>
                <button class="source-action-btn delete" title="Видалити"><i class="fas fa-trash"></i></button>
            </div>
        `;
        container.appendChild(item);
    });
}

// Modal for adding source
document.getElementById('addSourceBtn')?.addEventListener('click', () => {
    document.getElementById('addSourceModal').classList.add('active');
});

document.getElementById('closeAddSourceModal')?.addEventListener('click', () => {
    document.getElementById('addSourceModal').classList.remove('active');
});

document.getElementById('cancelAddSource')?.addEventListener('click', () => {
    document.getElementById('addSourceModal').classList.remove('active');
});

document.getElementById('confirmAddSource')?.addEventListener('click', () => {
    const name = document.getElementById('sourceNameInput').value;
    const type = document.getElementById('sourceTypeSelect').value;
    const url = document.getElementById('sourceUrlInput').value;

    if (name && url) {
        const newSource = { id: Date.now(), name, url, status: 'active', lastSync: 'Щойно додано' };
        dataSources[type === 'internal' ? 'internal' : 'external'].push(newSource);
        renderDataSources();
        document.getElementById('addSourceModal').classList.remove('active');
        document.getElementById('sourceNameInput').value = '';
        document.getElementById('sourceUrlInput').value = '';
    }
});

// ==================== FAVORITES ====================
function initFavorites() {
    document.querySelectorAll('.tile-favorite').forEach(btn => {
        const tileId = btn.dataset.favorite;
        if (favorites.includes(tileId)) {
            btn.classList.add('active');
            btn.querySelector('i').classList.remove('far');
            btn.querySelector('i').classList.add('fas');
        }
    });
}

document.querySelectorAll('.tile-favorite').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const tileId = btn.dataset.favorite;
        const index = favorites.indexOf(tileId);

        if (index > -1) {
            favorites.splice(index, 1);
            btn.classList.remove('active');
            btn.querySelector('i').classList.remove('fas');
            btn.querySelector('i').classList.add('far');
        } else {
            favorites.push(tileId);
            btn.classList.add('active');
            btn.querySelector('i').classList.remove('far');
            btn.querySelector('i').classList.add('fas');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
    });
});

function renderFavorites() {
    const grid = document.getElementById('favoritesGrid');
    const empty = document.getElementById('emptyFavorites');
    grid.innerHTML = '';

    if (favorites.length === 0) {
        grid.style.display = 'none';
        empty.style.display = 'block';
    } else {
        grid.style.display = 'grid';
        empty.style.display = 'none';

        favorites.forEach(tileId => {
            const config = mainTilesConfig[tileId];
            if (!config) return;

            const tile = document.createElement('div');
            tile.className = 'tile';
            tile.innerHTML = `
                <div class="tile-icon tile-icon-large">
                    <i class="${config.icon}"></i>
                </div>
                <h3>${config.title}</h3>
            `;
            tile.addEventListener('click', () => openMainTile(tileId));
            grid.appendChild(tile);
        });
    }
}

document.getElementById('goToHomeBtn')?.addEventListener('click', () => {
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.querySelector('.nav-link[data-nav="home"]').classList.add('active');
    showScreen('homeScreen');
});

// ==================== NAVIGATION ====================
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        const nav = link.dataset.nav;
        if (nav === 'home') {
            showScreen('homeScreen');
        } else if (nav === 'history') {
            showScreen('historyScreen');
        } else if (nav === 'favorites') {
            renderFavorites();
            showScreen('favoritesScreen');
        }
    });
});

document.getElementById('logoLink')?.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.querySelector('.nav-link[data-nav="home"]').classList.add('active');
    showScreen('homeScreen');
});

// ==================== DROPDOWNS ====================
const notificationsBtn = document.getElementById('notificationsBtn');
const notificationsDropdown = document.getElementById('notificationsDropdown');
const userProfile = document.getElementById('userProfile');
const profileDropdown = document.getElementById('profileDropdown');

notificationsBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    notificationsDropdown.classList.toggle('active');
    profileDropdown?.classList.remove('active');
});

userProfile?.addEventListener('click', (e) => {
    e.stopPropagation();
    profileDropdown.classList.toggle('active');
    notificationsDropdown?.classList.remove('active');
});

document.addEventListener('click', () => {
    notificationsDropdown?.classList.remove('active');
    profileDropdown?.classList.remove('active');
});

// Profile menu
document.querySelectorAll('.profile-menu-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const action = item.dataset.action;
        profileDropdown.classList.remove('active');

        if (action === 'my-profile' || action === 'settings') {
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            showScreen('profileScreen');
            if (action === 'settings') {
                activateProfileSection('preferences');
            }
        } else if (action === 'logout') {
            if (confirm('Ви впевнені, що хочете вийти?')) {
                location.reload();
            }
        }
    });
});

// Profile nav
function activateProfileSection(sectionId) {
    document.querySelectorAll('.profile-nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.section === sectionId) item.classList.add('active');
    });

    document.getElementById('personalSection').style.display = sectionId === 'personal' ? 'block' : 'none';
    document.getElementById('securitySection').style.display = sectionId === 'security' ? 'block' : 'none';
    document.getElementById('preferencesSection').style.display = sectionId === 'preferences' ? 'block' : 'none';
}

document.querySelectorAll('.profile-nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        activateProfileSection(item.dataset.section);
    });
});

// Theme
document.querySelectorAll('.theme-option').forEach(option => {
    option.addEventListener('click', () => {
        document.querySelectorAll('.theme-option').forEach(o => o.classList.remove('active'));
        option.classList.add('active');

        const theme = option.querySelector('input').value;
        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
        localStorage.setItem('theme', theme);
    });
});

// ==================== CHAT WIDGET ====================
const chatToggle = document.getElementById('chatToggle');
const chatWindow = document.getElementById('chatWindow');
const chatClose = document.getElementById('chatClose');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');
const chatMessages = document.getElementById('chatMessages');

chatToggle?.addEventListener('click', () => chatWindow.classList.toggle('active'));
chatClose?.addEventListener('click', () => chatWindow.classList.remove('active'));

function addChatMessage(text, isUser = false) {
    const message = document.createElement('div');
    message.className = `message ${isUser ? 'user' : 'bot'}`;
    message.innerHTML = `
        <div class="message-avatar"><i class="fas fa-${isUser ? 'user' : 'robot'}"></i></div>
        <div class="message-content">${text}</div>
    `;
    chatMessages.appendChild(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendChatMessage() {
    const text = chatInput.value.trim();
    if (!text) return;

    addChatMessage(text, true);
    chatInput.value = '';

    setTimeout(() => {
        addChatMessage('Дякую за запитання! Рекомендую скористатися розділом "Поставити питання ШІ агенту" для отримання детальної відповіді.');
    }, 1000);
}

chatSend?.addEventListener('click', sendChatMessage);
chatInput?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendChatMessage();
});

// ==================== FEEDBACK BUTTONS ====================
document.addEventListener('click', (e) => {
    if (e.target.closest('.feedback-btn')) {
        const btn = e.target.closest('.feedback-btn');
        const parent = btn.closest('.feedback-buttons') || btn.closest('.ai-answer-footer');
        parent.querySelectorAll('.feedback-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    }
});

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
    initFavorites();

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        document.querySelectorAll('.theme-option').forEach(o => {
            o.classList.remove('active');
            if (o.querySelector('input').value === 'dark') {
                o.classList.add('active');
                o.querySelector('input').checked = true;
            }
        });
    }
});
