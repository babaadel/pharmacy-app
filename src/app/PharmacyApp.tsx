"use client";
import { useState, useEffect, useCallback } from "react";
import { saveToFirestore, loadFromFirestore, subscribeToFirestore } from "../lib/useFirestore";

const ADMIN_CREDENTIALS = { username: "admin", password: "pharmacy123" };

const INITIAL_MEDICINES = [
  { id: 1, name: "Paracétamol 500mg", nameFr: "Paracétamol 500mg", category: "مسكنات", quantity: 150, minQuantity: 20, buyPrice: 500, sellPrice: 1000, company: "شركة الدواء الذهبي", expiry: "2026-12-01" },
  { id: 2, name: "Amoxicilline 250mg", nameFr: "Amoxicilline 250mg", category: "مضادات حيوية", quantity: 80, minQuantity: 15, buyPrice: 1500, sellPrice: 2800, company: "فارما بلس", expiry: "2026-08-15" },
  { id: 3, name: "Oméprazole 20mg", nameFr: "Oméprazole 20mg", category: "معدة", quantity: 5, minQuantity: 10, buyPrice: 1200, sellPrice: 2200, company: "شركة الدواء الذهبي", expiry: "2027-03-20" },
  { id: 4, name: "Vitamine C 1000mg", nameFr: "Vitamine C 1000mg", category: "فيتامينات", quantity: 200, minQuantity: 30, buyPrice: 800, sellPrice: 1500, company: "نيوتري كير", expiry: "2027-06-01" },
];
const INITIAL_DEBTS = [];
const INITIAL_PURCHASES = [];
const INITIAL_SALES = [];


const genId = () => Date.now() + Math.random();
const today = () => new Date().toISOString().split("T")[0];

function loadData(key, fallback) {
  try { const r = localStorage.getItem(key); return r ? JSON.parse(r) : fallback; } catch { return fallback; }
}
function saveData(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
}

