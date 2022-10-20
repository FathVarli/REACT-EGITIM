const LocaleStorageKavrami = () => {
  return (
    <>
      <button
        onClick={() => {
          localStorage.setItem("ad", "emre");
        }}
      >
        Locale Storage Ekle
      </button>
      <button
        onClick={() => {
          console.log(localStorage.getItem("ad"));
        }}
      >
        Locale Storage Get Item
      </button>
      <button
        onClick={() => {
          console.log(localStorage.removeItem("ad"));
        }}
      >
        Locale Storage Remove Item
      </button>
    </>
  );
};

export default LocaleStorageKavrami;
