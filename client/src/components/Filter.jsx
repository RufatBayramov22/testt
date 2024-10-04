import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchImg from '../assets/images/search.png';

function Filter({ onFilter }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState({
    type: searchParams.get("type") || "",
    city: searchParams.get("city") || "",
    minPrice: searchParams.get("minPrice") || 0,
    maxPrice: searchParams.get("maxPrice") || 100000,
    engineSize: searchParams.get("engineSize") || "",
    brand: searchParams.get("brand") || "",
    roomCount: searchParams.get("roomCount") || "",
    area:searchParams.get("area") || "",
    rentOrSale:searchParams.get("rentOrSale") ||"",
    emlakinNovu:searchParams.get("emlakinNovu") || "",
    floorNumber: searchParams.get("floorNumber") || "",
    model: searchParams.get("model") || "",
    mileage: searchParams.get("mileage") || "",
    author: searchParams.get("author") || "",
    genre: searchParams.get("genre") || "",
    breed: searchParams.get("breed") || "",
    age: searchParams.get("age") || "",
    experience: searchParams.get("experience") || "",
    registerNumber: searchParams.get("registerNumber") || "",
    seatCount:searchParams.get("seatCount") || "",
    busType:searchParams.get("busType") || "",
    fuelType:searchParams.get("fuelType") || "",
    gearbox:searchParams.get("gearbox") || "",
    boatType:searchParams.get("boatType") || "",
    length:searchParams.get("length") || "",
    enginePower:searchParams.get("enginePower") || "",


  });

  const carModels = ['BMW', 'Mercedes-Benz', 'Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan', 'Volkswagen'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuery(prev => ({ ...prev, [name]: value }));
  };

  const handleFilter = () => {
    const updatedQuery = { ...query };
    // Eğer model boşsa, model filtresini kaldır
    if (!updatedQuery.model) {
      delete updatedQuery.model;
    }
    setSearchParams(updatedQuery);
    if (onFilter && typeof onFilter === 'function') {
      onFilter(updatedQuery);
    } else {
      console.error('onFilter is not a function');
    }
  };

  const cities = [
    'Baki', 'Gəncə', 'Sumqayıt', 'Mingəçevir', 'Şirvan', 'Lənkəran', 'Naxçıvan', 'Şəki', 'Quba', 'Qusar', 'Zaqatala', 'Şamaxı', 'Cəlilabad',  'Salyan',  'Qəbələ', 'Ağstafa',   'Ismayilli', 'Ağdam', 'Ağcabədi', 'Bərdə',"Ağdaş","Ağdərə","Ağsu","Astara","Balakən","Biləsuvar","Cəbrayıl","Culfa","Daşkəsən","Füzuli","Gədəbəy","Göyçay","Göygöl","Göytəpə","Hacıqabul","Horadiz","Imişli","Kəlbəcər","Kürdəmir","Laçın","Lerik","Masallı","Nabran","Naftalan","Neftçala","Oğuz","Ordubad","Qax","Qazax","Qobustan","Qubadlı","Saatlı","Sabirabad","Şabran","Şahbuz","Samux","Şəmkir","Şərur","Siyəzən","Şuşa","Tərtər","Tovuz","Ucar","Xaçmaz","Xankəndi","Xırdalan","Xocalı","Xocavənd","Xudat","Yardımlı","Yevlax","Zəngilan","Zərdab"
    // Bütün digər şəhərləri əlavə edin
   
    
  ];
    // Cities arrayini əlifba sırasına görə sıralamaq
    cities.sort();

    
  const handleCategoryChange = (e) => {
    const selectedType = e.target.value;
    let fields = {};

    switch (selectedType) {
      case 'Sedan':
      case 'SUV':
      case 'Truck':
      case 'Motorcycle':
        fields = { engineSize: "", mileage: "" };
        break;

      case 'Avtomobiller':
        fields = { model: "", engineSize: "", mileage: "", fuelType: "", gearbox: "" };
        break;

      case 'Su Nəqliyyatı':
        fields = { boatType: "", length: "", enginePower: "" };
        break;

      case 'Avtobuslar':
        fields = { busType: "", seatCount: "" };
        break;

      case 'Qeydiyyat Nişanları':
        fields = { registerNumber: "" };
        break;

      case 'Phone':
      case 'Laptop':
      case 'Tablet':
        fields = { brand: "", model: "" };
        break;

      case 'Simcard':
        fields = { number: "" };
        break;

      case 'Kompyuter':
        fields = { brand: "", specifications: "" };
        break;

      case 'Smart-watch':
        fields = { brand: "", features: "" };
        break;

      case 'Car Parts':
      case 'Bike Parts':
        fields = { partName: "", condition: "" };
        break;

      case 'Avadanlıq':
      case 'Biznes':
      case 'Dayələr':
      case 'Foto':
      case 'Gözəllik':
      case 'IT':
      case 'Logistika':
      case 'Təmizlik':
      case 'Tərcümə':
      case 'Tibbi Xidmətlər':
        fields = { serviceType: "", description: "" };
        break;

      case 'Clothing':
      case 'Accessories':
      case 'Vape':
        fields = { brand: "", size: "" };
        break;

      case 'Toys':
      case 'Clothes':
        fields = { ageGroup: "", type: "" };
        break;
        
      default:
        fields = {};
        break;
    }

    setQuery(prev => ({ ...prev, ...fields, type: selectedType, model: "" }));
  };

  return (
    <div className="filter">
      <h1>
        Search results for <b>{searchParams.get("city")}</b>
      </h1>
      <div className="top">
        <div className="item">
        <select
    id="city"
    name="city"
    onChange={handleChange}
    value={query.city}
    className="thing"
  >
    <option value="">Select a City</option>
    {cities.map((city) => (
      <option key={city} value={city}>
        {city}
      </option>
    ))}
  </select>
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select
            name="type"
            id="type"
            onChange={(e) => {
              handleCategoryChange(e);
              handleChange(e);
            }}
            value={query.type}
          >
            <option value="">Any</option>
            <optgroup label="Nəqliyyat">
                  <option value="Avtomobiller">Avtomobiller</option>
                  <option value="Su Nəqliyyatı">Su Nəqliyyatı</option>
                  <option value="Avtobuslar">Avtobuslar</option>
                  <option value="Motorcycle">Motorcycle</option>
                  <option value="Qeydiyyat Nişanları">Qeydiyyat Nişanları</option>
                </optgroup>
                <optgroup label="Elektronika">
                  <option value="Phone">Phone</option>
                  <option value="Laptop">Laptop</option>
                  <option value="Tablet">Tablet</option>
                  <option value="Simcard">Nömrələr və Sim Kart</option>
                  <option value="Kompyuter">Masaustu-Komputerler</option>
                  <option value="Smart-watch">Smart saat</option>
                </optgroup>
                <optgroup label="Ehtiyat hissələri">
                  <option value="Car Parts">Car Parts</option>
                  <option value="Bike Parts">Bike Parts</option>
                </optgroup>
                <optgroup label="Xidmətlər və Biznes">
                  <option value="Avadanlıq">Avadanlığın icarəsi</option>
                  <option value="Biznes">Biznes üçün avadanlıq</option>
                  <option value="Dayələr">Dayələr və Baxıcılar</option>
                  <option value="Foto">Foto və Video çəkiliş</option>
                  <option value="Gözəllik">Gözəllik,sağlamlıq</option>
                  <option value="IT">IT Telekom</option>
                  <option value="Logistika">Logistika</option>
                  <option value="Təmizlik">Təmizlik</option>
                  <option value="Tərcümə">Tərcümə</option>
                  <option value="Tibbi Xidmətlər">Tibbi Xidmətlər</option>
                </optgroup>
                <optgroup label="Şəxsi Əşyalar">
              <option value="Clothing">Clothing</option>
              <option value="Accessories">Accessories</option>
            </optgroup>
                <optgroup label="Hobbi">
                  <option value="Books">Books</option>
                  <option value="Sports">Sports</option>
                </optgroup>
                <optgroup label="Uşaq aləmi">
                  <option value="Toys">Toys</option>
                  <option value="Clothes">Clothes</option>
                </optgroup>
                <optgroup label="Daşınmaz Əmlak">
                  <option value="Mənzillər">Mənzillər</option>
                  <option value="Villalar">Villalar,bağ evləri</option>
                  <option value="Torpaq">Torpaq</option>
                  <option value="Obyekt">Obyektler və Ofislər</option>
                  <option value="Garage">Qarajlar</option>

                </optgroup>
                <optgroup label="İş Elanları">
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Freelance">Freelance</option>
                </optgroup>
                <optgroup label="Heyvanlar">
                  <option value="Dogs">Dogs</option>
                  <option value="Cats">Cats</option>
                  <option value="Birds">Birds</option>
                  <option value="Fish">Fish</option>
                  <option value="Horses">Horses</option>
                </optgroup>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
            onChange={handleChange}
            value={query.minPrice}
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            placeholder="any"
            onChange={handleChange}
            value={query.maxPrice}
          />
        </div>
        {query.type === 'Avtomobiller' && (
              <>
                <div className="item">
                  <label htmlFor="model">Model</label>
                  <select
                    id="model"
                    name="model"
                    value={query.model || ''}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Seçin</option>
                    <option value="BMW">BMW</option>
                    <option value="Mercedes-Benz">Mercedes-Benz</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Honda">Honda</option>
                    <option value="Ford">Ford</option>
                    <option value="Chevrolet">Chevrolet</option>
                    <option value="Nissan">Nissan</option>
                    <option value="Volkswagen">Volkswagen</option>
                  </select>
                </div>
                <div className="item">
                  <label htmlFor="engineSize">Mühərrikin Ölçüsü</label>
                  <input
                    id="engineSize"
                    name="engineSize"
                    type="text"
                    value={query.engineSize || ''}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="item">
                  <label htmlFor="mileage">Yürüş</label>
                  <input
                    id="mileage"
                    name="mileage"
                    type="number"
                    value={query.mileage || ''}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="item">
                  <label htmlFor="fuelType">Yanacaq Növü</label>
                  <select
                    id="fuelType"
                    name="fuelType"
                    value={query.fuelType || ''}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Seçin</option>
                    <option value="Benzin">Benzin</option>
                    <option value="Dizel">Dizel</option>
                    <option value="Elektrik">Elektrik</option>
                  </select>
                </div>
                <div className="item">
                  <label htmlFor="gearbox">Sürətlər Qutusu</label>
                  <select
                    id="gearbox"
                    name="gearbox"
                    value={query.gearbox || ''}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Seçin</option>
                    <option value="Mexaniki">Mexaniki</option>
                    <option value="Avtomatik">Avtomatik</option>
                  </select>
                </div>
              </>
            )}

            {query.type === 'Su Nəqliyyatı' && (
              <>
                <div className="item">
                  <label htmlFor="boatType">Qayıq Növü</label>
                  <input
                    id="boatType"
                    name="boatType"
                    type="text"
                    value={query.boatType || ''}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="item">
                  <label htmlFor="length">Uzunluq (metr)</label>
                  <input
                    id="length"
                    name="length"
                    type="number"
                    value={query.length || ''}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="item">
                  <label htmlFor="enginePower">Mühərrikin Gücü (HP)</label>
                  <input
                    id="enginePower"
                    name="enginePower"
                    type="number"
                    value={query.enginePower || ''}
                    onChange={handleChange}
                    required
                  />
                </div>
              </>
            )}

            {query.type === 'Avtobuslar' && (
              <>
                <div className="item">
                  <label htmlFor="busType">Avtobus Növü</label>
                  <input
                    id="busType"
                    name="busType"
                    type="text"
                    value={query.busType || ''}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="item">
                  <label htmlFor="seatCount">Oturacaq Sayı</label>
                  <input
                    id="seatCount"
                    name="seatCount"
                    type="number"
                    value={query.seatCount || ''}
                    onChange={handleChange}
                    required
                  />
                </div>
              </>
            )}
{query.type === 'Mənzillər' && (
              <>
                <div className="item">
                  <label htmlFor="floorNumber">Mərtəbə</label>
                  <input
                    id="floorNumber"
                    name="floorNumber"
                    type="number"
                    value={query.floorNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="item">
                  <label htmlFor="roomCount">Otaq Sayı</label>
                  <input
                    id="roomCount"
                    name="roomCount"
                    type="number"
                    value={query.roomCount}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="item">
                  <label htmlFor="area">Ölçü (m²)</label>
                  <input
                    id="area"
                    name="area"
                    type="number"
                    value={query.area}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="item">
                  <label htmlFor="rentOrSale">Kirə / Satılır</label>
                  <select
                    id="rentOrSale"
                    name="rentOrSale"
                    value={query.rentOrSale}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Seçin</option>
                    <option value="Rent">Kirə</option>
                    <option value="Sale">Satılır</option>
                  </select>
                </div>
              </>
            )}

            {query.type === 'Villalar' && (
              <>
                      <div className="item">
                  <label htmlFor="emlakinNovu">Əmlakın Növü</label>
                  <select
                    id="emlakinNovu"
                    name="emlakinNovu"
                    value={query.emlakinNovu}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Seçin</option>
                    <option value="Villa">Villa</option>
                    <option value="Bağ evi">Bağ evi</option>
                    <option value="Həyət evi">Həyət evi</option>

                  </select>
                </div>
                <div className="item">
                  <label htmlFor="rentOrSale">Kirə / Satılır</label>
                  <select
                    id="rentOrSale"
                    name="rentOrSale"
                    value={query.rentOrSale}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Seçin</option>
                    <option value="Rent">Kirə</option>
                    <option value="Sale">Satılır</option>
                  </select>
                </div>
                <div className="item">
                  <label htmlFor="area">Ölçü (m²)</label>
                  <input
                    id="area"
                    name="area"
                    type="number"
                    value={query.area}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="item">
                  <label htmlFor="roomCount">Otaq Sayı</label>
                  <input
                    id="roomCount"
                    name="roomCount"
                    type="number"
                    value={query.roomCount}
                    onChange={handleChange}
                    required
                  />
                </div>
              </>
          
            )}
        
        {query.type === 'Mənzillər' ? (
          <>
            <div className="item">
              <label htmlFor="floorNumber">Floor Number</label>
              <input
                type="text"
                id="floorNumber"
                name="floorNumber"
                value={query.floorNumber}
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="roomCount">Room Count</label>
              <input
                type="number"
                id="roomCount"
                name="roomCount"
                value={query.roomCount}
                onChange={handleChange}
              />
            </div>
          </>
        ) : null}
        {query.type === 'Phone' || query.type === 'Laptop' || query.type === 'Tablet' ? (
          <>
            <div className="item">
              <label htmlFor="brand">Brand</label>
              <input
                type="text"
                id="brand"
                name="brand"
                value={query.brand}
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="model">Model</label>
              <input
                type="text"
                id="model"
                name="model"
                value={query.model}
                onChange={handleChange}
              />
            </div>
          </>
        ) : null}
        {query.type === 'Plumbing' || query.type === 'Electrical' || query.type === 'Cleaning' ? (
          <div className="item">
            <label htmlFor="experience">Experience</label>
            <input
              type="text"
              id="experience"
              name="experience"
              value={query.experience}
              onChange={handleChange}
            />
          </div>
        ) : null}
        {query.type === 'Books' || query.type === 'Sports' ? (
          <>
            <div className="item">
              <label htmlFor="author">Author</label>
              <input
                type="text"
                id="author"
                name="author"
                value={query.author}
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="genre">Genre</label>
              <input
                type="text"
                id="genre"
                name="genre"
                value={query.genre}
                onChange={handleChange}
              />
            </div>
          </>
        ) : null}
        {query.type === 'Dogs' || query.type === 'Cats' || query.type === 'Birds' ? (
          <>
            <div className="item">
              <label htmlFor="breed">Breed</label>
              <input
                type="text"
                id="breed"
                name="breed"
                value={query.breed}
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="age">Age</label>
              <input
                type="text"
                id="age"
                name="age"
                value={query.age}
                onChange={handleChange}
              />
            </div>
          </>
        ) : null}
        {query.type === 'Avtomobiller' ? (
          <div className="item">
            <label htmlFor="model">Model</label>
            <select
              id="model"
              name="model"
              onChange={handleChange}
              value={query.model}
            >
              <option value="">Select a model</option>
              {carModels.map((model, index) => (
                <option key={index} value={model}>{model}</option>
              ))}
            </select>
          </div>
        ) : null}
        {query.type === 'Qeydiyyat Nişanları' ? (
          <div className="item">
            <label htmlFor="registerNumber">Register Number</label>
            <input
              type="text"
              id="registerNumber"
              name="registerNumber"
              value={query.registerNumber}
              onChange={handleChange}
            />
          </div>
        ) : null}
        <button type="button" onClick={handleFilter}>
          <img src={SearchImg} alt="Search" />
        </button>
      </div>
    </div>
  );
}

export default Filter;