// Check expiry notifications
function checkExpiryNotifications(medicines) {
  if (!("Notification" in window)) return;
  const soon = new Date();
  soon.setDate(soon.getDate() + 30);
  medicines.forEach(m => {
    if (!m.expiry) return;
    const exp = new Date(m.expiry);
    if (exp <= soon && exp >= new Date()) {
      const days = Math.ceil((exp - new Date()) / (1000 * 60 * 60 * 24));
      if (Notification.permission === "granted") {
        new Notification("⚠️ تنبيه انتهاء صلاحية", {
          body: `${m.name} ينتهي خلال ${days} يوم!`,
          icon: "/pharmacy-app/icon-192.png"
        });
      }
    }
  });
}

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --bg: #0a0e1a; --surface: #111827; --surface2: #1a2236; --border: #1e2d45;
    --accent: #00d4ff; --accent2: #7c3aed; --accent3: #10b981;
    --danger: #ef4444; --warning: #f59e0b; --text: #e2e8f0; --text2: #94a3b8;
  }
  body { font-family: 'Cairo', sans-serif; background: var(--bg); color: var(--text); direction: rtl; min-height: 100vh; }
  .app { display: flex; flex-direction: column; min-height: 100vh; }

  .login-wrap { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: radial-gradient(ellipse at 60% 40%, #0d1f3c 0%, #0a0e1a 70%); padding: 1rem; }
  .login-card { background: var(--surface); border: 1px solid var(--border); border-radius: 20px; padding: 2.5rem; width: 100%; max-width: 420px; box-shadow: 0 0 60px rgba(0,212,255,0.12); }
  .login-logo { text-align: center; margin-bottom: 2rem; }
  .login-logo .icon { font-size: 3.5rem; display: block; margin-bottom: 0.5rem; }
  .login-logo h1 { font-size: 1.6rem; font-weight: 900; color: var(--accent); }
  .login-logo p { color: var(--text2); font-size: 0.9rem; }
  .form-group { margin-bottom: 1.2rem; }
  .form-group label { display: block; margin-bottom: 0.4rem; font-size: 0.9rem; color: var(--text2); }
  .form-input { width: 100%; padding: 0.75rem 1rem; background: var(--surface2); border: 1px solid var(--border); border-radius: 10px; color: var(--text); font-family: 'Cairo', sans-serif; font-size: 0.95rem; direction: rtl; transition: border-color 0.2s; }
  .form-input:focus { outline: none; border-color: var(--accent); }
  .btn-primary { width: 100%; padding: 0.85rem; background: linear-gradient(135deg, var(--accent), var(--accent2)); border: none; border-radius: 10px; color: #fff; font-family: 'Cairo', sans-serif; font-size: 1rem; font-weight: 700; cursor: pointer; transition: opacity 0.2s; }
  .btn-primary:hover { opacity: 0.9; }
  .error-msg { color: var(--danger); font-size: 0.85rem; text-align: center; margin-top: 0.75rem; }

  .header { background: var(--surface); border-bottom: 1px solid var(--border); padding: 0.85rem 1.5rem; display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; z-index: 100; }
  .header-logo { display: flex; align-items: center; gap: 0.6rem; }
  .header-logo h2 { font-size: 1.1rem; font-weight: 900; color: var(--accent); }
  .btn-logout { padding: 0.45rem 1rem; background: transparent; border: 1px solid var(--border); border-radius: 8px; color: var(--text2); cursor: pointer; font-family: 'Cairo', sans-serif; font-size: 0.85rem; transition: all 0.2s; }
  .btn-logout:hover { border-color: var(--danger); color: var(--danger); }

  .nav { background: var(--surface2); border-bottom: 1px solid var(--border); display: flex; overflow-x: auto; padding: 0 0.5rem; }
  .nav::-webkit-scrollbar { display: none; }
  .nav-btn { padding: 0.85rem 1rem; background: none; border: none; color: var(--text2); cursor: pointer; font-family: 'Cairo', sans-serif; font-size: 0.85rem; white-space: nowrap; border-bottom: 3px solid transparent; transition: all 0.2s; display: flex; align-items: center; gap: 0.3rem; font-weight: 600; }
  .nav-btn.active { color: var(--accent); border-bottom-color: var(--accent); }

  .main { padding: 1rem; max-width: 1400px; margin: 0 auto; width: 100%; flex: 1; }

  .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 0.75rem; margin-bottom: 1.5rem; }
  .stat-card { background: var(--surface); border: 1px solid var(--border); border-radius: 16px; padding: 1.25rem; position: relative; overflow: hidden; }
  .stat-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; }
  .stat-card.blue::before { background: var(--accent); }
  .stat-card.green::before { background: var(--accent3); }
  .stat-card.purple::before { background: var(--accent2); }
  .stat-card.red::before { background: var(--danger); }
  .stat-icon { font-size: 1.75rem; margin-bottom: 0.5rem; }
  .stat-value { font-size: 1.75rem; font-weight: 900; line-height: 1; }
  .stat-card.blue .stat-value { color: var(--accent); }
  .stat-card.green .stat-value { color: var(--accent3); }
  .stat-card.purple .stat-value { color: var(--accent2); }
  .stat-card.red .stat-value { color: var(--danger); }
  .stat-label { font-size: 0.8rem; color: var(--text2); margin-top: 0.25rem; }

  .section-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; gap: 0.5rem; flex-wrap: wrap; }
  .section-title { font-size: 1.1rem; font-weight: 700; }
  .btn-add { padding: 0.5rem 1rem; background: linear-gradient(135deg, var(--accent), var(--accent2)); border: none; border-radius: 10px; color: #fff; cursor: pointer; font-family: 'Cairo', sans-serif; font-size: 0.85rem; font-weight: 700; display: flex; align-items: center; gap: 0.3rem; }

  .search-box { display: flex; align-items: center; gap: 0.5rem; background: var(--surface2); border: 1px solid var(--border); border-radius: 10px; padding: 0.5rem 1rem; margin-bottom: 1rem; }
  .search-box input { background: none; border: none; color: var(--text); flex: 1; font-family: 'Cairo', sans-serif; font-size: 0.95rem; direction: rtl; }
  .search-box input:focus { outline: none; }
  .search-box input::placeholder { color: var(--text2); }

  .table-wrap { background: var(--surface); border: 1px solid var(--border); border-radius: 16px; overflow: hidden; overflow-x: auto; }
  table { width: 100%; border-collapse: collapse; min-width: 500px; }
  thead { background: var(--surface2); }
  th { padding: 0.75rem 1rem; text-align: right; font-size: 0.82rem; color: var(--text2); font-weight: 600; border-bottom: 1px solid var(--border); }
  td { padding: 0.75rem 1rem; font-size: 0.88rem; border-bottom: 1px solid var(--border); }
  tr:last-child td { border-bottom: none; }
  tr.cancelled td { opacity: 0.5; text-decoration: line-through; }

  .badge { display: inline-flex; align-items: center; gap: 0.2rem; padding: 0.2rem 0.6rem; border-radius: 20px; font-size: 0.78rem; font-weight: 600; }
  .badge-green { background: rgba(16,185,129,0.15); color: var(--accent3); }
  .badge-red { background: rgba(239,68,68,0.15); color: var(--danger); }
  .badge-yellow { background: rgba(245,158,11,0.15); color: var(--warning); }
  .badge-blue { background: rgba(0,212,255,0.15); color: var(--accent); }
  .badge-gray { background: rgba(148,163,184,0.15); color: var(--text2); }

  .action-btns { display: flex; gap: 0.3rem; }
  .btn-icon { width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; border: 1px solid var(--border); border-radius: 8px; cursor: pointer; background: none; font-size: 0.85rem; transition: all 0.2s; }
  .btn-icon:hover { background: var(--surface2); }

  .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; z-index: 1000; padding: 1rem; backdrop-filter: blur(4px); }
  .modal { background: var(--surface); border: 1px solid var(--border); border-radius: 20px; padding: 1.75rem; width: 100%; max-width: 500px; max-height: 90vh; overflow-y: auto; }
  .modal h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: 1.25rem; color: var(--accent); }
  .modal-footer { display: flex; gap: 0.75rem; margin-top: 1.25rem; }
  .btn-cancel { flex: 1; padding: 0.7rem; background: none; border: 1px solid var(--border); border-radius: 10px; color: var(--text2); cursor: pointer; font-family: 'Cairo', sans-serif; font-size: 0.9rem; font-weight: 600; }
  .btn-save { flex: 2; padding: 0.7rem; background: linear-gradient(135deg, var(--accent), var(--accent2)); border: none; border-radius: 10px; color: #fff; cursor: pointer; font-family: 'Cairo', sans-serif; font-size: 0.9rem; font-weight: 700; }

  .alert { padding: 0.75rem 1rem; border-radius: 10px; margin-bottom: 0.75rem; font-size: 0.88rem; display: flex; align-items: center; gap: 0.5rem; }
  .alert-warning { background: rgba(245,158,11,0.15); border: 1px solid rgba(245,158,11,0.3); color: var(--warning); }
  .alert-danger { background: rgba(239,68,68,0.15); border: 1px solid rgba(239,68,68,0.3); color: var(--danger); }
  .alert-info { background: rgba(0,212,255,0.1); border: 1px solid rgba(0,212,255,0.3); color: var(--accent); }

  .debt-card { background: var(--surface); border: 1px solid var(--border); border-radius: 14px; padding: 1.1rem; margin-bottom: 0.75rem; }
  .debt-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.4rem; }
  .debt-name { font-weight: 700; }
  .debt-amount { font-size: 1.2rem; font-weight: 900; color: var(--danger); }
  .debt-amount.paid { color: var(--accent3); text-decoration: line-through; opacity: 0.6; }
  .debt-meta { font-size: 0.82rem; color: var(--text2); display: flex; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 0.75rem; }
  .debt-actions { display: flex; gap: 0.5rem; flex-wrap: wrap; }
  .btn-small { padding: 0.3rem 0.75rem; border-radius: 8px; font-family: 'Cairo', sans-serif; font-size: 0.8rem; font-weight: 600; cursor: pointer; border: 1px solid; transition: all 0.2s; }
  .btn-pay { border-color: var(--accent3); color: var(--accent3); background: none; }
  .btn-del { border-color: var(--danger); color: var(--danger); background: none; }
  .btn-cancel-action { border-color: var(--warning); color: var(--warning); background: none; }

  .purchase-item { background: var(--surface); border: 1px solid var(--border); border-radius: 14px; padding: 1.1rem; margin-bottom: 0.75rem; display: flex; justify-content: space-between; align-items: center; }
  .purchase-item.cancelled { opacity: 0.5; }
  .purchase-info h4 { font-weight: 700; margin-bottom: 0.25rem; }
  .purchase-meta { font-size: 0.82rem; color: var(--text2); }
  .purchase-total { font-size: 1.2rem; font-weight: 900; color: var(--accent3); }
  .purchase-total.cancelled { color: var(--text2); text-decoration: line-through; }

  .toast { position: fixed; bottom: 1.5rem; right: 1.5rem; background: var(--surface); border: 1px solid var(--accent3); border-radius: 12px; padding: 0.85rem 1.25rem; z-index: 9999; font-size: 0.88rem; font-weight: 600; color: var(--accent3); animation: slideIn 0.3s ease; max-width: 280px; }
  @keyframes slideIn { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }

  .notif-banner { background: rgba(245,158,11,0.12); border: 1px solid rgba(245,158,11,0.3); border-radius: 12px; padding: 0.85rem 1rem; margin-bottom: 1rem; display: flex; align-items: center; justify-content: space-between; gap: 0.75rem; }
  .notif-banner p { font-size: 0.88rem; color: var(--warning); flex: 1; }
  .btn-notif { padding: 0.4rem 0.9rem; background: var(--warning); border: none; border-radius: 8px; color: #000; font-family: 'Cairo', sans-serif; font-size: 0.82rem; font-weight: 700; cursor: pointer; }

  select.form-input option { background: #1a2236; }
  .no-data { text-align: center; padding: 2.5rem 1rem; color: var(--text2); font-size: 0.9rem; }
  .no-data .icon { font-size: 2.5rem; display: block; margin-bottom: 0.5rem; }
  .expiry-soon { color: var(--warning) !important; }
  .expiry-expired { color: var(--danger) !important; }

  @media (max-width: 640px) {
    .stats-grid { grid-template-columns: 1fr 1fr; }
  }
`;

function Modal({ title, children, onClose }) {
  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal"><h3>{title}</h3>{children}</div>
    </div>
  );
}

function Toast({ msg, onDone }) {
  useEffect(() => { const t = setTimeout(onDone, 2800); return () => clearTimeout(t); }, [onDone]);
  return <div className="toast">✅ {msg}</div>;
}

function expiryStatus(expiry) {
  if (!expiry) return null;
  const exp = new Date(expiry);
  const now = new Date();
  const days = Math.ceil((exp - now) / (1000 * 60 * 60 * 24));
  if (days < 0) return { label: "منتهي", cls: "badge-red", dayCls: "expiry-expired" };
  if (days <= 30) return { label: `${days} يوم`, cls: "badge-yellow", dayCls: "expiry-soon" };
  return { label: expiry, cls: "", dayCls: "" };
}

// ========== LOGIN ==========
function Login({ onLogin }) {
  const [u, setU] = useState("");
  const [p, setP] = useState("");
  const [err, setErr] = useState("");
  const submit = () => {
    if (u === ADMIN_CREDENTIALS.username && p === ADMIN_CREDENTIALS.password) onLogin();
    else setErr("اسم المستخدم أو كلمة المرور غير صحيحة");
  };
  return (
    <div className="login-wrap">
      <div className="login-card">
        <div className="login-logo">
          <span className="icon">💊</span>
          <h1>نظام إدارة الصيدلية</h1>
          <p>ادخل بياناتك للمتابعة</p>
        </div>
        <div className="form-group">
          <label>👤 اسم المستخدم</label>
          <input className="form-input" value={u} onChange={e => setU(e.target.value)} placeholder="admin" onKeyDown={e => e.key === "Enter" && submit()} />
        </div>
        <div className="form-group">
          <label>🔒 كلمة المرور</label>
          <input className="form-input" type="password" value={p} onChange={e => setP(e.target.value)} placeholder="••••••••" onKeyDown={e => e.key === "Enter" && submit()} />
        </div>
        <button className="btn-primary" onClick={submit}>دخول</button>
        {err && <p className="error-msg">⚠️ {err}</p>}
      </div>
    </div>
  );
}

// ========== DASHBOARD ==========
function Dashboard({ medicines, debts, sales, purchases }) {
  const totalMeds = medicines.length;
  const lowStock = medicines.filter(m => m.quantity <= m.minQuantity).length;
  const totalDebt = debts.filter(d => !d.paid).reduce((s, d) => s + d.amount, 0);
  const todaySales = sales.filter(s => s.date === today() && !s.cancelled).reduce((s, x) => s + x.total, 0);
  const expiringSoon = medicines.filter(m => {
    if (!m.expiry) return false;
    const days = Math.ceil((new Date(m.expiry) - new Date()) / (1000 * 60 * 60 * 24));
    return days >= 0 && days <= 30;
  });

  return (
    <div>
      <div className="stats-grid">
        <div className="stat-card blue"><div className="stat-icon">💊</div><div className="stat-value">{totalMeds}</div><div className="stat-label">إجمالي الأدوية</div></div>
        <div className="stat-card red"><div className="stat-icon">⚠️</div><div className="stat-value">{lowStock}</div><div className="stat-label">مخزون منخفض</div></div>
        <div className="stat-card green"><div className="stat-icon">💰</div><div className="stat-value">{todaySales.toLocaleString()}</div><div className="stat-label">مبيعات اليوم (أوقية)</div></div>
        <div className="stat-card purple"><div className="stat-icon">📋</div><div className="stat-value">{totalDebt.toLocaleString()}</div><div className="stat-label">الديون (أوقية)</div></div>
      </div>

      {expiringSoon.length > 0 && (
        <div className="alert alert-warning">
          ⚠️ {expiringSoon.length} دواء ستنتهي صلاحيته قريباً: {expiringSoon.map(m => m.name).join("، ")}
        </div>
      )}
      {lowStock > 0 && <div className="alert alert-danger">🔴 {lowStock} دواء وصل لحد التنبيه!</div>}

      <div className="section-header"><h3 className="section-title">🛒 آخر المبيعات</h3></div>
      <div className="table-wrap">
        <table>
          <thead><tr><th>الدواء</th><th>الكمية</th><th>المبلغ</th><th>التاريخ</th><th>الحالة</th></tr></thead>
          <tbody>
            {sales.slice(-5).reverse().map(s => (
              <tr key={s.id} className={s.cancelled ? "cancelled" : ""}>
                <td>{s.medicine}</td><td>{s.quantity}</td>
                <td><span className="badge badge-green">{s.total.toLocaleString()} أوقية</span></td>
                <td>{s.date}</td>
                <td>{s.cancelled ? <span className="badge badge-gray">ملغى</span> : <span className="badge badge-green">مكتمل</span>}</td>
              </tr>
            ))}
            {sales.length === 0 && <tr><td colSpan={5}><div className="no-data"><span className="icon">🛒</span>لا توجد مبيعات</div></td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ========== MEDICINES ==========
function Medicines({ medicines, setMedicines, setSales, showToast }) {
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(null);
  const [form, setForm] = useState({});
  const [sellMed, setSellMed] = useState(null);
  const [sellQty, setSellQty] = useState(1);
  const [sellCustomer, setSellCustomer] = useState("زبون عادي");

  const filtered = medicines.filter(m =>
    m.name.toLowerCase().includes(search.toLowerCase()) ||
    (m.nameFr || "").toLowerCase().includes(search.toLowerCase()) ||
    m.category.includes(search) || m.company.includes(search)
  );

  const openAdd = () => { setForm({ name: "", nameFr: "", category: "", quantity: "", minQuantity: 10, buyPrice: "", sellPrice: "", company: "", expiry: "" }); setModal("add"); };
  const openEdit = m => { setForm({ ...m }); setModal("edit"); };
  const openSell = m => { setSellMed(m); setSellQty(1); setSellCustomer("زبون عادي"); setModal("sell"); };

  const saveAdd = () => {
    if (!form.name || !form.quantity || !form.sellPrice) return;
    setMedicines(p => [...p, { ...form, id: genId(), quantity: +form.quantity, minQuantity: +form.minQuantity, buyPrice: +form.buyPrice, sellPrice: +form.sellPrice }]);
    setModal(null); showToast("تم إضافة الدواء");
  };
  const saveEdit = () => {
    setMedicines(p => p.map(m => m.id === form.id ? { ...form, quantity: +form.quantity, minQuantity: +form.minQuantity, buyPrice: +form.buyPrice, sellPrice: +form.sellPrice } : m));
    setModal(null); showToast("تم التعديل");
  };
  const deleteMed = id => {
    if (confirm("هل تريد حذف هذا الدواء؟")) { setMedicines(p => p.filter(m => m.id !== id)); showToast("تم الحذف"); }
  };
  const doSell = () => {
    if (!sellMed || sellQty < 1 || sellQty > sellMed.quantity) return;
    const total = sellQty * sellMed.sellPrice;
    setMedicines(p => p.map(m => m.id === sellMed.id ? { ...m, quantity: m.quantity - sellQty } : m));
    setSales(p => [...p, { id: genId(), medicine: sellMed.name, quantity: sellQty, total, date: today(), customer: sellCustomer, cancelled: false }]);
    setModal(null); showToast(`تم بيع ${sellQty} وحدة — ${total.toLocaleString()} أوقية`);
  };

  const stockStatus = m => {
    if (m.quantity === 0) return <span className="badge badge-red">🔴 نفد</span>;
    if (m.quantity <= m.minQuantity) return <span className="badge badge-yellow">🟡 منخفض</span>;
    return <span className="badge badge-green">🟢 متاح</span>;
  };

  const fields = [
    { key: "name", label: "اسم الدواء", placeholder: "Paracétamol 500mg" },
    { key: "nameFr", label: "الاسم بالفرنسية (اختياري)", placeholder: "Paracétamol 500mg" },
    { key: "category", label: "الفئة", placeholder: "مسكنات" },
    { key: "company", label: "الشركة", placeholder: "شركة الدواء" },
    { key: "quantity", label: "الكمية", type: "number" },
    { key: "minQuantity", label: "حد التنبيه", type: "number" },
    { key: "buyPrice", label: "سعر الشراء (أوقية)", type: "number" },
    { key: "sellPrice", label: "سعر البيع (أوقية)", type: "number" },
    { key: "expiry", label: "تاريخ الانتهاء", type: "date" },
  ];

  return (
    <div>
      <div className="section-header">
        <h3 className="section-title">💊 إدارة الأدوية</h3>
        <button className="btn-add" onClick={openAdd}>➕ إضافة</button>
      </div>
      <div className="search-box">
        <span>🔍</span>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="ابحث بالاسم أو الفئة..." />
      </div>
      <div className="table-wrap">
        <table>
          <thead><tr><th>الدواء</th><th>المخزون</th><th>السعر</th><th>الصلاحية</th><th>الحالة</th><th>إجراءات</th></tr></thead>
          <tbody>
            {filtered.map(m => {
              const exp = expiryStatus(m.expiry);
              return (
                <tr key={m.id}>
                  <td>
                    <div style={{ fontWeight: 600 }}>{m.name}</div>
                    <div style={{ fontSize: "0.78rem", color: "var(--text2)" }}>{m.company}</div>
                  </td>
                  <td><strong>{m.quantity}</strong><span style={{ color: "var(--text2)", fontSize: "0.78rem" }}> /{m.minQuantity}</span></td>
                  <td>{m.sellPrice?.toLocaleString()} أوقية</td>
                  <td><span className={exp?.dayCls || ""}>{exp?.cls ? <span className={`badge ${exp.cls}`}>{exp.label}</span> : m.expiry}</span></td>
                  <td>{stockStatus(m)}</td>
                  <td>
                    <div className="action-btns">
                      <button className="btn-icon" onClick={() => openSell(m)} style={{ color: "var(--accent3)" }} title="بيع">🛒</button>
                      <button className="btn-icon" onClick={() => openEdit(m)} title="تعديل">✏️</button>
                      <button className="btn-icon" onClick={() => deleteMed(m.id)} title="حذف">🗑️</button>
                    </div>
                  </td>
                </tr>
              );
            })}
            {filtered.length === 0 && <tr><td colSpan={6}><div className="no-data"><span className="icon">💊</span>لا توجد أدوية</div></td></tr>}
          </tbody>
        </table>
      </div>

      {(modal === "add" || modal === "edit") && (
        <Modal title={modal === "add" ? "➕ إضافة دواء" : "✏️ تعديل الدواء"} onClose={() => setModal(null)}>
          {fields.map(f => (
            <div className="form-group" key={f.key}>
              <label>{f.label}</label>
              <input className="form-input" type={f.type || "text"} placeholder={f.placeholder} value={form[f.key] || ""} onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))} />
            </div>
          ))}
          <div className="modal-footer">
            <button className="btn-cancel" onClick={() => setModal(null)}>إلغاء</button>
            <button className="btn-save" onClick={modal === "add" ? saveAdd : saveEdit}>{modal === "add" ? "إضافة" : "حفظ"}</button>
          </div>
        </Modal>
      )}

      {modal === "sell" && sellMed && (
        <Modal title={`🛒 بيع: ${sellMed.name}`} onClose={() => setModal(null)}>
          <div style={{ background: "var(--surface2)", borderRadius: 10, padding: "1rem", marginBottom: "1rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
              <span style={{ color: "var(--text2)" }}>المتاح:</span><strong>{sellMed.quantity} وحدة</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "var(--text2)" }}>سعر الوحدة:</span><strong style={{ color: "var(--accent3)" }}>{sellMed.sellPrice?.toLocaleString()} أوقية</strong>
            </div>
          </div>
          {sellMed.quantity === 0 && <div className="alert alert-danger">⚠️ هذا الدواء نفد!</div>}
          <div className="form-group">
            <label>الكمية</label>
            <input className="form-input" type="number" min={1} max={sellMed.quantity} value={sellQty} onChange={e => setSellQty(+e.target.value)} />
          </div>
          <div className="form-group">
            <label>اسم الزبون (اختياري)</label>
            <input className="form-input" value={sellCustomer} onChange={e => setSellCustomer(e.target.value)} placeholder="زبون عادي" />
          </div>
          <div style={{ background: "rgba(16,185,129,0.1)", borderRadius: 10, padding: "0.75rem", textAlign: "center", marginBottom: "0.5rem" }}>
            <span style={{ color: "var(--text2)", fontSize: "0.88rem" }}>الإجمالي: </span>
            <strong style={{ fontSize: "1.3rem", color: "var(--accent3)" }}>{((sellQty || 0) * (sellMed.sellPrice || 0)).toLocaleString()} أوقية</strong>
          </div>
          <div className="modal-footer">
            <button className="btn-cancel" onClick={() => setModal(null)}>إلغاء</button>
            <button className="btn-save" onClick={doSell} disabled={sellMed.quantity === 0}>تأكيد البيع</button>
          </div>
        </Modal>
      )}
    </div>
  );
}

// ========== SALES ==========
function Sales({ sales, setSales, medicines, setMedicines, showToast }) {
  const cancelSale = (sale) => {
    if (sale.cancelled) return;
    if (!confirm(`إلغاء بيع ${sale.quantity} وحدة من ${sale.medicine}؟`)) return;
    setSales(p => p.map(s => s.id === sale.id ? { ...s, cancelled: true } : s));
    setMedicines(p => p.map(m => m.name === sale.medicine ? { ...m, quantity: m.quantity + sale.quantity } : m));
    showToast("تم إلغاء البيع وإعادة الكمية للمخزون");
  };
  const deleteSale = id => {
    if (confirm("حذف هذا السجل نهائياً؟")) { setSales(p => p.filter(s => s.id !== id)); showToast("تم الحذف"); }
  };

  return (
    <div>
      <div className="section-header"><h3 className="section-title">🛒 سجل المبيعات</h3></div>
      <div className="table-wrap">
        <table>
          <thead><tr><th>الدواء</th><th>الكمية</th><th>المبلغ</th><th>الزبون</th><th>التاريخ</th><th>الحالة</th><th>إجراءات</th></tr></thead>
          <tbody>
            {sales.slice().reverse().map(s => (
              <tr key={s.id} className={s.cancelled ? "cancelled" : ""}>
                <td>{s.medicine}</td>
                <td>{s.quantity}</td>
                <td>{s.total?.toLocaleString()} أوقية</td>
                <td>{s.customer}</td>
                <td>{s.date}</td>
                <td>{s.cancelled ? <span className="badge badge-gray">ملغى</span> : <span className="badge badge-green">مكتمل</span>}</td>
                <td>
                  <div className="action-btns">
                    {!s.cancelled && <button className="btn-icon" onClick={() => cancelSale(s)} title="إلغاء" style={{ color: "var(--warning)" }}>↩️</button>}
                    <button className="btn-icon" onClick={() => deleteSale(s.id)} title="حذف">🗑️</button>
                  </div>
                </td>
              </tr>
            ))}
            {sales.length === 0 && <tr><td colSpan={7}><div className="no-data"><span className="icon">🛒</span>لا توجد مبيعات</div></td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ========== PURCHASES ==========
function Purchases({ medicines, setMedicines, purchases, setPurchases, showToast }) {
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState({ company: "", medicineName: "", quantity: "", buyPrice: "", date: today() });
  const [medSelect, setMedSelect] = useState("existing");

  const save = () => {
    if (!form.company || !form.medicineName || !form.quantity) return;
    const qty = +form.quantity;
    const price = +form.buyPrice || 0;
    setMedicines(p => p.map(m => m.name === form.medicineName ? { ...m, quantity: m.quantity + qty, buyPrice: price || m.buyPrice } : m));
    setPurchases(p => [...p, { id: genId(), company: form.company, medicine: form.medicineName, quantity: qty, total: qty * price, date: form.date, cancelled: false }]);
    setModal(false); showToast(`تم استلام ${qty} وحدة من ${form.medicineName}`);
  };

  const cancelPurchase = (purchase) => {
    if (purchase.cancelled) return;
    if (!confirm(`إلغاء فاتورة ${purchase.medicine}؟`)) return;
    setPurchases(p => p.map(pu => pu.id === purchase.id ? { ...pu, cancelled: true } : pu));
    setMedicines(p => p.map(m => m.name === purchase.medicine ? { ...m, quantity: Math.max(0, m.quantity - purchase.quantity) } : m));
    showToast("تم إلغاء الفاتورة");
  };

  const deletePurchase = id => {
    if (confirm("حذف هذه الفاتورة نهائياً؟")) { setPurchases(p => p.filter(pu => pu.id !== id)); showToast("تم الحذف"); }
  };

  return (
    <div>
      <div className="section-header">
        <h3 className="section-title">🏭 فواتير الشراء</h3>
        <button className="btn-add" onClick={() => setModal(true)}>➕ فاتورة</button>
      </div>

      {purchases.length === 0 && <div className="no-data"><span className="icon">🏭</span>لا توجد فواتير</div>}

      {purchases.slice().reverse().map(p => (
        <div className={`purchase-item ${p.cancelled ? "cancelled" : ""}`} key={p.id}>
          <div className="purchase-info">
            <h4>{p.medicine}</h4>
            <div className="purchase-meta">
              <span>🏭 {p.company}</span>
              <span>📦 {p.quantity} وحدة</span>
              <span>📅 {p.date}</span>
              {p.cancelled && <span className="badge badge-gray">ملغى</span>}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.5rem" }}>
            <div className={`purchase-total ${p.cancelled ? "cancelled" : ""}`}>{p.total?.toLocaleString()} أوقية</div>
            <div className="action-btns">
              {!p.cancelled && <button className="btn-icon" onClick={() => cancelPurchase(p)} title="إلغاء" style={{ color: "var(--warning)" }}>↩️</button>}
              <button className="btn-icon" onClick={() => deletePurchase(p.id)} title="حذف">🗑️</button>
            </div>
          </div>
        </div>
      ))}

      {modal && (
        <Modal title="🏭 فاتورة شراء جديدة" onClose={() => setModal(false)}>
          <div className="form-group">
            <label>اسم الشركة</label>
            <input className="form-input" value={form.company} onChange={e => setForm(p => ({ ...p, company: e.target.value }))} placeholder="شركة الدواء الذهبي" />
          </div>
          <div className="form-group">
            <label>الدواء</label>
            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.5rem" }}>
              <button className="btn-small btn-pay" style={{ flex: 1, opacity: medSelect === "existing" ? 1 : 0.5 }} onClick={() => setMedSelect("existing")}>من القائمة</button>
              <button className="btn-small btn-pay" style={{ flex: 1, opacity: medSelect === "new" ? 1 : 0.5 }} onClick={() => setMedSelect("new")}>اسم جديد</button>
            </div>
            {medSelect === "existing" ? (
              <select className="form-input" value={form.medicineName} onChange={e => setForm(p => ({ ...p, medicineName: e.target.value }))}>
                <option value="">-- اختر دواء --</option>
                {medicines.map(m => <option key={m.id} value={m.name}>{m.name}</option>)}
              </select>
            ) : (
              <input className="form-input" value={form.medicineName} onChange={e => setForm(p => ({ ...p, medicineName: e.target.value }))} placeholder="اسم الدواء" />
            )}
          </div>
          <div className="form-group">
            <label>الكمية</label>
            <input className="form-input" type="number" min={1} value={form.quantity} onChange={e => setForm(p => ({ ...p, quantity: e.target.value }))} />
          </div>
          <div className="form-group">
            <label>سعر الشراء للوحدة (أوقية)</label>
            <input className="form-input" type="number" value={form.buyPrice} onChange={e => setForm(p => ({ ...p, buyPrice: e.target.value }))} />
          </div>
          <div className="form-group">
            <label>التاريخ</label>
            <input className="form-input" type="date" value={form.date} onChange={e => setForm(p => ({ ...p, date: e.target.value }))} />
          </div>
          {form.quantity && form.buyPrice && (
            <div style={{ background: "rgba(0,212,255,0.08)", borderRadius: 10, padding: "0.75rem", textAlign: "center", marginBottom: "0.5rem" }}>
              <span style={{ color: "var(--text2)" }}>الإجمالي: </span>
              <strong style={{ color: "var(--accent)" }}>{(+form.quantity * +form.buyPrice).toLocaleString()} أوقية</strong>
            </div>
          )}
          <div className="modal-footer">
            <button className="btn-cancel" onClick={() => setModal(false)}>إلغاء</button>
            <button className="btn-save" onClick={save}>حفظ الفاتورة</button>
          </div>
        </Modal>
      )}
    </div>
  );
}

// ========== DEBTS ==========
function Debts({ debts, setDebts, showToast }) {
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", amount: "", notes: "", date: today() });
  const [filter, setFilter] = useState("all");

  const filtered = debts.filter(d => filter === "all" ? true : filter === "unpaid" ? !d.paid : d.paid);
  const totalUnpaid = debts.filter(d => !d.paid).reduce((s, d) => s + d.amount, 0);

  const save = () => {
    if (!form.name || !form.amount) return;
    setDebts(p => [...p, { ...form, id: genId(), amount: +form.amount, paid: false }]);
    setModal(false); showToast("تم إضافة الدين");
  };
  const pay = id => { setDebts(p => p.map(d => d.id === id ? { ...d, paid: true } : d)); showToast("تم تسديد الدين ✅"); };
  const del = id => { if (confirm("حذف هذا الدين؟")) { setDebts(p => p.filter(d => d.id !== id)); showToast("تم الحذف"); } };

  return (
    <div>
      <div className="section-header">
        <h3 className="section-title">📋 إدارة الديون</h3>
        <button className="btn-add" onClick={() => setModal(true)}>➕ إضافة</button>
      </div>
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem", flexWrap: "wrap", alignItems: "center" }}>
        {[["all", "الكل"], ["unpaid", "غير مسددة"], ["paid", "مسددة"]].map(([v, l]) => (
          <button key={v} className="btn-small" style={{ border: "1px solid var(--border)", background: filter === v ? "var(--accent3)" : "none", color: filter === v ? "#000" : "var(--text2)" }} onClick={() => setFilter(v)}>{l}</button>
        ))}
        <span style={{ marginRight: "auto", color: "var(--danger)", fontWeight: 700, fontSize: "0.88rem" }}>
          غير مسدد: {totalUnpaid.toLocaleString()} أوقية
        </span>
      </div>

      {filtered.length === 0 && <div className="no-data"><span className="icon">📋</span>لا توجد ديون</div>}

      {filtered.map(d => (
        <div className="debt-card" key={d.id}>
          <div className="debt-header">
            <div>
              <div className="debt-name">{d.name}</div>
              {d.phone && <div style={{ fontSize: "0.82rem", color: "var(--text2)" }}>📞 {d.phone}</div>}
            </div>
            <div className={`debt-amount ${d.paid ? "paid" : ""}`}>{d.amount?.toLocaleString()} أوقية</div>
          </div>
          <div className="debt-meta">
            {d.notes && <span>📝 {d.notes}</span>}
            <span>📅 {d.date}</span>
            <span>{d.paid ? <span className="badge badge-green">✅ مسدد</span> : <span className="badge badge-red">❌ غير مسدد</span>}</span>
          </div>
          <div className="debt-actions">
            {!d.paid && <button className="btn-small btn-pay" onClick={() => pay(d.id)}>✅ تسديد</button>}
            <button className="btn-small btn-del" onClick={() => del(d.id)}>🗑️ حذف</button>
          </div>
        </div>
      ))}

      {modal && (
        <Modal title="📋 إضافة دين جديد" onClose={() => setModal(false)}>
          {[
            { key: "name", label: "اسم الدائن", placeholder: "أحمد محمد" },
            { key: "phone", label: "رقم الهاتف", placeholder: "22xxxxxxxx", type: "tel" },
            { key: "amount", label: "المبلغ (أوقية)", type: "number" },
            { key: "notes", label: "ماذا أخذ", placeholder: "Paracétamol + Vitamine C" },
            { key: "date", label: "التاريخ", type: "date" },
          ].map(f => (
            <div className="form-group" key={f.key}>
              <label>{f.label}</label>
              <input className="form-input" type={f.type || "text"} placeholder={f.placeholder} value={form[f.key] || ""} onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))} />
            </div>
          ))}
          <div className="modal-footer">
            <button className="btn-cancel" onClick={() => setModal(false)}>إلغاء</button>
            <button className="btn-save" onClick={save}>إضافة</button>
          </div>
        </Modal>
      )}
    </div>
  );
}

// ========== REPORTS ==========
function Reports({ medicines, sales, purchases, debts }) {
  const activeSales = sales.filter(s => !s.cancelled);
  const activePurchases = purchases.filter(p => !p.cancelled);
  const totalSales = activeSales.reduce((s, x) => s + x.total, 0);
  const totalPurchases = activePurchases.reduce((s, x) => s + x.total, 0);
  const profit = totalSales - totalPurchases;
  const unpaidDebts = debts.filter(d => !d.paid).reduce((s, d) => s + d.amount, 0);

  const expiringSoon = medicines.filter(m => {
    if (!m.expiry) return false;
    const days = Math.ceil((new Date(m.expiry) - new Date()) / (1000 * 60 * 60 * 24));
    return days >= 0 && days <= 60;
  }).sort((a, b) => new Date(a.expiry) - new Date(b.expiry));

  return (
    <div>
      <h3 className="section-title" style={{ marginBottom: "1rem" }}>📊 التقارير المالية</h3>
      <div className="stats-grid">
        <div className="stat-card green"><div className="stat-icon">💰</div><div className="stat-value">{totalSales.toLocaleString()}</div><div className="stat-label">المبيعات (أوقية)</div></div>
        <div className="stat-card red"><div className="stat-icon">🏭</div><div className="stat-value">{totalPurchases.toLocaleString()}</div><div className="stat-label">المشتريات (أوقية)</div></div>
        <div className="stat-card blue"><div className="stat-icon">📈</div><div className="stat-value" style={{ color: profit >= 0 ? "var(--accent3)" : "var(--danger)" }}>{profit.toLocaleString()}</div><div className="stat-label">الأرباح (أوقية)</div></div>
        <div className="stat-card purple"><div className="stat-icon">📋</div><div className="stat-value">{unpaidDebts.toLocaleString()}</div><div className="stat-label">ديون (أوقية)</div></div>
      </div>

      {expiringSoon.length > 0 && (
        <>
          <div className="section-header" style={{ marginTop: "1.5rem" }}>
            <h3 className="section-title">⚠️ أدوية تنتهي قريباً</h3>
          </div>
          <div className="table-wrap">
            <table>
              <thead><tr><th>الدواء</th><th>الكمية</th><th>تاريخ الانتهاء</th><th>الأيام المتبقية</th></tr></thead>
              <tbody>
                {expiringSoon.map(m => {
                  const days = Math.ceil((new Date(m.expiry) - new Date()) / (1000 * 60 * 60 * 24));
                  return (
                    <tr key={m.id}>
                      <td>{m.name}</td>
                      <td>{m.quantity}</td>
                      <td>{m.expiry}</td>
                      <td><span className={`badge ${days <= 10 ? "badge-red" : "badge-yellow"}`}>{days} يوم</span></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

// ========== MAIN APP ==========
export default function PharmacyApp() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [tab, setTab] = useState("dashboard");
  const [medicines, setMedicines] = useState(INITIAL_MEDICINES);
  const [debts, setDebts] = useState(INITIAL_DEBTS);
  const [sales, setSales] = useState(INITIAL_SALES);
  const [purchases, setPurchases] = useState(INITIAL_PURCHASES);
  const [toast, setToast] = useState(null);
  const [notifGranted, setNotifGranted] = useState(false);

  useEffect(() => { saveToFirestore("ph_medicines", medicines); }, [medicines]);
  useEffect(() => { saveToFirestore("ph_debts", debts); }, [debts]);
  useEffect(() => { saveToFirestore("ph_sales", sales); }, [sales]);
  useEffect(() => { saveToFirestore("ph_purchases", purchases); }, [purchases]);
  useEffect(() => { saveToFirestore("ph_loggedIn", loggedIn); }, [loggedIn]);

  useEffect(() => {
    if (loggedIn && "Notification" in window) {
      if (Notification.permission === "granted") {
        setNotifGranted(true);
        checkExpiryNotifications(medicines);
      }
    }
  }, [loggedIn, medicines]);

  const requestNotif = async () => {
    if ("Notification" in window) {
      const perm = await Notification.requestPermission();
      if (perm === "granted") { setNotifGranted(true); checkExpiryNotifications(medicines); }
    }
  };

  const showToast = useCallback(msg => setToast(msg), []);

  const clearAllData = () => {
    if (!confirm("هل تريد مسح جميع البيانات نهائياً؟ لا يمكن التراجع!")) return;
    setMedicines(INITIAL_MEDICINES);
    setSales([]);
    setPurchases([]);
    setDebts([]);
    ["ph_medicines","ph_sales","ph_purchases","ph_debts"].forEach(k => localStorage.removeItem(k));
    showToast("تم مسح جميع البيانات");
  };

  const tabs = [
    { id: "dashboard", label: "الرئيسية", icon: "📊" },
    { id: "medicines", label: "الأدوية", icon: "💊" },
    { id: "sales", label: "المبيعات", icon: "🛒" },
    { id: "purchases", label: "المشتريات", icon: "🏭" },
    { id: "debts", label: "الديون", icon: "📋" },
    { id: "reports", label: "التقارير", icon: "📈" },
  ];

  if (!loggedIn) return (<><style>{css}</style><Login onLogin={() => setLoggedIn(true)} /></>);

  return (
    <>
      <style>{css}</style>
      <div className="app">
        <header className="header">
          <div className="header-logo"><span>💊</span><h2>نظام إدارة الصيدلية</h2></div>
          <button className="btn-logout" style={{color:"var(--danger)",borderColor:"var(--danger)"}} onClick={clearAllData}>🗑️ مسح</button>
          <button className="btn-logout" onClick={() => setLoggedIn(false)}>🚪 خروج</button>
        </header>
        <nav className="nav">
          {tabs.map(t => (
            <button key={t.id} className={`nav-btn ${tab === t.id ? "active" : ""}`} onClick={() => setTab(t.id)}>
              {t.icon} {t.label}
            </button>
          ))}
        </nav>
        <main className="main">
          {"Notification" in window && Notification.permission === "default" && !notifGranted && (
            <div className="notif-banner">
              <p>🔔 فعّل الإشعارات لتلقي تنبيهات انتهاء الصلاحية</p>
              <button className="btn-notif" onClick={requestNotif}>تفعيل</button>
            </div>
          )}
          {tab === "dashboard" && <Dashboard medicines={medicines} debts={debts} sales={sales} purchases={purchases} />}
          {tab === "medicines" && <Medicines medicines={medicines} setMedicines={setMedicines} setSales={setSales} showToast={showToast} />}
          {tab === "sales" && <Sales sales={sales} setSales={setSales} medicines={medicines} setMedicines={setMedicines} showToast={showToast} />}
          {tab === "purchases" && <Purchases medicines={medicines} setMedicines={setMedicines} purchases={purchases} setPurchases={setPurchases} showToast={showToast} />}
          {tab === "debts" && <Debts debts={debts} setDebts={setDebts} showToast={showToast} />}
          {tab === "reports" && <Reports medicines={medicines} sales={sales} purchases={purchases} debts={debts} />}
        </main>
      </div>
      {toast && <Toast msg={toast} onDone={() => setToast(null)} />}
    </>
  );
}
