"use client";
import { useState, useEffect, useCallback } from "react";

// ========== CONSTANTS ==========
const ADMIN_CREDENTIALS = { username: "admin", password: "pharmacy123" };

const INITIAL_MEDICINES = [
  { id: 1, name: "باراسيتامول 500mg", category: "مسكنات", quantity: 150, minQuantity: 20, buyPrice: 5, sellPrice: 10, company: "شركة الدواء الذهبي", expiry: "2026-12-01" },
  { id: 2, name: "أموكسيسيلين 250mg", category: "مضادات حيوية", quantity: 80, minQuantity: 15, buyPrice: 15, sellPrice: 28, company: "فارما بلس", expiry: "2026-08-15" },
  { id: 3, name: "أوميبرازول 20mg", category: "معدة", quantity: 5, minQuantity: 10, buyPrice: 12, sellPrice: 22, company: "شركة الدواء الذهبي", expiry: "2027-03-20" },
  { id: 4, name: "فيتامين C 1000mg", category: "فيتامينات", quantity: 200, minQuantity: 30, buyPrice: 8, sellPrice: 15, company: "نيوتري كير", expiry: "2027-06-01" },
];

const INITIAL_DEBTS = [
  { id: 1, name: "أحمد محمد", phone: "0501234567", amount: 120, date: "2026-05-10", notes: "باراسيتامول + أموكسيسيلين", paid: false },
  { id: 2, name: "فاطمة علي", phone: "0559876543", amount: 55, date: "2026-05-20", notes: "فيتامينات", paid: false },
];

const INITIAL_PURCHASES = [
  { id: 1, company: "شركة الدواء الذهبي", medicine: "باراسيتامول 500mg", quantity: 100, total: 500, date: "2026-05-01" },
];

const INITIAL_SALES = [
  { id: 1, medicine: "باراسيتامول 500mg", quantity: 10, total: 100, date: "2026-05-25", customer: "زبون عادي" },
];

// ========== ICONS ==========
const icons = {
  pill: "💊", cart: "🛒", debt: "📋", stats: "📊", logout: "🚪",
  add: "➕", edit: "✏️", delete: "🗑️", check: "✅", warning: "⚠️",
  search: "🔍", money: "💰", company: "🏭", phone: "📞", calendar: "📅",
  low: "🔴", ok: "🟢", medium: "🟡", lock: "🔒", user: "👤",
};

