
import { useState } from "react";
import {  Link, useSearchParams } from "react-router-dom";
import SearchImg from "../assets/images/search.png";
import { useTranslation } from "react-i18next";

function SearchBar({ onFilter }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState({
    type: searchParams.get("type") || "",
    city: searchParams.get("city") || "",
    minPrice: searchParams.get("minPrice") || 0,
    maxPrice: searchParams.get("maxPrice") || 100000,
  });
  const {t,i18n} =useTranslation()

  const handleChange = (e) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    });
  };

  const handleFilter = () => {
    setSearchParams(query);
    if (onFilter && typeof onFilter === 'function') {
      onFilter(query); 
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
  return (
    <div className="searchBar">
    <div className="contanier">
      <div className="row">
        <form>
        <select name="type" onChange={handleChange} required className="thing">
                <option value="">{t("categorySelect")}</option>
                <optgroup label="Nəqliyyat">
                  <option value="Avtomobiller">{t("vehicles")}</option>
                  <option value="Su Nəqliyyatı">{t("waterTransport")}</option>
                  <option value="Avtobuslar">{t("bus")}</option>
                  <option value="Motorcycle">{t("motorcycle")}</option>
                  <option value="Qeydiyyat Nişanları">{t("registrationBadges")}</option>
                </optgroup>
                <optgroup label="Elektronika">
                  <option value="Phone">{t("phone")}</option>
                  <option value="Laptop">{t("laptop")}</option>
                  <option value="Tablet">{t("tablet")}</option>
                  <option value="Simcard">{t("numbersSimCard")}</option>
                  <option value="Kompyuter">Masaustu-Komputerler</option>
                  <option value="Smart-watch">{t("smartWatch")}</option>
                </optgroup>
                <optgroup label="Ehtiyat hissələri">
                  <option value="Car Parts">{t("carParts")}</option>
                  <option value="Bike Parts">{t("bikeParts")}</option>
                </optgroup>
                <optgroup label="Xidmətlər və Biznes">
                  <option value="Avadanlıq">{t("rentalOfequipment")}</option>
                  <option value="Biznes">{t("equipmentBiznes")}</option>
                  <option value="Dayələr">{t("nannies")}</option>
                  <option value="Foto">{t("photos")}</option>
                  <option value="Gözəllik">{t("beauty")}</option>
                  <option value="IT">{t("it")}</option>
                  <option value="Logistika">{t("logistcs")}</option>
                  <option value="Təmizlik">{t("clean")}</option>
                  <option value="Tərcümə">{t("translation")}</option>
                  <option value="Tibbi Xidmətlər">{t("medical")}</option>
                </optgroup>
                <optgroup label="Şəxsi Əşyalar">
                  <option value="Clothing">{t("clothing")}</option>
                  <option value="Accessories">{t("accessories")}</option>
                </optgroup>
                <optgroup label="Hobbi">
                  <option value="Books">{t("books")}</option>
                  <option value="Sports">{t("sports")}</option>
                </optgroup>
                <optgroup label="Uşaq aləmi">
                  <option value="Toys">{t("toys")}</option>
                  <option value="Clothes">{t("clothing")}</option>
                </optgroup>
                <optgroup label="Daşınmaz Əmlak">
                  <option value="Mənzillər">{t("apartments")}</option>
                  <option value="Villalar">{t("villas")}</option>
                  <option value="Torpaq">{t("land")}</option>
                  <option value="Obyekt">{t("office")}</option>
                  <option value="Garage">{t("garage")}</option>
                </optgroup>
                <optgroup label="İş Elanları">
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Freelance">Freelance</option>
                </optgroup>
                <optgroup label="Heyvanlar">
                  <option value="Dogs">{t("dogs")}</option>
                  <option value="Cats">{t("cats")}</option>
                  <option value="Birds">{t("birds")}</option>
                  <option value="Fish">{t("fish")}</option>
                  <option value="Horses">{t("horses")}</option>
                </optgroup>
              </select>
              <select
    id="city"
    name="city"
    onChange={handleChange}
    value={query.city}
    className="thing"
  >
    <option value="">{t("citySelect")}</option>
    {cities.map((city) => (
      <option key={city} value={city}>
        {city}
      </option>
    ))}
  </select>
             <Link to={`/list?type=${query.type}&city=${query.city}`}>
          <img src={SearchImg} alt="Search" />
        </Link>
        </form>
      </div>
    </div>
  </div>
  );
}

export default SearchBar;
