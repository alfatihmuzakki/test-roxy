import { useState } from "react";

function App() {
  const initialItems = [
    { id: "BR-001", namaBarang: "Amoxan", harga: 20000, quantity: 15 },
    { id: "BR-002", namaBarang: "Panadol", harga: 10000, quantity: 10 },
    { id: "BR-003", namaBarang: "Parasetamol", harga: 20000, quantity: 12 },
    { id: "BR-004", namaBarang: "Promag", harga: 5000, quantity: 40 },
  ];

  const [items, setItems] = useState(initialItems);
  const [id, setId] = useState("");
  const [namaBarang, setNamaBarang] = useState("");
  const [harga, setHarga] = useState("");
  const [quantity, setQuantity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!id || !namaBarang || !harga || !quantity) return;

    const newItem = { id, namaBarang, harga, quantity };
    console.log(newItem);

    handleAddItems(newItem);

    setId("");
    setNamaBarang("");
    setHarga("");
    setQuantity("");
  }

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  return (
    <>
      <div className="mt-10 flex-column w-[80%] mx-auto">
        <h1 className="text-3xl font-bold text-center">Master Barang</h1>
        <div>
          <form onSubmit={handleSubmit} className="flex mt-5 gap-10 mx-auto w-full justify-center">
            <div>
              <div className="flex gap-10">
                <p>Id Barang</p>
                <input type="text" className="border-2" value={id} onChange={(e) => setId(e.target.value)} />
              </div>
              <div className="flex mx-auto gap-3">
                <p>Nama Barang</p>
                <input
                  type="text"
                  className="border-2 "
                  value={namaBarang}
                  onChange={(e) => setNamaBarang(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div className="flex mx-auto gap-3">
                <p>Harga</p>
                <input type="text" className="border-2 " value={harga} onChange={(e) => setHarga(e.target.value)} />
              </div>
              <div className="flex mx-auto gap-7">
                <p>Qty</p>
                <input type="text" className="border-2" onChange={(e) => setQuantity(e.target.value)} />
              </div>
            </div>
            <button className="border-2 p-2 rounded-md hover:bg-slate-300">add item</button>
          </form>
        </div>

        <div>
          <div className="flex gap-10 justify-center mt-20 w-full">
            <p className="w-[100px]">Id Barang</p>
            <p className="w-[180px]">Nama Barang</p>
            <p className="w-[100px]">Harga</p>
            <p className="w-[100px]">Quantity</p>
            <p className="w-[100px]">Option</p>
          </div>
          {items.map((item) => (
            <>
              <div className="flex gap-10 justify-center w-full">
                <p className="w-[100px]">{item.id}</p>
                <p className="w-[180px]">{item.namaBarang}</p>
                <p className="w-[100px]">{item.harga}</p>
                <p className="w-[100px]">{item.quantity}</p>
                <p>
                  <span>
                    <button className="border-2 p-[3px] hover:bg-slate-300 rounded-md" onClick={() => handleDeleteItem(item.id)}>
                      hapus
                    </button>
                  </span>
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