// ========== STYLES ==========
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap');
  
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  
  :root {
    --bg: #0a0e1a;
    --surface: #111827;
    --surface2: #1a2236;
    --border: #1e2d45;
    --accent: #00d4ff;
    --accent2: #7c3aed;
    --accent3: #10b981;
    --danger: #ef4444;
    --warning: #f59e0b;
    --text: #e2e8f0;
    --text2: #94a3b8;
    --card-glow: 0 0 30px rgba(0,212,255,0.08);
  }

  body { font-family: 'Cairo', sans-serif; background: var(--bg); color: var(--text); direction: rtl; min-height: 100vh; }

  .app { display: flex; flex-direction: column; min-height: 100vh; }

  /* LOGIN */
  .login-wrap {
    min-height: 100vh; display: flex; align-items: center; justify-content: center;
    background: radial-gradient(ellipse at 60% 40%, #0d1f3c 0%, #0a0e1a 70%);
    padding: 1rem;
  }
  .login-card {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 20px; padding: 2.5rem; width: 100%; max-width: 420px;
    box-shadow: 0 0 60px rgba(0,212,255,0.12), 0 25px 50px rgba(0,0,0,0.5);
  }
  .login-logo { text-align: center; margin-bottom: 2rem; }
  .login-logo .icon { font-size: 3.5rem; display: block; margin-bottom: 0.5rem; }
  .login-logo h1 { font-size: 1.6rem; font-weight: 900; color: var(--accent); }
  .login-logo p { color: var(--text2); font-size: 0.9rem; }
  .form-group { margin-bottom: 1.2rem; }
  .form-group label { display: block; margin-bottom: 0.4rem; font-size: 0.9rem; color: var(--text2); }
  .form-input {
    width: 100%; padding: 0.75rem 1rem; background: var(--surface2);
    border: 1px solid var(--border); border-radius: 10px; color: var(--text);
    font-family: 'Cairo', sans-serif; font-size: 0.95rem; direction: rtl;
    transition: border-color 0.2s;
  }
  .form-input:focus { outline: none; border-color: var(--accent); box-shadow: 0 0 0 3px rgba(0,212,255,0.1); }
  .btn-primary {
    width: 100%; padding: 0.85rem; background: linear-gradient(135deg, var(--accent), var(--accent2));
    border: none; border-radius: 10px; color: #fff; font-family: 'Cairo', sans-serif;
    font-size: 1rem; font-weight: 700; cursor: pointer; transition: opacity 0.2s, transform 0.1s;
  }
  .btn-primary:hover { opacity: 0.9; transform: translateY(-1px); }
  .btn-primary:active { transform: translateY(0); }
  .error-msg { color: var(--danger); font-size: 0.85rem; text-align: center; margin-top: 0.75rem; }

  /* HEADER */
  .header {
    background: var(--surface); border-bottom: 1px solid var(--border);
    padding: 0.85rem 1.5rem; display: flex; align-items: center;
    justify-content: space-between; position: sticky; top: 0; z-index: 100;
    box-shadow: 0 2px 20px rgba(0,0,0,0.3);
  }
  .header-logo { display: flex; align-items: center; gap: 0.6rem; }
  .header-logo span { font-size: 1.5rem; }
  .header-logo h2 { font-size: 1.1rem; font-weight: 900; color: var(--accent); }
  .header-actions { display: flex; align-items: center; gap: 0.75rem; }
  .btn-logout {
    padding: 0.45rem 1rem; background: transparent; border: 1px solid var(--border);
    border-radius: 8px; color: var(--text2); cursor: pointer; font-family: 'Cairo', sans-serif;
    font-size: 0.85rem; display: flex; align-items: center; gap: 0.4rem;
    transition: all 0.2s;
  }
  .btn-logout:hover { border-color: var(--danger); color: var(--danger); }

  /* NAV */
  .nav {
    background: var(--surface2); border-bottom: 1px solid var(--border);
    display: flex; overflow-x: auto; padding: 0 1rem;
  }
  .nav::-webkit-scrollbar { display: none; }
  .nav-btn {
    padding: 0.85rem 1.2rem; background: none; border: none; color: var(--text2);
    cursor: pointer; font-family: 'Cairo', sans-serif; font-size: 0.9rem;
    white-space: nowrap; border-bottom: 3px solid transparent;
    transition: all 0.2s; display: flex; align-items: center; gap: 0.4rem;
    font-weight: 600;
  }
  .nav-btn:hover { color: var(--text); }
  .nav-btn.active { color: var(--accent); border-bottom-color: var(--accent); }

  /* MAIN */
  .main { padding: 1.5rem; max-width: 1400px; margin: 0 auto; width: 100%; flex: 1; }

  /* CARDS */
  .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem; }
  .stat-card {
    background: var(--surface); border: 1px solid var(--border); border-radius: 16px;
    padding: 1.5rem; box-shadow: var(--card-glow); position: relative; overflow: hidden;
  }
  .stat-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
  }
  .stat-card.blue::before { background: var(--accent); }
  .stat-card.green::before { background: var(--accent3); }
  .stat-card.purple::before { background: var(--accent2); }
  .stat-card.red::before { background: var(--danger); }
  .stat-icon { font-size: 2rem; margin-bottom: 0.75rem; }
  .stat-value { font-size: 2rem; font-weight: 900; line-height: 1; }
  .stat-card.blue .stat-value { color: var(--accent); }
  .stat-card.green .stat-value { color: var(--accent3); }
  .stat-card.purple .stat-value { color: var(--accent2); }
  .stat-card.red .stat-value { color: var(--danger); }
  .stat-label { font-size: 0.85rem; color: var(--text2); margin-top: 0.3rem; }

  /* SECTION */
  .section-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; flex-wrap: gap; gap: 0.75rem; }
  .section-title { font-size: 1.2rem; font-weight: 700; }
  .btn-add {
    padding: 0.55rem 1.1rem; background: linear-gradient(135deg, var(--accent), var(--accent2));
    border: none; border-radius: 10px; color: #fff; cursor: pointer;
    font-family: 'Cairo', sans-serif; font-size: 0.9rem; font-weight: 700;
    display: flex; align-items: center; gap: 0.4rem; transition: opacity 0.2s;
  }
  .btn-add:hover { opacity: 0.85; }

  /* SEARCH */
  .search-box {
    display: flex; align-items: center; gap: 0.5rem;
    background: var(--surface2); border: 1px solid var(--border);
    border-radius: 10px; padding: 0.5rem 1rem; margin-bottom: 1.25rem;
  }
  .search-box input {
    background: none; border: none; color: var(--text); flex: 1;
    font-family: 'Cairo', sans-serif; font-size: 0.95rem; direction: rtl;
  }
  .search-box input:focus { outline: none; }
  .search-box input::placeholder { color: var(--text2); }

  /* TABLE */
  .table-wrap { background: var(--surface); border: 1px solid var(--border); border-radius: 16px; overflow: hidden; overflow-x: auto; }
  table { width: 100%; border-collapse: collapse; min-width: 600px; }
  thead { background: var(--surface2); }
  th { padding: 0.85rem 1rem; text-align: right; font-size: 0.85rem; color: var(--text2); font-weight: 600; border-bottom: 1px solid var(--border); }
  td { padding: 0.85rem 1rem; font-size: 0.9rem; border-bottom: 1px solid var(--border); }
  tr:last-child td { border-bottom: none; }
  tr:hover td { background: rgba(255,255,255,0.02); }

  /* BADGES */
  .badge {
    display: inline-flex; align-items: center; gap: 0.3rem;
    padding: 0.25rem 0.7rem; border-radius: 20px; font-size: 0.8rem; font-weight: 600;
  }
  .badge-green { background: rgba(16,185,129,0.15); color: var(--accent3); }
  .badge-red { background: rgba(239,68,68,0.15); color: var(--danger); }
  .badge-yellow { background: rgba(245,158,11,0.15); color: var(--warning); }
  .badge-blue { background: rgba(0,212,255,0.15); color: var(--accent); }

  /* ACTION BTNS */
  .action-btns { display: flex; gap: 0.4rem; }
  .btn-icon {
    width: 32px; height: 32px; display: flex; align-items: center; justify-content: center;
    border: 1px solid var(--border); border-radius: 8px; cursor: pointer;
    background: none; font-size: 0.9rem; transition: all 0.2s;
  }
  .btn-icon:hover { background: var(--surface2); }
  .btn-icon.danger:hover { border-color: var(--danger); }

  /* MODAL */
  .modal-overlay {
    position: fixed; inset: 0; background: rgba(0,0,0,0.7);
    display: flex; align-items: center; justify-content: center;
    z-index: 1000; padding: 1rem; backdrop-filter: blur(4px);
  }
  .modal {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 20px; padding: 2rem; width: 100%; max-width: 500px;
    box-shadow: 0 0 60px rgba(0,0,0,0.5);
    max-height: 90vh; overflow-y: auto;
  }
  .modal h3 { font-size: 1.2rem; font-weight: 700; margin-bottom: 1.5rem; color: var(--accent); }
  .modal-footer { display: flex; gap: 0.75rem; margin-top: 1.5rem; }
  .btn-cancel {
    flex: 1; padding: 0.75rem; background: none; border: 1px solid var(--border);
    border-radius: 10px; color: var(--text2); cursor: pointer;
    font-family: 'Cairo', sans-serif; font-size: 0.95rem; font-weight: 600;
    transition: all 0.2s;
  }
  .btn-cancel:hover { border-color: var(--text2); color: var(--text); }
  .btn-save {
    flex: 2; padding: 0.75rem; background: linear-gradient(135deg, var(--accent), var(--accent2));
    border: none; border-radius: 10px; color: #fff; cursor: pointer;
    font-family: 'Cairo', sans-serif; font-size: 0.95rem; font-weight: 700;
    transition: opacity 0.2s;
  }
  .btn-save:hover { opacity: 0.85; }

  /* SELL MODAL */
  .sell-quick { display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 1rem; }
  .sell-quick-btn {
    padding: 0.5rem; background: var(--surface2); border: 1px solid var(--border);
    border-radius: 8px; color: var(--text); cursor: pointer;
    font-family: 'Cairo', sans-serif; font-size: 0.85rem; transition: all 0.2s;
  }
  .sell-quick-btn:hover { border-color: var(--accent); color: var(--accent); }

  /* ALERT */
  .alert {
    padding: 0.85rem 1.2rem; border-radius: 10px; margin-bottom: 1rem;
    font-size: 0.9rem; display: flex; align-items: center; gap: 0.5rem;
  }
  .alert-warning { background: rgba(245,158,11,0.15); border: 1px solid rgba(245,158,11,0.3); color: var(--warning); }
  .alert-danger { background: rgba(239,68,68,0.15); border: 1px solid rgba(239,68,68,0.3); color: var(--danger); }

  /* DEBT CARD */
  .debt-card {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 14px; padding: 1.25rem; margin-bottom: 0.75rem;
    transition: border-color 0.2s;
  }
  .debt-card:hover { border-color: var(--accent); }
  .debt-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem; }
  .debt-name { font-weight: 700; font-size: 1rem; }
  .debt-amount { font-size: 1.3rem; font-weight: 900; color: var(--danger); }
  .debt-amount.paid { color: var(--accent3); text-decoration: line-through; opacity: 0.6; }
  .debt-meta { font-size: 0.85rem; color: var(--text2); display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 0.75rem; }
  .debt-actions { display: flex; gap: 0.5rem; }
  .btn-small {
    padding: 0.35rem 0.85rem; border-radius: 8px; font-family: 'Cairo', sans-serif;
    font-size: 0.82rem; font-weight: 600; cursor: pointer; border: 1px solid;
    transition: all 0.2s;
  }
  .btn-pay { border-color: var(--accent3); color: var(--accent3); background: none; }
  .btn-pay:hover { background: rgba(16,185,129,0.1); }
  .btn-del { border-color: var(--danger); color: var(--danger); background: none; }
  .btn-del:hover { background: rgba(239,68,68,0.1); }

  /* PURCHASE */
  .purchase-item {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 14px; padding: 1.25rem; margin-bottom: 0.75rem;
    display: flex; justify-content: space-between; align-items: center;
  }
  .purchase-info h4 { font-weight: 700; margin-bottom: 0.3rem; }
  .purchase-meta { font-size: 0.85rem; color: var(--text2); }
  .purchase-total { font-size: 1.3rem; font-weight: 900; color: var(--accent3); }

  /* RESPONSIVE */
  @media (max-width: 640px) {
    .main { padding: 1rem; }
    .stats-grid { grid-template-columns: 1fr 1fr; }
    .sell-quick { grid-template-columns: 1fr; }
    table { min-width: 500px; }
  }

  /* TOAST */
  .toast {
    position: fixed; bottom: 1.5rem; right: 1.5rem;
    background: var(--surface); border: 1px solid var(--accent3);
    border-radius: 12px; padding: 1rem 1.5rem;
    box-shadow: 0 10px 30px rgba(0,0,0,0.4);
    z-index: 9999; font-size: 0.9rem; font-weight: 600;
    color: var(--accent3); animation: slideIn 0.3s ease;
    max-width: 300px;
  }
  @keyframes slideIn { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }

  select.form-input option { background: #1a2236; }

  .no-data { text-align: center; padding: 3rem 1rem; color: var(--text2); font-size: 0.95rem; }
  .no-data .icon { font-size: 3rem; display: block; margin-bottom: 0.75rem; }
`;

// ========== HELPERS ==========
const genId = () => Date.now() + Math.random();
const today = () => new Date().toISOString().split("T")[0];

// ========== COMPONENTS ==========

function Modal({ title, children, onClose }) {
  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <h3>{title}</h3>
        {children}
      </div>
    </div>
  );
}

function Toast({ msg, onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2500);
    return () => clearTimeout(t);
  }, [onDone]);
  return <div className="toast">✅ {msg}</div>;
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
          <label>{icons.user} اسم المستخدم</label>
          <input className="form-input" value={u} onChange={e => setU(e.target.value)} placeholder="admin" onKeyDown={e => e.key === "Enter" && submit()} />
        </div>
        <div className="form-group">
          <label>{icons.lock} كلمة المرور</label>
          <input className="form-input" type="password" value={p} onChange={e => setP(e.target.value)} placeholder="••••••••" onKeyDown={e => e.key === "Enter" && submit()} />
        </div>
        <button className="btn-primary" onClick={submit}>دخول</button>
        {err && <p className="error-msg">⚠️ {err}</p>}
        <p style={{ textAlign: "center", marginTop: "1rem", fontSize: "0.8rem", color: "var(--text2)" }}>
          المستخدم: admin | الرمز: pharmacy123
        </p>
      </div>
    </div>
  );
}

// ========== DASHBOARD ==========
function Dashboard({ medicines, debts, sales, purchases }) {
  const totalMeds = medicines.length;
  const lowStock = medicines.filter(m => m.quantity <= m.minQuantity).length;
  const totalDebt = debts.filter(d => !d.paid).reduce((s, d) => s + d.amount, 0);
  const todaySales = sales.filter(s => s.date === today()).reduce((s, x) => s + x.total, 0);

  return (
    <div>
      <div className="stats-grid">
        <div className="stat-card blue">
          <div className="stat-icon">💊</div>
          <div className="stat-value">{totalMeds}</div>
          <div className="stat-label">إجمالي الأدوية</div>
        </div>
        <div className="stat-card red">
          <div className="stat-icon">⚠️</div>
          <div className="stat-value">{lowStock}</div>
          <div className="stat-label">أدوية تنبيه المخزون</div>
        </div>
        <div className="stat-card green">
          <div className="stat-icon">💰</div>
          <div className="stat-value">{todaySales} ر.س</div>
          <div className="stat-label">مبيعات اليوم</div>
        </div>
        <div className="stat-card purple">
          <div className="stat-icon">📋</div>
          <div className="stat-value">{totalDebt} ر.س</div>
          <div className="stat-label">إجمالي الديون</div>
        </div>
      </div>

      {lowStock > 0 && (
        <div className="alert alert-danger">
          {icons.warning} هناك {lowStock} دواء وصل لحد التنبيه أو نفد من المخزون!
        </div>
      )}

      <div className="section-header">
        <h3 className="section-title">📋 آخر المبيعات</h3>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>الدواء</th><th>الكمية</th><th>المبلغ</th><th>التاريخ</th><th>الزبون</th>
            </tr>
          </thead>
          <tbody>
            {sales.slice(-5).reverse().map(s => (
              <tr key={s.id}>
                <td>{s.medicine}</td>
                <td>{s.quantity}</td>
                <td><span className="badge badge-green">{s.total} ر.س</span></td>
                <td>{s.date}</td>
                <td>{s.customer}</td>
              </tr>
            ))}
            {sales.length === 0 && <tr><td colSpan={5} className="no-data"><span className="icon">🛒</span>لا توجد مبيعات بعد</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ========== MEDICINES ==========
function Medicines({ medicines, setMedicines, setSales, showToast }) {
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(null); // null | 'add' | 'sell' | 'edit'
  const [form, setForm] = useState({});
  const [sellMed, setSellMed] = useState(null);
  const [sellQty, setSellQty] = useState(1);
  const [sellCustomer, setSellCustomer] = useState("زبون عادي");
  const [, setSalesState] = useState(null);

  const filtered = medicines.filter(m =>
    m.name.includes(search) || m.category.includes(search) || m.company.includes(search)
  );

  const openAdd = () => { setForm({ name: "", category: "", quantity: "", minQuantity: 10, buyPrice: "", sellPrice: "", company: "", expiry: "" }); setModal("add"); };
  const openEdit = m => { setForm({ ...m }); setModal("edit"); };
  const openSell = m => { setSellMed(m); setSellQty(1); setSellCustomer("زبون عادي"); setModal("sell"); };

  const saveAdd = () => {
    if (!form.name || !form.quantity || !form.sellPrice) return;
    setMedicines(p => [...p, { ...form, id: genId(), quantity: +form.quantity, minQuantity: +form.minQuantity, buyPrice: +form.buyPrice, sellPrice: +form.sellPrice }]);
    setModal(null);
    showToast("تم إضافة الدواء بنجاح");
  };

  const saveEdit = () => {
    setMedicines(p => p.map(m => m.id === form.id ? { ...form, quantity: +form.quantity, minQuantity: +form.minQuantity, buyPrice: +form.buyPrice, sellPrice: +form.sellPrice } : m));
    setModal(null);
    showToast("تم تعديل الدواء بنجاح");
  };

  const deleteMed = id => {
    if (confirm("هل تريد حذف هذا الدواء؟")) {
      setMedicines(p => p.filter(m => m.id !== id));
      showToast("تم الحذف");
    }
  };

  const doSell = () => {
    if (!sellMed || sellQty < 1 || sellQty > sellMed.quantity) return;
    const total = sellQty * sellMed.sellPrice;
    setMedicines(p => p.map(m => m.id === sellMed.id ? { ...m, quantity: m.quantity - sellQty } : m));
    setSales(p => [...p, { id: genId(), medicine: sellMed.name, quantity: sellQty, total, date: today(), customer: sellCustomer }]);
    setSalesState(null);
    setModal(null);
    showToast(`تم بيع ${sellQty} وحدة من ${sellMed.name} بـ ${total} ر.س`);
  };

  const stockStatus = m => {
    if (m.quantity === 0) return <span className="badge badge-red">🔴 نفد</span>;
    if (m.quantity <= m.minQuantity) return <span className="badge badge-yellow">🟡 منخفض</span>;
    return <span className="badge badge-green">🟢 متاح</span>;
  };

  const fields = [
    { key: "name", label: "اسم الدواء", placeholder: "باراسيتامول 500mg" },
    { key: "category", label: "الفئة", placeholder: "مسكنات" },
    { key: "company", label: "الشركة", placeholder: "شركة الدواء" },
    { key: "quantity", label: "الكمية", type: "number" },
    { key: "minQuantity", label: "حد التنبيه", type: "number" },
    { key: "buyPrice", label: "سعر الشراء", type: "number" },
    { key: "sellPrice", label: "سعر البيع", type: "number" },
    { key: "expiry", label: "تاريخ الانتهاء", type: "date" },
  ];

  return (
    <div>
      <div className="section-header">
        <h3 className="section-title">💊 إدارة الأدوية</h3>
        <button className="btn-add" onClick={openAdd}>{icons.add} إضافة دواء</button>
      </div>

      <div className="search-box">
        <span>{icons.search}</span>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="ابحث بالاسم أو الفئة أو الشركة..." />
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr><th>الدواء</th><th>الفئة</th><th>المخزون</th><th>سعر البيع</th><th>الحالة</th><th>الانتهاء</th><th>إجراءات</th></tr>
          </thead>
          <tbody>
            {filtered.map(m => (
              <tr key={m.id}>
                <td>
                  <div style={{ fontWeight: 600 }}>{m.name}</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text2)" }}>{m.company}</div>
                </td>
                <td><span className="badge badge-blue">{m.category}</span></td>
                <td><strong>{m.quantity}</strong> <span style={{ color: "var(--text2)", fontSize: "0.8rem" }}>/ حد: {m.minQuantity}</span></td>
                <td>{m.sellPrice} ر.س</td>
                <td>{stockStatus(m)}</td>
                <td style={{ fontSize: "0.85rem" }}>{m.expiry}</td>
                <td>
                  <div className="action-btns">
                    <button className="btn-icon" onClick={() => openSell(m)} title="بيع" style={{ color: "var(--accent3)" }}>🛒</button>
                    <button className="btn-icon" onClick={() => openEdit(m)} title="تعديل">✏️</button>
                    <button className="btn-icon danger" onClick={() => deleteMed(m.id)} title="حذف">🗑️</button>
                  </div>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && <tr><td colSpan={7}><div className="no-data"><span className="icon">💊</span>لا توجد أدوية</div></td></tr>}
          </tbody>
        </table>
      </div>

      {(modal === "add" || modal === "edit") && (
        <Modal title={modal === "add" ? "➕ إضافة دواء جديد" : "✏️ تعديل الدواء"} onClose={() => setModal(null)}>
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
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
              <span style={{ color: "var(--text2)" }}>المتاح:</span>
              <strong>{sellMed.quantity} وحدة</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "var(--text2)" }}>سعر الوحدة:</span>
              <strong style={{ color: "var(--accent3)" }}>{sellMed.sellPrice} ر.س</strong>
            </div>
          </div>
          {sellMed.quantity === 0 && <div className="alert alert-danger">⚠️ هذا الدواء نفد من المخزون!</div>}
          <div className="form-group">
            <label>الكمية</label>
            <input className="form-input" type="number" min={1} max={sellMed.quantity} value={sellQty} onChange={e => setSellQty(+e.target.value)} />
          </div>
          <div className="form-group">
            <label>اسم الزبون (اختياري)</label>
            <input className="form-input" value={sellCustomer} onChange={e => setSellCustomer(e.target.value)} placeholder="زبون عادي" />
          </div>
          <div style={{ background: "rgba(16,185,129,0.1)", borderRadius: 10, padding: "1rem", textAlign: "center", marginBottom: "0.5rem" }}>
            <span style={{ color: "var(--text2)", fontSize: "0.9rem" }}>الإجمالي: </span>
            <strong style={{ fontSize: "1.4rem", color: "var(--accent3)" }}>{(sellQty * sellMed.sellPrice) || 0} ر.س</strong>
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

// ========== PURCHASES ==========
function Purchases({ medicines, setMedicines, purchases, setPurchases, showToast }) {
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState({ company: "", medicineName: "", quantity: "", buyPrice: "", date: today() });
  const [medSelect, setMedSelect] = useState("existing");

  const save = () => {
    if (!form.company || !form.medicineName || !form.quantity) return;
    const qty = +form.quantity;
    const price = +form.buyPrice || 0;
    // Update existing medicine quantity
    setMedicines(p => p.map(m => m.name === form.medicineName ? { ...m, quantity: m.quantity + qty, buyPrice: price || m.buyPrice } : m));
    setPurchases(p => [...p, { id: genId(), company: form.company, medicine: form.medicineName, quantity: qty, total: qty * price, date: form.date }]);
    setModal(false);
    showToast(`تم استلام ${qty} وحدة من ${form.medicineName}`);
  };

  return (
    <div>
      <div className="section-header">
        <h3 className="section-title">🏭 فواتير الشراء</h3>
        <button className="btn-add" onClick={() => setModal(true)}>{icons.add} فاتورة جديدة</button>
      </div>

      {purchases.length === 0 && <div className="no-data"><span className="icon">🏭</span>لا توجد فواتير شراء بعد</div>}

      {purchases.slice().reverse().map(p => (
        <div className="purchase-item" key={p.id}>
          <div className="purchase-info">
            <h4>{p.medicine}</h4>
            <div className="purchase-meta">
              <span>🏭 {p.company}</span>
              <span>📦 الكمية: {p.quantity}</span>
              <span>📅 {p.date}</span>
            </div>
          </div>
          <div className="purchase-total">{p.total} ر.س</div>
        </div>
      ))}

      {modal && (
        <Modal title="🏭 فاتورة شراء جديدة" onClose={() => setModal(false)}>
          <div className="form-group">
            <label>اسم الشركة</label>
            <input className="form-input" value={form.company} onChange={e => setForm(p => ({ ...p, company: e.target.value }))} placeholder="شركة الدواء الذهبي" />
          </div>
          <div className="form-group">
            <label>اختر الدواء</label>
            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.5rem" }}>
              <button className={`btn-small ${medSelect === "existing" ? "btn-pay" : ""}`} style={{ flex: 1 }} onClick={() => setMedSelect("existing")}>من القائمة</button>
              <button className={`btn-small ${medSelect === "new" ? "btn-pay" : ""}`} style={{ flex: 1 }} onClick={() => setMedSelect("new")}>اسم جديد</button>
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
            <label>الكمية المستلمة</label>
            <input className="form-input" type="number" min={1} value={form.quantity} onChange={e => setForm(p => ({ ...p, quantity: e.target.value }))} />
          </div>
          <div className="form-group">
            <label>سعر الشراء للوحدة (ر.س)</label>
            <input className="form-input" type="number" value={form.buyPrice} onChange={e => setForm(p => ({ ...p, buyPrice: e.target.value }))} />
          </div>
          <div className="form-group">
            <label>التاريخ</label>
            <input className="form-input" type="date" value={form.date} onChange={e => setForm(p => ({ ...p, date: e.target.value }))} />
          </div>
          {form.quantity && form.buyPrice && (
            <div style={{ background: "rgba(0,212,255,0.08)", borderRadius: 10, padding: "0.75rem", textAlign: "center", marginBottom: "0.5rem" }}>
              <span style={{ color: "var(--text2)" }}>إجمالي الفاتورة: </span>
              <strong style={{ color: "var(--accent)" }}>{(+form.quantity * +form.buyPrice).toFixed(2)} ر.س</strong>
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
    setModal(false);
    showToast("تم إضافة الدين بنجاح");
  };

  const pay = id => {
    setDebts(p => p.map(d => d.id === id ? { ...d, paid: true } : d));
    showToast("تم تسديد الدين ✅");
  };

  const del = id => {
    if (confirm("حذف هذا الدين؟")) {
      setDebts(p => p.filter(d => d.id !== id));
      showToast("تم الحذف");
    }
  };

  return (
    <div>
      <div className="section-header">
        <h3 className="section-title">📋 إدارة الديون</h3>
        <button className="btn-add" onClick={() => setModal(true)}>{icons.add} إضافة دين</button>
      </div>

      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.25rem", flexWrap: "wrap" }}>
        {[["all", "الكل"], ["unpaid", "غير مسددة"], ["paid", "مسددة"]].map(([v, l]) => (
          <button key={v} className={`btn-small ${filter === v ? "btn-pay" : ""}`} style={{ border: "1px solid var(--border)", borderRadius: 8, padding: "0.4rem 0.9rem", cursor: "pointer", fontFamily: "Cairo", color: filter === v ? "var(--accent3)" : "var(--text2)", background: "none" }} onClick={() => setFilter(v)}>{l}</button>
        ))}
        <span style={{ marginRight: "auto", color: "var(--danger)", fontWeight: 700, alignSelf: "center" }}>
          إجمالي غير مسدد: {totalUnpaid} ر.س
        </span>
      </div>

      {filtered.length === 0 && <div className="no-data"><span className="icon">📋</span>لا توجد ديون</div>}

      {filtered.map(d => (
        <div className="debt-card" key={d.id}>
          <div className="debt-header">
            <div>
              <div className="debt-name">{d.name}</div>
              {d.phone && <div style={{ fontSize: "0.85rem", color: "var(--text2)" }}>📞 {d.phone}</div>}
            </div>
            <div className={`debt-amount ${d.paid ? "paid" : ""}`}>{d.amount} ر.س</div>
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
            { key: "phone", label: "رقم الهاتف", placeholder: "05xxxxxxxx", type: "tel" },
            { key: "amount", label: "المبلغ (ر.س)", type: "number" },
            { key: "notes", label: "ماذا أخذ", placeholder: "باراسيتامول + فيتامينات" },
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
  const totalSales = sales.reduce((s, x) => s + x.total, 0);
  const totalPurchases = purchases.reduce((s, x) => s + x.total, 0);
  const profit = totalSales - totalPurchases;
  const unpaidDebts = debts.filter(d => !d.paid).reduce((s, d) => s + d.amount, 0);

  const topMeds = [...medicines].sort((a, b) => {
    const as = sales.filter(s => s.medicine === a.name).reduce((x, s) => x + s.quantity, 0);
    const bs = sales.filter(s => s.medicine === b.name).reduce((x, s) => x + s.quantity, 0);
    return bs - as;
  }).slice(0, 5);

  return (
    <div>
      <h3 className="section-title" style={{ marginBottom: "1.25rem" }}>📊 التقارير المالية</h3>
      <div className="stats-grid">
        <div className="stat-card green">
          <div className="stat-icon">💰</div>
          <div className="stat-value">{totalSales}</div>
          <div className="stat-label">إجمالي المبيعات (ر.س)</div>
        </div>
        <div className="stat-card red">
          <div className="stat-icon">🏭</div>
          <div className="stat-value">{totalPurchases}</div>
          <div className="stat-label">إجمالي المشتريات (ر.س)</div>
        </div>
        <div className="stat-card blue">
          <div className="stat-icon">📈</div>
          <div className="stat-value" style={{ color: profit >= 0 ? "var(--accent3)" : "var(--danger)" }}>{profit}</div>
          <div className="stat-label">صافي الأرباح (ر.س)</div>
        </div>
        <div className="stat-card purple">
          <div className="stat-icon">📋</div>
          <div className="stat-value">{unpaidDebts}</div>
          <div className="stat-label">ديون غير مسددة (ر.س)</div>
        </div>
      </div>

      <div className="section-header" style={{ marginTop: "1.5rem" }}>
        <h3 className="section-title">🏆 أكثر الأدوية مبيعاً</h3>
      </div>
      <div className="table-wrap">
        <table>
          <thead><tr><th>#</th><th>الدواء</th><th>المبيع</th><th>المخزون الحالي</th></tr></thead>
          <tbody>
            {topMeds.map((m, i) => (
              <tr key={m.id}>
                <td><strong>{i + 1}</strong></td>
                <td>{m.name}</td>
                <td>{sales.filter(s => s.medicine === m.name).reduce((x, s) => x + s.quantity, 0)} وحدة</td>
                <td>{m.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ========== STORAGE HELPERS ==========
function loadData(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch { return fallback; }
}
function saveData(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
}

// ========== MAIN APP ==========
export default function PharmacyApp() {
  const [loggedIn, setLoggedIn] = useState(() => loadData("ph_loggedIn", false));
  const [tab, setTab] = useState("dashboard");
  const [medicines, setMedicines] = useState(() => loadData("ph_medicines", INITIAL_MEDICINES));
  const [debts, setDebts] = useState(() => loadData("ph_debts", INITIAL_DEBTS));
  const [sales, setSales] = useState(() => loadData("ph_sales", INITIAL_SALES));
  const [purchases, setPurchases] = useState(() => loadData("ph_purchases", INITIAL_PURCHASES));
  const [toast, setToast] = useState(null);

  // Auto-save on every change
  useEffect(() => { saveData("ph_medicines", medicines); }, [medicines]);
  useEffect(() => { saveData("ph_debts", debts); }, [debts]);
  useEffect(() => { saveData("ph_sales", sales); }, [sales]);
  useEffect(() => { saveData("ph_purchases", purchases); }, [purchases]);
  useEffect(() => { saveData("ph_loggedIn", loggedIn); }, [loggedIn]);

  const showToast = useCallback(msg => setToast(msg), []);

  const tabs = [
    { id: "dashboard", label: "الرئيسية", icon: "📊" },
    { id: "medicines", label: "الأدوية", icon: "💊" },
    { id: "purchases", label: "المشتريات", icon: "🏭" },
    { id: "debts", label: "الديون", icon: "📋" },
    { id: "reports", label: "التقارير", icon: "📈" },
  ];

  if (!loggedIn) return (
    <>
      <style>{css}</style>
      <Login onLogin={() => setLoggedIn(true)} />
    </>
  );

  return (
    <>
      <style>{css}</style>
      <div className="app">
        <header className="header">
          <div className="header-logo">
            <span>💊</span>
            <h2>نظام إدارة الصيدلية</h2>
          </div>
          <div className="header-actions">
            <button className="btn-logout" onClick={() => setLoggedIn(false)}>
              {icons.logout} خروج
            </button>
          </div>
        </header>

        <nav className="nav">
          {tabs.map(t => (
            <button key={t.id} className={`nav-btn ${tab === t.id ? "active" : ""}`} onClick={() => setTab(t.id)}>
              {t.icon} {t.label}
            </button>
          ))}
        </nav>

        <main className="main">
          {tab === "dashboard" && <Dashboard medicines={medicines} debts={debts} sales={sales} purchases={purchases} />}
          {tab === "medicines" && <Medicines medicines={medicines} setMedicines={setMedicines} setSales={setSales} showToast={showToast} />}
          {tab === "purchases" && <Purchases medicines={medicines} setMedicines={setMedicines} purchases={purchases} setPurchases={setPurchases} showToast={showToast} />}
          {tab === "debts" && <Debts debts={debts} setDebts={setDebts} showToast={showToast} />}
          {tab === "reports" && <Reports medicines={medicines} sales={sales} purchases={purchases} debts={debts} />}
        </main>
      </div>

      {toast && <Toast msg={toast} onDone={() => setToast(null)} />}
    </>
  );
}
