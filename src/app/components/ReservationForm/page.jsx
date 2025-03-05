import { useState } from "react";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    date: "",
    place: "",
    items: "PS5",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit =   async (e) => {
    e.preventDefault();
    
    const response = await fetch("/api/submit_form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Reservasi berhasil dikirim!");
      setFormData({ name: "", whatsapp: "", date: "", place: "", items: "PS5" });
    } else {
      alert("Terjadi kesalahan, coba lagi!");
    }
  };

  return (
    <div className="flex flex-col items-center bg-black min-h-screen p-6">
      <header className="bg-blue-600 text-white w-full p-4 text-center">
        <h1 className="text-2xl font-semibold">Reservasi Rental PS</h1>
        <p>Isi form di bawah untuk melakukan reservasi</p>
      </header>

      <main className="max-w-4xl w-full bg-white p-6 rounded-lg shadow-lg mt-6">
        <h2 className="text-2xl font-semibold text-center mb-6">Formulir Reservasi</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-lg font-medium text-gray-700">Nama Lengkap</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600" />
          </div>

          <div>
            <label className="block text-lg font-medium text-black">No. WhatsApp</label>
            <input type="text" name="whatsapp" value={formData.whatsapp} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600" />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">Tanggal Reservasi</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600" />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">Tempat</label>
            <input type="text" name="place" value={formData.place} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600" />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">Barang yang Dipilih</label>
            <select name="items" value={formData.items} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600">
              <option value="PS5">PS5</option>
              <option value="PS4">PS4</option>
              <option value="Game PS5 - Call of Duty">Game PS5 - Call of Duty</option>
              <option value="Game PS4 - FIFA 23">Game PS4 - FIFA 23</option>
            </select>
          </div>

          <div className="text-center">
            <button type="submit" className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-600">
              Kirim Reservasi
            </button>
          </div>
        </form>
      </main>

      <footer className="bg-blue-600 text-white w-full py-4 text-center mt-6">
        <p>&copy; 2025 Rental PS - All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default ReservationForm;
