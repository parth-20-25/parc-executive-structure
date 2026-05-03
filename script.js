
// =============================================
// PEOPLE DATA — edit names, titles, details here
// =============================================
const people = {
'bharat-gite': {
initials: 'BG', name: 'Mr. Bharat Gite', pos: 'Director', level: 'L1 · Board of Directors',
dept: 'Board of Directors', div: 'Governance', reports: '— (Top Governance)',
auth: 'L1 — Strategic Ownership',
email: 'bharat.gite@parc.in',
desc: 'Strategic ownership and governance authority across all divisions of PARC Organization.',
resp: 'Strategic decision-making, capital allocation oversight, organizational policy ratification, board governance, shareholder representation.'
},
'prashant-patil': {
initials: 'PP', name: 'Mr. Prashant Patil', pos: 'Director', level: 'L1 · Board of Directors',
dept: 'Board of Directors', div: 'Governance', reports: '— (Top Governance)',
auth: 'L1 — Strategic Ownership',
email: 'prashant.patil@parc.in',
desc: 'Strategic ownership and governance authority across all divisions of PARC Organization.',
resp: 'Board oversight, strategic direction, governance compliance, organizational policy, board committee leadership.'
},
'nitin-kakade': {
initials: 'NK', name: 'Mr. Nitin Kakade', pos: 'Director', level: 'L1 · Board of Directors',
dept: 'Board of Directors', div: 'Governance', reports: '— (Top Governance)',
auth: 'L1 — Strategic Ownership',
email: 'nitin.kakade@parc.in',
desc: 'Strategic ownership and governance authority across all divisions of PARC Organization.',
resp: 'Operational oversight, strategy ratification, business performance review, governance and compliance direction.'
},
'ceo': {
initials: 'CEO', name: 'Prashant Patil', pos: 'Chief Executive Officer / Chief Operating Officer',
level: 'L2 · Executive Leadership',
dept: 'Executive Office', div: 'All Divisions', reports: 'Board of Directors',
auth: 'L2 — Full Operational Authority',
email: 'ceo@parc.in',
desc: 'The central operational head responsible for total company execution, cross-divisional leadership, and P&L accountability.',
resp: 'Company-wide operational leadership, P&L ownership, strategic execution, team building, CEO-Board interface, division performance accountability, organizational culture, external representation.'
},
'gm-eng': {
initials: 'GM', name: '[Name]', pos: 'General Manager — Engineering Division',
level: 'L3 · Strategic Functional Head',
dept: 'Engineering Division', div: 'Engineering', reports: 'CEO / COO',
auth: 'L3 — Division Authority',
email: 'gm.engineering@parc.in',
desc: 'Strategic head of the Engineering Division, overseeing Design, Control, R&D, and ERP departments.',
resp: 'Engineering strategy, resource allocation across engineering departments, technical direction, department head accountability, R&D roadmap, ERP governance.'
},
'gm-ops': {
initials: 'GM', name: '[Name]', pos: 'General Manager — Operations Division',
level: 'L3 · Strategic Functional Head',
dept: 'Operations Division', div: 'Operations', reports: 'CEO / COO',
auth: 'L3 — Division Authority',
email: 'gm.operations@parc.in',
desc: 'Strategic head of the Operations Division, overseeing Project Management, Projects, Purchase, Service, and Manufacturing.',
resp: 'Operational efficiency, project delivery oversight, supply chain leadership, manufacturing performance, service standards, OTD targets.'
},
'gm-comm': {
initials: 'GM', name: '[Name]', pos: 'General Manager — Commercial Division',
level: 'L3 · Strategic Functional Head',
dept: 'Commercial Division', div: 'Commercial', reports: 'CEO / COO',
auth: 'L3 — Division Authority',
email: 'gm.commercial@parc.in',
desc: 'Strategic head of the Commercial Division, overseeing Marketing and Accounts & Finance.',
resp: 'Revenue strategy, business development, marketing leadership, financial reporting oversight, budget ownership, commercial P&L.'
},
'head-qa': {
initials: 'QA', name: '[Name]', pos: 'Division Head — Quality Assurance',
level: 'L3 · Strategic Functional Head',
dept: 'Quality Assurance', div: 'Quality', reports: 'CEO / COO',
auth: 'L3 — Division Authority',
email: 'head.qa@parc.in',
desc: 'Organization-wide quality authority ensuring standards, compliance, and continuous improvement across all divisions.',
resp: 'QMS ownership, quality standards definition, inspection protocols, audit management, ISO/regulatory compliance, quality culture.'
},
'head-hr': {
initials: 'HR', name: '[Name]', pos: 'Division Head — HR & Administration',
level: 'L3 · Strategic Functional Head',
dept: 'HR & Administration', div: 'People', reports: 'CEO / COO',
auth: 'L3 — Division Authority',
email: 'head.hr@parc.in',
desc: 'People strategy and administration leadership across the full organization.',
resp: 'Talent acquisition, HR policy, employee relations, performance management systems, payroll, compliance, administration oversight.'
},
'head-design': {
initials: 'DE', name: '[Name]', pos: 'Head — Design Department',
level: 'L4 · Department Head',
dept: 'Design', div: 'Engineering Division', reports: 'GM – Engineering',
auth: 'L4 — Department Authority',
email: 'head.design@parc.in',
desc: 'Department head responsible for all design engineering functions.',
resp: 'Product/system design ownership, drawing management, design reviews, CAD standards, design team leadership.'
},
'head-control': {
initials: 'CO', name: '[Name]', pos: 'Head — Control Department',
level: 'L4 · Department Head',
dept: 'Control', div: 'Engineering Division', reports: 'GM – Engineering',
auth: 'L4 — Department Authority',
email: 'head.control@parc.in',
desc: 'Department head responsible for control systems and automation engineering.',
resp: 'Control system design, automation projects, PLC/SCADA ownership, control engineering team management.'
},
'head-rd': {
initials: 'RD', name: '[Name]', pos: 'Head — R&D Department',
level: 'L4 · Department Head',
dept: 'R&D', div: 'Engineering Division', reports: 'GM – Engineering',
auth: 'L4 — Department Authority',
email: 'head.rd@parc.in',
desc: 'Department head driving research, innovation, and new product/technology development.',
resp: 'Innovation roadmap, prototype development, technology scouting, IP management, R&D team leadership.'
},
'head-erp': {
initials: 'ER', name: '[Name]', pos: 'Head — ERP Department',
level: 'L4 · Department Head',
dept: 'ERP', div: 'Engineering Division', reports: 'GM – Engineering',
auth: 'L4 — Department Authority',
email: 'head.erp@parc.in',
desc: 'Department head responsible for ERP systems governance and digital process infrastructure.',
resp: 'ERP implementation, system governance, data integrity, cross-department ERP support, process digitization.'
},
'head-pm': {
initials: 'PM', name: '[Name]', pos: 'Head — Project Management',
level: 'L4 · Department Head',
dept: 'Project Management', div: 'Operations Division', reports: 'GM – Operations',
auth: 'L4 — Department Authority',
email: 'head.pm@parc.in',
desc: 'Department head owning project management frameworks, scheduling, and cross-project coordination.',
resp: 'PMO governance, project scheduling, resource planning, risk management, project dashboards, PM standards.'
},
'head-proj': {
initials: 'PJ', name: '[Name]', pos: 'Head — Projects',
level: 'L4 · Department Head',
dept: 'Projects', div: 'Operations Division', reports: 'GM – Operations',
auth: 'L4 — Department Authority',
email: 'head.projects@parc.in',
desc: 'Department head responsible for direct project delivery and execution.',
resp: 'Project execution, client delivery, site coordination, project performance, milestone management.'
},
'head-purch': {
initials: 'PU', name: '[Name]', pos: 'Head — Purchase',
level: 'L4 · Department Head',
dept: 'Purchase', div: 'Operations Division', reports: 'GM – Operations',
auth: 'L4 — Department Authority',
email: 'head.purchase@parc.in',
desc: 'Department head managing procurement, supplier relationships, and purchasing processes.',
resp: 'Vendor management, procurement strategy, cost optimization, purchase order governance, supply chain oversight.'
},
'head-svc': {
initials: 'SV', name: '[Name]', pos: 'Head — Service',
level: 'L4 · Department Head',
dept: 'Service', div: 'Operations Division', reports: 'GM – Operations',
auth: 'L4 — Department Authority',
email: 'head.service@parc.in',
desc: 'Department head responsible for after-sales service delivery and client support.',
resp: 'Service delivery, client satisfaction, AMC management, field service team leadership, service SLA.'
},
'head-mfg': {
initials: 'MF', name: '[Name]', pos: 'Head — Manufacturing / Production',
level: 'L4 · Department Head',
dept: 'Manufacturing', div: 'Operations Division', reports: 'GM – Operations',
auth: 'L4 — Department Authority',
email: 'head.manufacturing@parc.in',
desc: 'Department head responsible for all production and manufacturing operations.',
resp: 'Production planning, capacity management, OEE, manufacturing cost, shop floor operations, team management.'
},
'head-mkt': {
initials: 'MK', name: '[Name]', pos: 'Head — Marketing',
level: 'L4 · Department Head',
dept: 'Marketing', div: 'Commercial Division', reports: 'GM – Commercial',
auth: 'L4 — Department Authority',
email: 'head.marketing@parc.in',
desc: 'Department head responsible for brand, marketing communications, and market development.',
resp: 'Brand strategy, digital marketing, trade shows, lead generation, market intelligence, marketing team management.'
},
'head-acc': {
initials: 'AF', name: '[Name]', pos: 'Head — Accounts & Finance',
level: 'L4 · Department Head',
dept: 'Accounts & Finance', div: 'Commercial Division', reports: 'GM – Commercial',
auth: 'L4 — Department Authority',
email: 'head.finance@parc.in',
desc: 'Department head responsible for financial accounting, reporting, and compliance.',
resp: 'Financial reporting, statutory compliance, taxation, accounts receivable/payable, audit management, cost controls.'
},
'head-quality': {
initials: 'QC', name: '[Name]', pos: 'Head — Quality Department',
level: 'L4 · Department Head',
dept: 'Quality', div: 'Quality Division', reports: 'Head – Quality Assurance',
auth: 'L4 — Department Authority',
email: 'head.quality@parc.in',
desc: 'Department head managing day-to-day quality operations, inspection, and quality records.',
resp: 'Incoming/in-process/outgoing inspection, NCR management, CAPA, quality records, testing lab management.'
},
'head-hrd': {
initials: 'HR', name: '[Name]', pos: 'Head — Human Resources',
level: 'L4 · Department Head',
dept: 'Human Resources', div: 'People Division', reports: 'Head – HR & Administration',
auth: 'L4 — Department Authority',
email: 'head.hrm@parc.in',
desc: 'Department head managing HR operations, talent management, and employee lifecycle.',
resp: 'Recruitment, onboarding, payroll processing, training & development, statutory HR compliance, HRIS management.'
},
'sr-mgr': {
initials: 'SM', name: '[Name]', pos: 'Senior Manager — Engineering',
level: 'L5 · Management Layer',
dept: 'Engineering', div: 'Engineering Division', reports: 'Head – Design / Control',
auth: 'L5 — Department Management',
email: 'sr.manager.eng@parc.in',
desc: 'Senior management execution and team ownership within engineering departments.',
resp: 'Project execution management, team performance, technical reviews, cross-team coordination, KPI tracking.'
},
'mgr-eng': {
initials: 'MG', name: '[Name]', pos: 'Manager — Engineering',
level: 'L5 · Management Layer',
dept: 'Engineering', div: 'Engineering Division', reports: 'Senior Manager / Dept. Head',
auth: 'L5 — Team Management',
email: 'manager.eng@parc.in',
desc: 'Mid-level management owning team execution and engineering deliverables.',
resp: 'Team output management, task allocation, review processes, reporting, stakeholder coordination.'
},
'asst-mgr-eng': {
initials: 'AM', name: '[Name]', pos: 'Assistant Manager — Engineering',
level: 'L5 · Management Layer',
dept: 'Engineering', div: 'Engineering Division', reports: 'Manager',
auth: 'L5 — Supervisory',
email: 'asst.manager@parc.in',
desc: 'Supporting management execution and driving team-level accountability.',
resp: 'Work monitoring, team coordination, documentation, escalation management, daily tracking.'
},
'sr-mgr-ops': {
initials: 'SO', name: '[Name]', pos: 'Senior Manager — Operations',
level: 'L5 · Management Layer',
dept: 'Operations', div: 'Operations Division', reports: 'Head – Operations Dept.',
auth: 'L5 — Department Management',
email: 'sr.manager.ops@parc.in',
desc: 'Senior management execution across operations functions.',
resp: 'Operational delivery oversight, team performance, SLA management, cross-functional coordination.'
},
};

