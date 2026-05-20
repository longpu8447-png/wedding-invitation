import React, { useState } from 'react';

export default function WeddingInvitation() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    attend: '參加',
    category: '男方朋友',
    adults: 1,
    children: 0,
    childChair: '不需要',
    childTableware: '不需要',
    blessing: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert('回覆已送出 ❤️');
    console.log(form);
  };

  return (
    <div className="min-h-screen bg-[#f8f1eb] text-[#7a1f1f]">
      <section className="bg-[#8b0000] text-white p-6 text-center">
        <div className="max-w-md mx-auto">
          <img
            src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop"
            alt="婚紗照"
            className="rounded-3xl w-full h-[400px] object-cover border-4 border-[#d4af37]"
          />

          <h1 className="text-5xl font-bold mt-6">囍</h1>

          <h2 className="text-3xl font-semibold mt-4">
            昊天 & 彥儒
          </h2>

          <p className="mt-4 text-lg">
            誠摯邀請您參與我們的重要時刻
          </p>

          <div className="mt-6 space-y-2">
            <p>2027 / 01 / 17</p>
            <p>新天地梧棲創始店</p>
            <p>午宴</p>
          </div>
        </div>
      </section>

      <section className="max-w-md mx-auto bg-white rounded-3xl shadow-xl p-6 my-10">
        <h3 className="text-2xl font-bold text-center mb-6 text-[#8b0000]">
          RSVP 出席回覆
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="姓名"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="聯絡電話"
            value={form.phone}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
            required
          />

          <select
            name="attend"
            value={form.attend}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
          >
            <option>參加</option>
            <option>不克前往</option>
          </select>

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
          >
            <option>男方朋友</option>
            <option>男方家屬的朋友</option>
            <option>女方朋友</option>
            <option>女方家屬的朋友</option>
          </select>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              name="adults"
              min="0"
              value={form.adults}
              onChange={handleChange}
              className="border rounded-xl p-3"
              placeholder="大人人數"
            />

            <input
              type="number"
              name="children"
              min="0"
              value={form.children}
              onChange={handleChange}
              className="border rounded-xl p-3"
              placeholder="小孩人數"
            />
          </div>

          <select
            name="childChair"
            value={form.childChair}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
          >
            <option>不需要兒童椅</option>
            <option>需要兒童椅</option>
          </select>

          <select
            name="childTableware"
            value={form.childTableware}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
          >
            <option>不需要兒童餐具</option>
            <option>需要兒童餐具</option>
          </select>

          <textarea
            name="blessing"
            placeholder="給新人的祝福 ❤️"
            value={form.blessing}
            onChange={handleChange}
            className="w-full border rounded-xl p-3 h-32"
          />

          <button
            type="submit"
            className="w-full bg-[#8b0000] text-white py-4 rounded-2xl text-lg font-semibold"
          >
            送出回覆
          </button>
        </form>
      </section>
    </div>
  );
}