function getInitials(name) {
    if (!name || name === '[Name]' || name === '[Executive Name]') {
        return '?';
    }

    return name
        .split(' ')
        .map(word => word[0])
        .filter(Boolean)
        .slice(0, 2)
        .join('');
}

/* =========================================
   TOOLTIP
========================================= */

function showTooltip(event, id) {
    const person = people[id];
    if (!person) return;

    const tooltip = document.getElementById('tooltip');

    document.getElementById('tt-avatar').textContent = person.initials || getInitials(person.name);
    document.getElementById('tt-name').textContent = person.name;
    document.getElementById('tt-pos').textContent = person.pos;
    document.getElementById('tt-dept').textContent = person.dept;
    document.getElementById('tt-level').textContent = person.level;
    document.getElementById('tt-reports').textContent = person.reports;

    tooltip.style.display = 'block';
    positionTooltip(event);
}

function positionTooltip(event) {
    const tooltip = document.getElementById('tooltip');
    if (!tooltip) return;

    let x = event.clientX + 16;
    let y = event.clientY - 10;

    const tooltipWidth = 280;
    const tooltipHeight = 220;

    if (x + tooltipWidth > window.innerWidth) {
        x = event.clientX - tooltipWidth - 20;
    }

    if (y + tooltipHeight > window.innerHeight) {
        y = window.innerHeight - tooltipHeight - 20;
    }

    if (y < 20) {
        y = 20;
    }

    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${y}px`;
}

function hideTooltip() {
    const tooltip = document.getElementById('tooltip');
    if (tooltip) {
        tooltip.style.display = 'none';
    }
}

document.addEventListener('mousemove', function (event) {
    const tooltip = document.getElementById('tooltip');

    if (tooltip && tooltip.style.display === 'block') {
        positionTooltip(event);
    }
});

/* =========================================
   MODAL
========================================= */

function openModal(id) {
    const person = people[id];
    if (!person) return;

    document.getElementById('m-avatar').textContent =
        person.initials || getInitials(person.name);

    document.getElementById('m-name').textContent = person.name;
    document.getElementById('m-pos').textContent = person.pos;
    document.getElementById('m-level').textContent = person.level;
    document.getElementById('m-dept').textContent = person.dept;
    document.getElementById('m-div').textContent = person.div;
    document.getElementById('m-reports').textContent = person.reports;
    document.getElementById('m-auth').textContent = person.auth;
    document.getElementById('m-email').textContent = person.email;
    document.getElementById('m-desc').textContent = person.desc;
    document.getElementById('m-resp').textContent = person.resp;

    const emailBtn = document.getElementById('m-email-btn');
    if (emailBtn) {
        emailBtn.onclick = () => {
            window.location.href = `mailto:${person.email}`;
        };
    }

    const modal = document.getElementById('modal-overlay');
    modal.classList.add('active');

    document.body.style.overflow = 'hidden';
}

function closeModal(event) {
    const modal = document.getElementById('modal-overlay');

    if (
        !event ||
        event.target === modal ||
        event.target.classList.contains('modal-close')
    ) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

/* =========================================
   GLOBAL EVENTS
========================================= */

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
        hideTooltip();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal-overlay');

    if (modal) {
        modal.addEventListener('click', closeModal);
    }
});